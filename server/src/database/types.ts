// USER

interface DBUser {
  id: string;
  username: string;
  password: string;
}

// FILE

interface DBFile {
  file_id: string;
  title: string;
  type: string;
  date_of_creation: number;
  date_of_update: number;
  user_id: string;
}

// WYPIS

interface DBWypisForm {
  form_id: string;
  name: string;
  surname: string;
  album_number: string;
  field_of_study: string;
  email: string;
  faculty: string;
  dean: string;
  file_id: string;
}

type DBWypisFile = DBFile & DBWypisForm;

// PRZEPIS

interface DBPrzepisForm {
  form_id: string;
  name: string;
  surname: string;
  album_number: string;
  field_of_study: string;
  email: string;
  dean: string;
  level: string;
  year: string;
  term_type: string;
  file_id: string;
}

interface DBSubject {
  subject_id: string;
  name: string;
  type: string;
  grade: number;
  date_of_completion: string;
  form_id: string;
}

type DBPrzepisFile = DBFile & DBPrzepisForm;

// SPZ

interface DBSpzForm {
  form_id: string;
  name: string;
  surname: string;
  album_number: string;
  field_of_study: string;
  email: string;
  level: string;
  term: string;
  year: string;
  dean: string;
  file_id: string;
}

interface DBMainSubject {
  subject_id: string;
  name: string;
  wclps: string;
  ects: string;
  form_id: string;
}

interface DBSideSubject {
  subject_id: string;
  name: string;
  wclps: string;
  ects: string;
  faculty: string;
  form_id: string;
}

type DBSPZFile = DBFile & DBSpzForm;

export type {
  DBUser,
  DBWypisFile,
  DBPrzepisFile,
  DBSubject,
  DBPrzepisForm,
  DBSPZFile,
  DBMainSubject,
  DBSideSubject,
  DBSpzForm,
};
