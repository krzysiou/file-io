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

type MainSubjectField = 'name' | 'wclps' | 'ects';

type MainSubject = {
  name: string;
  wclps: string;
  ects: string;
};

type SideSubjectField = 'name' | 'wclps' | 'ects' | 'faculty';

type SideSubject = {
  name: string;
  wclps: string;
  ects: string;
  faculty: string;
};

type FormError = {
  message: string;
};

export {
  type FormError,
  type SpzInfo,
  type MainSubject,
  type MainSubjectField,
  type SideSubject,
  type SideSubjectField,
};
