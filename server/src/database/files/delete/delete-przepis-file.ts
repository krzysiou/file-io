import { PostgresClient } from '../../postgress-client';

const deletePrzepisFile = async (fileId: string) => {
  try {
    await PostgresClient.query(
      `DELETE FROM przepis_subjects ps
      USING przepis_forms pf
      WHERE pf.file_id = '${fileId}' AND ps.form_id=pf.form_id;`
    );

    await PostgresClient.query(
      `DELETE FROM przepis_forms WHERE file_id='${fileId}'`
    );

    await PostgresClient.query(`DELETE FROM files WHERE file_id='${fileId}'`);
  } catch (error) {
    console.log(error);
  }
};

export { deletePrzepisFile };
