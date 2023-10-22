'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

import type {
  FormError,
  MainSubjectField,
  SideSubjectField,
  SpzInfo,
} from './types';
import type { MainSubject, SideSubject } from '../../../../fetching/types';

import {
  adjustMainArraySize,
  adjustSideArraySize,
  replaceMainArrayElement,
  replaceSideArrayElement,
} from './utils';
import { config } from '../../../../../config/config';
import { useSession } from '../../../../hooks/use-session';
import { SpzFormStyled } from './SpzForm.styles';

const { apiUrl } = config;

const defaultInfo: SpzInfo = {
  name: '',
  surname: '',
  albumNumber: '',
  fieldOfStudy: '',
  email: '',
  level: '',
  term: '',
  year: '',
};

type SpzFormParams = {
  mode: 'create' | 'update';
  id?: string;
  title?: string;
  info?: SpzInfo;
  mainSubjects?: MainSubject[];
  sideSubjects?: SideSubject[];
  dateOfCreation?: number;
};

const SpzForm: React.FC<SpzFormParams> = ({
  mode,
  id,
  title = '',
  info = defaultInfo,
  mainSubjects = [],
  sideSubjects = [],
  dateOfCreation = null,
}) => {
  const [spzTitle, setSpzTitle] = useState<string>(title);

  const [name, setName] = useState<string>(info.name);
  const [surname, setSurname] = useState<string>(info.surname);
  const [albumNumber, setAlbumNumber] = useState<string>(info.albumNumber);
  const [fieldOfStudy, setFieldOfStudy] = useState<string>(info.fieldOfStudy);
  const [email, setEmail] = useState<string>(info.email);
  const [level, setLevel] = useState<string>(info.level);
  const [term, setTerm] = useState<string>(info.term);
  const [year, setYear] = useState<string>(info.year);

  const [errors, setErrors] = useState<FormError>(null);

  const [mainSubjectsArray, setMainSubjectsArray] =
    useState<MainSubject[]>(mainSubjects);
  const [sideSubjectsArray, setSideSubjectsArray] =
    useState<SideSubject[]>(sideSubjects);

  const [mainSubjectsNumber, setMainSubjectsNumber] = useState<number>(
    mainSubjects.length
  );
  const [sideSubjectsNumber, setSideSubjectsNumber] = useState<number>(
    sideSubjects.length
  );

  const router = useRouter();
  const { session } = useSession();

  const handleMainSubjectChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const length = Number(event.target.value);

    if (length < 1) {
      setMainSubjectsNumber(1);

      return;
    }

    if (length > 20) {
      setMainSubjectsNumber(20);

      return;
    }

    const adjustedArray = adjustMainArraySize(mainSubjectsArray, length);

    setMainSubjectsNumber(length);
    setMainSubjectsArray(adjustedArray);
  };

  const handleSideSubjectChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const length = Number(event.target.value);

    if (length < 1) {
      setSideSubjectsNumber(1);

      return;
    }

    if (length > 20) {
      setSideSubjectsNumber(20);

      return;
    }

    const adjustedArray = adjustSideArraySize(sideSubjectsArray, length);

    setSideSubjectsNumber(length);
    setSideSubjectsArray(adjustedArray);
  };

  const handleMainChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    type: MainSubjectField
  ) => {
    const value = event.target.value;
    const newArray = replaceMainArrayElement(
      index,
      mainSubjectsArray,
      type,
      value
    );
    setMainSubjectsArray(newArray);
  };

  const handleSideChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    type: SideSubjectField
  ) => {
    const value = event.target.value;
    const newArray = replaceSideArrayElement(
      index,
      sideSubjectsArray,
      type,
      value
    );
    setSideSubjectsArray(newArray);
  };

  const error = errors ? <span className="error">{errors.message}</span> : null;

  const infoComponent = (
    <>
      <li>
        <div className="entry">
          <p className="label">Name</p>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="entry">
          <p className="label">Surname</p>
          <input
            type="text"
            value={surname}
            onChange={(event) => setSurname(event.target.value)}
          />
        </div>
      </li>
      <li>
        <div className="entry">
          <p className="label">Album number</p>
          <input
            type="text"
            value={albumNumber}
            onChange={(event) => setAlbumNumber(event.target.value)}
          />
        </div>
        <div className="entry">
          <p className="label">Field of study</p>
          <input
            type="text"
            value={fieldOfStudy}
            onChange={(event) => setFieldOfStudy(event.target.value)}
          />
        </div>
      </li>
      <li>
        <div className="entry">
          <p className="label">Email</p>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="entry">
          <p className="label">Level</p>
          <input
            type="text"
            value={level}
            onChange={(event) => setLevel(event.target.value)}
          />
        </div>
      </li>
      <li>
        <div className="entry">
          <p className="label">Term</p>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
        <div className="entry">
          <p className="label">Year</p>
          <input
            type="text"
            value={year}
            onChange={(event) => setYear(event.target.value)}
          />
        </div>
      </li>
    </>
  );

  const mainSubjectsComponent = Array.from(
    { length: mainSubjectsNumber },
    (_, index) => (
      <div key={index}>
        <p className="label">Subject {index + 1}</p>
        <li>
          <input
            type="text"
            value={mainSubjectsArray[index]?.name}
            placeholder="subject name"
            onChange={(event) => handleMainChange(event, index, 'name')}
          />
          <input
            type="text"
            value={mainSubjectsArray[index]?.wclps}
            placeholder="W/C/L/P/S"
            onChange={(event) => handleMainChange(event, index, 'wclps')}
          />
          <input
            type="text"
            value={mainSubjectsArray[index]?.ects}
            placeholder="ects"
            onChange={(event) => handleMainChange(event, index, 'ects')}
          />
        </li>
      </div>
    )
  );

  const sideSubjectsComponent = Array.from(
    { length: sideSubjectsNumber },
    (_, index) => (
      <div key={index}>
        <p className="label">Subject {index + 1}</p>
        <li key={index}>
          <input
            type="text"
            value={sideSubjectsArray[index]?.name}
            placeholder="subject name"
            onChange={(event) => handleSideChange(event, index, 'name')}
          />
          <input
            type="text"
            value={sideSubjectsArray[index]?.wclps}
            placeholder="W/C/L/P/S"
            onChange={(event) => handleSideChange(event, index, 'wclps')}
          />
          <input
            type="text"
            value={sideSubjectsArray[index]?.ects}
            placeholder="ects"
            onChange={(event) => handleSideChange(event, index, 'ects')}
          />
          <input
            type="text"
            value={sideSubjectsArray[index]?.faculty}
            placeholder="faculty"
            onChange={(event) => handleSideChange(event, index, 'faculty')}
          />
        </li>
      </div>
    )
  );

  const handleSubmit = async () => {
    const file = {
      id,
      title: spzTitle,
      type: 'spz',
      dateOfCreation: mode === 'create' ? Date.now() : dateOfCreation,
      dateOfUpdate: mode === 'create' ? null : Date.now(),
      form: {
        info: {
          name,
          surname,
          albumNumber,
          fieldOfStudy,
          email,
          level,
          term,
          year,
        },
        mainSubjects: mainSubjectsArray,
        sideSubjects: sideSubjectsArray,
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
    <SpzFormStyled>
      <div>
        <p className="label">File name</p>
        <input
          type="text"
          value={spzTitle}
          className="file-name"
          onChange={(event) => setSpzTitle(event.target.value)}
        />
        <ul>{infoComponent}</ul>
      </div>
      <div className="main">
        <p className="label">Main Subjects</p>
        <input
          type="number"
          min="1"
          max="20"
          className="picker"
          value={mainSubjectsNumber}
          onChange={handleMainSubjectChange}
        />
        <ul>{mainSubjectsComponent}</ul>
      </div>
      <div className="side">
        <p className="label">Side Subjects</p>
        <input
          type="number"
          min="1"
          max="20"
          className="picker"
          value={sideSubjectsNumber}
          onChange={handleSideSubjectChange}
        />
        <ul>{sideSubjectsComponent}</ul>
      </div>
      <button className="submit" onClick={handleSubmit}>
        Done
      </button>
      {error}
    </SpzFormStyled>
  );
};

export { SpzForm };
