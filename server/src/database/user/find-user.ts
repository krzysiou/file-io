import type { DBUser } from '../types';

import { PostgresClient } from '../postgress-client';

type FindUserParams = {
  username?: string;
  id?: string;
};

type FindUser = (params: FindUserParams) => Promise<DBUser | undefined>;

const findUser: FindUser = async ({ id, username }) => {
  try {
    if (id) {
      const userInfo = await PostgresClient.query<DBUser>(
        `SELECT u.id, u.username, u.password FROM users u WHERE u.id='${id}'`
      );

      const user: DBUser = userInfo.rows.find((row) => row.id === id) as DBUser;

      return user;
    }

    if (username) {
      const userInfo = await PostgresClient.query<DBUser>(
        `SELECT u.id, u.username, u.password FROM users u WHERE u.username='${username}'`
      );

      const user: DBUser = userInfo.rows.find(
        (row) => row.username === username
      ) as DBUser;

      return user;
    }
  } catch (error) {
    console.log(error);
  }
};

export { findUser };
