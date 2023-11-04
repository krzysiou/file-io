import { sign, verify } from 'jsonwebtoken';

import type { NextFunction, Request, Response } from 'express';
import type { User } from '../types';

const DAY = 24 * 60 * 60 * 1000;
const WEEK = 7 * DAY;
const generateJsonWebToken = (user: User) => {
  const tokenSecret = process.env.TOKEN_SECRET as string;

  return sign(user, tokenSecret);
};

const getExpireDate = () => {
  return Date.now() + WEEK;
};

const verifyJsonWebToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tokenSecret = process.env.TOKEN_SECRET as string;

    const token = req.headers.authorization?.split(' ')[1] as string;
    const user = verify(token, tokenSecret) as User;

    req.body.user = user;

    next();
  } catch {
    res.status(401).send({ message: 'Unauthorized' });
  }
};

export { getExpireDate, generateJsonWebToken, verifyJsonWebToken };
