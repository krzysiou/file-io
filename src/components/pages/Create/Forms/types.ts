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

type SideSubjectField = 'name' | 'wclps' | 'ects' | 'faculty';

type FormError = {
  message: string;
};

export {
  type FormError,
  type SpzInfo,
  type MainSubjectField,
  type SideSubjectField,
};
