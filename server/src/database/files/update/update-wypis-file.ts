import type { File, WypisForm } from '../../../types';

import { PostgresClient } from '../../postgress-client';

const updateWypisFile = async (fileId: string, file: File) => {
  const { title, type, dateOfCreation, dateOfUpdate, form } = file;
  const { name, surname, albumNumber, email, fieldOfStudy, faculty, dean } =
    form as WypisForm;

  try {
    await PostgresClient.query(
      `UPDATE files SET title='${title}', type='${type}', date_of_creation=${dateOfCreation}, date_of_update=${dateOfUpdate} WHERE file_id='${fileId}'`
    );

    await PostgresClient.query(
      `UPDATE wypis_forms SET name='${name}', surname='${surname}', album_number='${albumNumber}', email='${email}', field_of_study='${fieldOfStudy}', faculty='${faculty}', dean='${dean}' WHERE file_id='${fileId}'`
    );
  } catch (error) {
    console.log(error);
  }
};

export { updateWypisFile };
