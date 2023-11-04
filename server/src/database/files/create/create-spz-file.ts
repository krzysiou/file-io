import { v4 as uuid } from 'uuid';

import type { File, SpzForm } from '../../../types';

import { PostgresClient } from '../../postgress-client';

const createSpzFile = async (userId: string, file: File) => {
  const { id, title, type, dateOfCreation, dateOfUpdate, form } = file;
  const { info, mainSubjects, sideSubjects } = form as SpzForm;
  const {
    name,
    surname,
    albumNumber,
    fieldOfStudy,
    email,
    level,
    term,
    year,
    dean,
  } = info;

  const formId = uuid();

  try {
    await PostgresClient.query(
      `INSERT INTO files VALUES('${id}', '${title}', '${type}', ${dateOfCreation}, ${dateOfUpdate}, '${userId}')`
    );

    await PostgresClient.query(
      `INSERT INTO spz_forms VALUES('${formId}', '${name}', '${surname}', '${albumNumber}', '${fieldOfStudy}', '${email}', '${level}', '${term}', '${year}', '${dean}', '${id}')`
    );

    await mainSubjects.forEach(async ({ name, wclps, ects }) => {
      const subjectId = uuid();

      await PostgresClient.query(
        `INSERT INTO spz_main_subjects VALUES('${subjectId}', '${name}', '${wclps}', '${ects}', '${formId}')`
      );
    });

    await sideSubjects.forEach(async ({ name, wclps, ects, faculty }) => {
      const subjectId = uuid();

      await PostgresClient.query(
        `INSERT INTO spz_side_subjects VALUES('${subjectId}', '${name}', '${wclps}', '${ects}', '${faculty}', '${formId}')`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

export { createSpzFile };
