import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.CONNECTION_STRING || 'none';

const PostgresClient = new Client({
  connectionString,
});

const initDBConnection = async () => {
  await PostgresClient.connect().catch((err) => {
    console.log(err);
  });
};

export { initDBConnection, PostgresClient };
