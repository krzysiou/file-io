type Session = {
  id: string;
  accessToken: string;
  expire: number;
};

type FileType = 'spz' | 'status-studenta';

type SpzInfo = {
  name: string;
  surname: string;
  albumNumber: string;
  fieldOfStudy: string;
  email: string;
  level: string;
  term: string;
  year: string;
  dean: string;
};

type MainSubjectField = 'name' | 'wclps' | 'ects';

type MainSubject = {
  name: string;
  wclps: string;
  ects: number;
};

type SideSubjectField = 'name' | 'wclps' | 'ects' | 'faculty';

type SideSubject = {
  name: string;
  wclps: string;
  ects: number;
  faculty: string;
};

interface SpzForm {
  info: SpzInfo;
  mainSubjects: MainSubject[];
  sideSubjects: SideSubject[];
}

interface File {
  id: string;
  title: string;
  type: FileType;
  dateOfCreation: number;
  dateOfUpdate: number;
  form: SpzForm;
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
  type MainSubject,
  type SideSubject,
  type MainSubjectField,
  type SideSubjectField,
  type ErrorObject,
  type AuthErrorObject,
  type SpzInfo,
};
