import { v4 as uuid } from 'uuid';

import type { Request, Response } from 'express';
import type { User, File } from '../../types';

import { checkValidation } from '../../utils/validation';
import { createWypisFile } from '../../database/files/create/create-wypis-file';
import { createPrzepisFile } from '../../database/files/create/create-przepis-file';
import { createSpzFile } from '../../database/files/create/create-spz-file';

const createFile = async (req: Request, res: Response) => {
  const requestingUser: User = req.body.user;
  const requestingFile: File = req.body.file;

  const { title, type, form } = requestingFile;

  const payload = checkValidation(type, form);
  if (payload) {
    return res.status(400).send(payload);
  }

  if (!title) {
    return res.status(400).send({ message: 'You need to provide file title' });
  }

  const id = uuid();

  const file = {
    ...requestingFile,
    id,
  };

  switch (file.type) {
    case 'spz': {
      await createSpzFile(requestingUser.id, file);
      break;
    }
    case 'wypis': {
      await createWypisFile(requestingUser.id, file);
      break;
    }
    case 'przepis': {
      await createPrzepisFile(requestingUser.id, file);
      break;
    }
    default: {
      return;
    }
  }

  return res.status(200).send();
};

export { createFile };
