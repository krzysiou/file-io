import type { DBWypisFile } from '../../types';
import type { File, FileType } from '../../../types';

import { PostgresClient } from '../../postgress-client';

const readWypisFiles = async (userId: string) => {
  const wypisInfo = await PostgresClient.query<DBWypisFile>(
    `SELECT f.*, wf.* FROM files f JOIN wypis_forms wf ON wf.file_id=f.file_id WHERE f.user_id='${userId}'`
  );

  const wypisFiles: File[] = wypisInfo.rows.map((row) => ({
    id: row.file_id,
    title: row.title,
    type: row.type as FileType,
    dateOfCreation: row.date_of_creation,
    dateOfUpdate: row.date_of_update,
    form: {
      name: row.name,
      surname: row.surname,
      albumNumber: row.album_number,
      email: row.email,
      fieldOfStudy: row.field_of_study,
      faculty: row.faculty,
      dean: row.dean,
    },
  }));

  return wypisFiles;
};

export { readWypisFiles };
