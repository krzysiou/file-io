type Session = {
  id: string;
  accessToken: string;
  expire: number;
};

type FileType = 'spz' | 'status-studenta';

type Form = {
  firstName: string;
  surname: string;
};

type UserFile = {
  id: string;
  title: string;
  type: FileType;
  dateOfCreation: number;
  dateOfUpdate: number;
  form: Form;
};

type User = {
  id: string;
  username: string;
  files: UserFile[];
};

export { type User, type Session, type FileType, type UserFile };
