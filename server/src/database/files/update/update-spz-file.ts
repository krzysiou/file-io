import { v4 as uuid } from 'uuid';

import type { File, SpzForm } from '../../../types';
import type { DBSpzForm } from '../../types';

import { PostgresClient } from '../../postgress-client';

const updateSpzFile = async (fileId: string, file: File) => {
  const { title, type, dateOfCreation, dateOfUpdate, form } = file;
  const { info, mainSubjects, sideSubjects } = form as SpzForm;
  const {
    name,
    surname,
    albumNumber,
    fieldOfStudy,
    email,
    level,
    term,
    year,
    dean,
  } = info;

  try {
    await PostgresClient.query(
      `UPDATE files SET title='${title}', type='${type}', date_of_creation=${dateOfCreation}, date_of_update=${dateOfUpdate} WHERE file_id='${fileId}'`
    );

    await PostgresClient.query(
      `UPDATE spz_forms SET name='${name}', surname='${surname}', album_number='${albumNumber}', email='${email}', field_of_study='${fieldOfStudy}', dean='${dean}', level='${level}', year='${year}', term='${term}' WHERE file_id='${fileId}'`
    );

    const formInfo = await PostgresClient.query<DBSpzForm>(
      `SELECT sf.form_id FROM spz_forms sf WHERE sf.file_id='${fileId}'`
    );

    const { form_id } = formInfo.rows[0];

    await PostgresClient.query(
      `DELETE FROM spz_main_subjects sms
      USING spz_forms sf
      WHERE sf.file_id = '${fileId}' AND sms.form_id=sf.form_id;`
    );

    await PostgresClient.query(
      `DELETE FROM spz_side_subjects sss
      USING spz_forms sf
      WHERE sf.file_id = '${fileId}' AND sss.form_id=sf.form_id;`
    );

    await mainSubjects.forEach(async ({ name, wclps, ects }) => {
      const subjectId = uuid();

      await PostgresClient.query(
        `INSERT INTO spz_main_subjects VALUES('${subjectId}', '${name}', '${wclps}', '${ects}', '${form_id}')`
      );
    });

    await sideSubjects.forEach(async ({ name, wclps, ects, faculty }) => {
      const subjectId = uuid();

      await PostgresClient.query(
        `INSERT INTO spz_side_subjects VALUES('${subjectId}', '${name}', '${wclps}', '${ects}', '${faculty}', '${form_id}')`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

export { updateSpzFile };
