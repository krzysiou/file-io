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

type SpzForm = {
  info: SpzInfo;
  mainSubjects: MainSubject[];
  sideSubjects: SideSubject[];
};

export type {
  SpzForm,
  MainSubject,
  SideSubject,
  MainSubjectField,
  SideSubjectField,
};
