import { v4 as uuid } from 'uuid';

import type { File, PrzepisForm } from '../../../types';
import type { DBPrzepisForm } from '../../types';

import { PostgresClient } from '../../postgress-client';

const updatePrzepisFile = async (fileId: string, file: File) => {
  const { title, type, dateOfCreation, dateOfUpdate, form } = file;
  const {
    name,
    surname,
    albumNumber,
    email,
    fieldOfStudy,
    dean,
    level,
    year,
    termType,
    subjects,
  } = form as PrzepisForm;

  try {
    await PostgresClient.query(
      `UPDATE files SET title='${title}', type='${type}', date_of_creation=${dateOfCreation}, date_of_update=${dateOfUpdate} WHERE file_id='${fileId}'`
    );

    await PostgresClient.query(
      `UPDATE przepis_forms SET name='${name}', surname='${surname}', album_number='${albumNumber}', email='${email}', field_of_study='${fieldOfStudy}', dean='${dean}', level='${level}', year='${year}', term_type='${termType}' WHERE file_id='${fileId}'`
    );

    const formInfo = await PostgresClient.query<DBPrzepisForm>(
      `SELECT pf.form_id FROM przepis_forms pf WHERE pf.file_id='${fileId}'`
    );

    const { form_id } = formInfo.rows[0];

    await PostgresClient.query(
      `DELETE FROM przepis_subjects ps
      USING przepis_forms pf
      WHERE pf.file_id = '${fileId}' AND ps.form_id=pf.form_id;`
    );

    await subjects.forEach(async ({ name, type, grade, dateOfCompletion }) => {
      const subjectId = uuid();

      await PostgresClient.query(
        `INSERT INTO przepis_subjects VALUES('${subjectId}', '${name}', '${type}', ${grade}, '${dateOfCompletion}', '${form_id}')`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

export { updatePrzepisFile };
