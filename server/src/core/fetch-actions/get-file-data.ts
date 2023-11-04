import type { Request, Response } from 'express';
import type { User } from '../../types';

import { getUserFiles } from '../../database/user/get-user-files';

const getFileData = async (req: Request, res: Response) => {
  const requestingUser: User = req.body.user;
  const id = req.body.id;

  const files = await getUserFiles(requestingUser.id);
  if (!files) {
    return res.status(404).send('Could not find files for user');
  }

  const file = files.find((file) => file.id === id);
  if (!file) {
    return res.status(404).send({ message: 'File not found' });
  }

  return res.status(200).send(file);
};

export { getFileData };
