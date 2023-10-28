type SubjectField = 'name' | 'type' | 'grade' | 'dateOfCompletion';

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

export type { PrzepisForm, Subject, SubjectField };
