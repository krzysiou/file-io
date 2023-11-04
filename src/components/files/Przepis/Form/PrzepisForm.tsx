'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

import type { ErrorObject, File } from '../../../../types';
import type {
  PrzepisForm as PrzepisFormType,
  Subject,
  SubjectField,
} from '../types';

import { config } from '../../../../config/config';
import { useSession } from '../../../../hooks/use-session';
import { PrzepisFormStyled } from './PrzepisForm.styles';
import { adjustSubjectArraySize, replaceSubjectArrayElement } from '../utils';

const { apiUrl } = config;

const defaultFile: File = {
  id: '',
  title: '',
  type: 'wypis',
  dateOfCreation: 0,
  dateOfUpdate: 0,
  form: {
    name: '',
    surname: '',
    albumNumber: '',
    email: '',
    fieldOfStudy: '',
    dean: '',
    level: '',
    year: '',
    termType: '',
    subjects: [],
  },
};

type PrzepisFormParams = {
  mode: 'create' | 'update';
  file?: File;
};

const PrzepisForm: React.FC<PrzepisFormParams> = ({
  mode,
  file = defaultFile,
}) => {
  const { id, title, dateOfCreation, form } = file;
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
  } = form as PrzepisFormType;

  const [errors, setErrors] = useState<ErrorObject>(null);
  const [przepisTitle, setPrzepisTitle] = useState<string>(title);
  const [przepisLevel, setPrzepisLevel] = useState<string>(level);
  const [przepisTermType, setPrzepisTermType] = useState<string>(termType);
  const [przepisYear, setPrzepisYear] = useState<string>(year);
  const [przepisName, setPrzepisName] = useState<string>(name);
  const [przepisSurname, setPrzepisSurname] = useState<string>(surname);
  const [przepisEmail, setPrzepisEmail] = useState<string>(email);
  const [przepisDean, setPrzepisDean] = useState<string>(dean);
  const [przepisAlbumNumber, setPrzepisAlbumNumber] =
    useState<string>(albumNumber);
  const [przepisFieldOfStudy, setPrzepisFieldOfStudy] =
    useState<string>(fieldOfStudy);
  const [przepisSubjectsArray, setPrzepisSubjectsArray] = useState<Subject[]>(
    mode === 'create' ? [] : subjects
  );
  const [przepisSubjectsNumber, setPrzepisSubjectsNumber] = useState<number>(
    subjects.length
  );

  const router = useRouter();
  const { session } = useSession();

  const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const length = Number(event.target.value);

    if (length < 1) {
      setPrzepisSubjectsNumber(1);

      return;
    }

    if (length > 20) {
      setPrzepisSubjectsNumber(20);

      return;
    }

    const adjustedArray = adjustSubjectArraySize(przepisSubjectsArray, length);

    setPrzepisSubjectsNumber(length);
    setPrzepisSubjectsArray(adjustedArray);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    type: SubjectField
  ) => {
    const value = event.target.value;
    const newArray = replaceSubjectArrayElement(
      index,
      przepisSubjectsArray,
      type,
      value
    );
    setPrzepisSubjectsArray(newArray);
  };

  const error = errors ? <span className="error">{errors.message}</span> : null;

  const infoComponent = (
    <>
      <li>
        <div className="entry">
          <p className="label">Name</p>
          <input
            type="text"
            value={przepisName}
            onChange={(event) => setPrzepisName(event.target.value)}
          />
        </div>
        <div className="entry">
          <p className="label">Surname</p>
          <input
            type="text"
            value={przepisSurname}
            onChange={(event) => setPrzepisSurname(event.target.value)}
          />
        </div>
      </li>
      <li>
        <div className="entry">
          <p className="label">Album number</p>
          <input
            type="text"
            value={przepisAlbumNumber}
            onChange={(event) => setPrzepisAlbumNumber(event.target.value)}
          />
        </div>
        <div className="entry">
          <p className="label">Field of study</p>
          <input
            type="text"
            value={przepisFieldOfStudy}
            onChange={(event) => setPrzepisFieldOfStudy(event.target.value)}
          />
        </div>
      </li>
      <li>
        <div className="entry">
          <p className="label">Email</p>
          <input
            type="text"
            value={przepisEmail}
            onChange={(event) => setPrzepisEmail(event.target.value)}
          />
        </div>
        <div className="entry">
          <p className="label">Level</p>
          <input
            type="text"
            value={przepisLevel}
            onChange={(event) => setPrzepisLevel(event.target.value)}
          />
        </div>
      </li>
      <li>
        <div className="entry">
          <p className="label">Term Type</p>
          <input
            type="text"
            value={przepisTermType}
            onChange={(event) => setPrzepisTermType(event.target.value)}
          />
        </div>
        <div className="entry">
          <p className="label">Year</p>
          <input
            type="text"
            value={przepisYear}
            onChange={(event) => setPrzepisYear(event.target.value)}
          />
        </div>
      </li>
    </>
  );

  const subjectsComponent = Array.from(
    { length: przepisSubjectsNumber },
    (_, index) => (
      <div key={index}>
        <p className="label">Subject {index + 1}</p>
        <li>
          <input
            type="text"
            value={przepisSubjectsArray[index]?.name}
            placeholder="subject name"
            onChange={(event) => handleChange(event, index, 'name')}
          />
          <input
            type="text"
            value={przepisSubjectsArray[index]?.type}
            placeholder="W | C | L | P | S"
            onChange={(event) => handleChange(event, index, 'type')}
          />
          <input
            type="number"
            min="2"
            max="5"
            value={przepisSubjectsArray[index]?.grade}
            placeholder="grade"
            onChange={(event) => handleChange(event, index, 'grade')}
          />
          <input
            type="text"
            value={przepisSubjectsArray[index]?.dateOfCompletion}
            placeholder="dd/mm/yyyy"
            onChange={(event) => handleChange(event, index, 'dateOfCompletion')}
          />
        </li>
      </div>
    )
  );

  const handleSubmit = async () => {
    const file = {
      id,
      title: przepisTitle,
      type: 'przepis',
      dateOfCreation: mode === 'create' ? Date.now() : dateOfCreation,
      dateOfUpdate: mode === 'create' ? null : Date.now(),
      form: {
        name: przepisName,
        surname: przepisSurname,
        albumNumber: przepisAlbumNumber,
        email: przepisEmail,
        fieldOfStudy: przepisFieldOfStudy,
        level: przepisLevel,
        termType: przepisTermType,
        year: przepisYear,
        dean: przepisDean,
        subjects: przepisSubjectsArray,
      },
    };

    try {
      if (mode === 'create') {
        await axios.post(
          `${apiUrl}/admin/create`,
          { file },
          {
            headers: { Authorization: `Bearer ${session.accessToken}` },
          }
        );
      } else {
        await axios.post(
          `${apiUrl}/admin/update`,
          { file },
          {
            headers: { Authorization: `Bearer ${session.accessToken}` },
          }
        );
      }

      router.push('/profile');
    } catch (error) {
      setErrors(error.response?.data);
    }
  };

  return (
    <PrzepisFormStyled>
      <div>
        <p className="label">File name</p>
        <input
          type="text"
          value={przepisTitle}
          className="top-input"
          onChange={(event) => setPrzepisTitle(event.target.value)}
        />
        <p className="label">Dean</p>
        <input
          type="text"
          value={przepisDean}
          className="top-input"
          onChange={(event) => setPrzepisDean(event.target.value)}
        />
        <ul>{infoComponent}</ul>
      </div>
      <div className="subjects">
        <p className="label">Subjects</p>
        <input
          type="number"
          min="1"
          max="20"
          className="picker"
          value={przepisSubjectsNumber}
          onChange={handleSubjectChange}
        />
        <ul>{subjectsComponent}</ul>
      </div>
      <button className="submit" onClick={handleSubmit}>
        Done
      </button>
      {error}
    </PrzepisFormStyled>
  );
};

export { PrzepisForm };
