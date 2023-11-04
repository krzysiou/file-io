import type { DBMainSubject, DBSPZFile, DBSideSubject } from '../../types';
import type { File, FileType, MainSubject, SideSubject } from '../../../types';

import { PostgresClient } from '../../postgress-client';

const readSpzFiles = async (userId: string) => {
  const spzInfo = await PostgresClient.query<DBSPZFile>(
    `SELECT f.*, sf.* FROM files f JOIN spz_forms sf ON sf.file_id=f.file_id WHERE f.user_id='${userId}'`
  );

  const spzFiles: File[] = await Promise.all(
    spzInfo.rows.map(async (fileRow) => {
      const mainSubjectsInfo = await PostgresClient.query<DBMainSubject>(
        `SELECT sms.* FROM spz_main_subjects sms WHERE sms.form_id='${fileRow.form_id}'`
      );

      const mainSubjects: MainSubject[] = mainSubjectsInfo.rows.map(
        (SubjectRow) => ({
          name: SubjectRow.name,
          wclps: SubjectRow.wclps,
          ects: SubjectRow.ects,
        })
      );

      const sideSubjectsInfo = await PostgresClient.query<DBSideSubject>(
        `SELECT sms.* FROM spz_side_subjects sms WHERE sms.form_id='${fileRow.form_id}'`
      );

      const sideSubjects: SideSubject[] = sideSubjectsInfo.rows.map(
        (SubjectRow) => ({
          name: SubjectRow.name,
          wclps: SubjectRow.wclps,
          ects: SubjectRow.ects,
          faculty: SubjectRow.faculty,
        })
      );

      return {
        id: fileRow.file_id,
        title: fileRow.title,
        type: fileRow.type as FileType,
        dateOfCreation: fileRow.date_of_creation,
        dateOfUpdate: fileRow.date_of_update,
        form: {
          info: {
            name: fileRow.name,
            surname: fileRow.surname,
            albumNumber: fileRow.album_number,
            fieldOfStudy: fileRow.field_of_study,
            email: fileRow.email,
            level: fileRow.level,
            term: fileRow.term,
            year: fileRow.year,
            dean: fileRow.dean,
          },
          mainSubjects,
          sideSubjects,
        },
      };
    })
  );

  return spzFiles;
};

export { readSpzFiles };
