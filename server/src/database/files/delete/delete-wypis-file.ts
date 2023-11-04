import { PostgresClient } from '../../postgress-client';

const deleteWypisFile = async (fileId: string) => {
  try {
    await PostgresClient.query(
      `DELETE FROM wypis_forms WHERE file_id='${fileId}'`
    );

    await PostgresClient.query(`DELETE FROM files WHERE file_id='${fileId}'`);
  } catch (error) {
    console.log(error);
  }
};

export { deleteWypisFile };
