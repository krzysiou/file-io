import { v4 as uuid } from 'uuid';

import type { File, PrzepisForm } from '../../../types';

import { PostgresClient } from '../../postgress-client';

const createPrzepisFile = async (userId: string, file: File) => {
  const { id, title, type, dateOfCreation, dateOfUpdate, form } = file;
  const {
    name,
    surname,
    albumNumber,
    email,
    fieldOfStudy,
    dean,
    level,
    year,
    termType,
    subjects,
  } = form as PrzepisForm;

  const formId = uuid();

  try {
    await PostgresClient.query(
      `INSERT INTO files VALUES('${id}', '${title}', '${type}', ${dateOfCreation}, ${dateOfUpdate}, '${userId}')`
    );

    await PostgresClient.query(
      `INSERT INTO przepis_forms VALUES('${formId}', '${name}', '${surname}', '${albumNumber}', '${email}', '${fieldOfStudy}', '${dean}', '${level}', '${year}', '${termType}', '${id}')`
    );

    await subjects.forEach(async ({ name, type, grade, dateOfCompletion }) => {
      const subjectId = uuid();

      await PostgresClient.query(
        `INSERT INTO przepis_subjects VALUES('${subjectId}', '${name}', '${type}', ${grade}, '${dateOfCompletion}', '${formId}')`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

export { createPrzepisFile };
