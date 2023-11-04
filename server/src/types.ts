import type { NextFunction, Request, Response } from 'express';

type FileType = 'spz' | 'wypis' | 'przepis';

type Form = SpzForm | WypisForm | PrzepisForm;

type RequestMethod = 'GET' | 'POST';

type expressCallback = (req: Request, res: Response) => void;

type expressMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

interface Binding {
  method: RequestMethod;
  path: string;
  callback: expressCallback;
  middleware?: expressMiddleware | expressMiddleware[];
}

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

type WypisForm = {
  name: string;
  surname: string;
  albumNumber: string;
  fieldOfStudy: string;
  email: string;
  faculty: string;
  dean: string;
};

type Subject = {
  name: string;
  type: string;
  grade: number;
  dateOfCompletion: string;
};

type PrzepisForm = {
  name: string;
  surname: string;
  albumNumber: string;
  fieldOfStudy: string;
  email: string;
  dean: string;
  level: string;
  year: string;
  termType: string;
  subjects: Subject[];
};

interface File {
  id: string;
  title: string;
  type: FileType;
  dateOfCreation: number;
  dateOfUpdate: number;
  form: Form;
}

interface User {
  id: string;
  username: string;
  password: string;
  files?: File[];
}

export type {
  RequestMethod,
  expressCallback,
  expressMiddleware,
  Binding,
  User,
  File,
  Form,
  FileType,
  SpzForm,
  WypisForm,
  PrzepisForm,
  Subject,
  MainSubject,
  SideSubject,
};
