import { genSaltSync, hashSync } from 'bcrypt-nodejs';
import { v4 as uuid } from 'uuid';

import type { Request, Response } from 'express';
import type { User } from '../../types';

import { generateJsonWebToken, getExpireDate } from '../../utils/jwt-actions';
import { findUser } from '../../database/user/find-user';
import { saveUser } from '../../database/user/save-user';

const hashPassword = async (password: string): Promise<string> => {
  try {
    const salt = genSaltSync(10);
    const hashedPassword = await hashSync(password, salt);

    return hashedPassword;
  } catch (error) {
    console.log(error);

    return 'asd';
  }
};

const userRegister = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username) {
    return res
      .status(400)
      .send({ username: { message: 'Username must be provided' } });
  }

  if (!password) {
    return res
      .status(400)
      .send({ password: { message: 'Password must be provided' } });
  }

  const user = await findUser({ username });

  if (user) {
    return res
      .status(400)
      .send({ username: { message: 'Username already taken' } });
  }

  const hashedPassword = await hashPassword(password);
  const id = uuid();

  const userData: User = {
    id,
    username,
    password: hashedPassword,
  };

  await saveUser(userData);

  const accessToken = generateJsonWebToken(userData);
  const expire = getExpireDate();

  return res.status(200).send({ id, accessToken, expire });
};

export { userRegister };
