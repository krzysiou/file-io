import type { DBUser } from '../types';

import { PostgresClient } from '../postgress-client';

const saveUser = async (user: DBUser) => {
  const { id, username, password } = user;

  try {
    await PostgresClient.query(
      `INSERT INTO users (id, username, password) VALUES ('${id}', '${username}', '${password}')`
    );
  } catch (error) {
    console.log(error);
  }
};

export { saveUser };
