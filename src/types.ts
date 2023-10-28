import type { SpzForm } from './components/files/Spz/types';
import type { WypisForm } from './components/files/Wypis/types';
import type { PrzepisForm } from './components/files/Przepis/types';

type FileType = 'spz' | 'wypis' | 'przepis';

type Form = SpzForm | WypisForm | PrzepisForm;

type Session = {
  id: string;
  accessToken: string;
  expire: number;
};

interface File {
  id: string;
  title: string;
  type: FileType;
  dateOfCreation: number;
  dateOfUpdate: number;
  form: Form;
}

type User = {
  id: string;
  username: string;
  files: File[];
};

type ErrorObject = {
  message: string;
};

type AuthErrorObject = {
  username: ErrorObject;
  password: ErrorObject;
};
export {
  type User,
  type Session,
  type FileType,
  type File,
  type ErrorObject,
  type AuthErrorObject,
};
