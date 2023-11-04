import { PostgresClient } from '../../postgress-client';

const deleteSpzFile = async (fileId: string) => {
  try {
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

    await PostgresClient.query(
      `DELETE FROM spz_forms WHERE file_id='${fileId}'`
    );

    await PostgresClient.query(`DELETE FROM files WHERE file_id='${fileId}'`);
  } catch (error) {
    console.log(error);
  }
};

export { deleteSpzFile };
