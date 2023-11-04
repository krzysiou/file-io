import bodyParser from 'body-parser';

import type { Binding } from './types';

import { verifyJsonWebToken } from './utils/jwt-actions';
import { userLogin } from './core/auth-actions/user-login';
import { userRegister } from './core/auth-actions/user-register';
import { getFileData } from './core/fetch-actions/get-file-data';
import { getUserFilesData } from './core/fetch-actions/get-user-files-data';
import { createFile } from './core/file-actions/create-file';
import { updateFile } from './core/file-actions/update-file';
import { deleteFile } from './core/file-actions/delete-file';

const jsonParser = bodyParser.json();

const bindings: Binding[] = [
  {
    method: 'POST',
    path: '/admin/login',
    callback: userLogin,
    middleware: jsonParser,
  },
  {
    method: 'POST',
    path: '/admin/register',
    callback: userRegister,
    middleware: jsonParser,
  },
  {
    method: 'GET',
    path: '/admin/data',
    callback: getUserFilesData,
    middleware: [jsonParser, verifyJsonWebToken],
  },
  {
    method: 'POST',
    path: '/admin/file',
    callback: getFileData,
    middleware: [jsonParser, verifyJsonWebToken],
  },
  {
    method: 'POST',
    path: '/admin/create',
    callback: createFile,
    middleware: [jsonParser, verifyJsonWebToken],
  },
  {
    method: 'POST',
    path: '/admin/update',
    callback: updateFile,
    middleware: [jsonParser, verifyJsonWebToken],
  },
  {
    method: 'POST',
    path: '/admin/delete',
    callback: deleteFile,
    middleware: [jsonParser, verifyJsonWebToken],
  },
];

export { bindings };
