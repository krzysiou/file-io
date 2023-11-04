import type { File, FileType, Subject } from '../../../types';
import type { DBPrzepisFile, DBSubject } from '../../types';

import { PostgresClient } from '../../postgress-client';

const readPrzepisFiles = async (userId: string) => {
  const przepisInfo = await PostgresClient.query<DBPrzepisFile>(
    `SELECT f.*, pf.* FROM files f JOIN przepis_forms pf ON pf.file_id=f.file_id WHERE f.user_id='${userId}'`
  );

  const wypisFiles: File[] = await Promise.all(
    przepisInfo.rows.map(async (fileRow) => {
      const subjectsInfo = await PostgresClient.query<DBSubject>(
        `SELECT s.* FROM przepis_subjects s WHERE s.form_id='${fileRow.form_id}'`
      );

      const subjects: Subject[] = subjectsInfo.rows.map((SubjectRow) => ({
        name: SubjectRow.name,
        type: SubjectRow.type,
        grade: SubjectRow.grade,
        dateOfCompletion: SubjectRow.date_of_completion,
      }));

      return {
        id: fileRow.file_id,
        title: fileRow.title,
        type: fileRow.type as FileType,
        dateOfCreation: fileRow.date_of_creation,
        dateOfUpdate: fileRow.date_of_update,
        form: {
          name: fileRow.name,
          surname: fileRow.surname,
          albumNumber: fileRow.album_number,
          email: fileRow.email,
          fieldOfStudy: fileRow.field_of_study,
          dean: fileRow.dean,
          level: fileRow.level,
          year: fileRow.year,
          termType: fileRow.term_type,
          subjects,
        },
      };
    })
  );

  return wypisFiles;
};

export { readPrzepisFiles };
