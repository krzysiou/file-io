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
};

type MainSubject = {
  name: string;
  wclps: string;
  ects: string;
};

type SideSubject = {
  name: string;
  wclps: string;
  ects: string;
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

export {
  type User,
  type Session,
  type FileType,
  type File,
  type MainSubject,
  type SideSubject,
};
