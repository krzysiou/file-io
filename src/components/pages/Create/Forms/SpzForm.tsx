'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

import type {
  FormError,
  MainSubject,
  MainSubjectField,
  SideSubject,
  SideSubjectField,
  SpzInfo,
  SpzInfoField,
} from './types';

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
  title?: string;
  info?: SpzInfo;
  mainSubjects?: MainSubject[];
  sideSubjects?: SideSubject[];
};

const SpzForm: React.FC<SpzFormParams> = ({
  title = '',
  info = defaultInfo,
  mainSubjects = [],
  sideSubjects = [],
}) => {
  const [spzTitle, setSpzTitle] = useState<string>(title);
  const [spzInfo, setSpzInfo] = useState<SpzInfo>(info);
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

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSpzTitle(event.target.value);

  const handleInfoChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: SpzInfoField
  ) => {
    spzInfo[type] = event.target.value;
    setSpzInfo({ ...spzInfo });
  };

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
    setMainSubjectsArray(newArray);
  };

  const error = errors ? <span className="error">{errors.message}</span> : null;

  const infoComponent = (
    <>
      <li>
        <div className="entry">
          <p className="label">Name</p>
          <input
            type="text"
            value={spzInfo?.name}
            onChange={(event) => handleInfoChange(event, 'name')}
          />
        </div>
        <div className="entry">
          <p className="label">Surname</p>
          <input
            type="text"
            value={spzInfo?.surname}
            onChange={(event) => handleInfoChange(event, 'surname')}
          />
        </div>
      </li>
      <li>
        <div className="entry">
          <p className="label">Album number</p>
          <input
            type="text"
            value={spzInfo?.albumNumber}
            onChange={(event) => handleInfoChange(event, 'albumNumber')}
          />
        </div>
        <div className="entry">
          <p className="label">Field of study</p>
          <input
            type="text"
            value={spzInfo?.fieldOfStudy}
            onChange={(event) => handleInfoChange(event, 'fieldOfStudy')}
          />
        </div>
      </li>
      <li>
        <div className="entry">
          <p className="label">Email</p>
          <input
            type="text"
            value={spzInfo?.email}
            onChange={(event) => handleInfoChange(event, 'email')}
          />
        </div>
        <div className="entry">
          <p className="label">Level</p>
          <input
            type="text"
            value={spzInfo?.level}
            onChange={(event) => handleInfoChange(event, 'level')}
          />
        </div>
      </li>
      <li>
        <div className="entry">
          <p className="label">Term</p>
          <input
            type="text"
            value={spzInfo?.term}
            onChange={(event) => handleInfoChange(event, 'term')}
          />
        </div>
        <div className="entry">
          <p className="label">Year</p>
          <input
            type="text"
            value={spzInfo?.year}
            onChange={(event) => handleInfoChange(event, 'year')}
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
    const dateOfCreation = Date.now();

    try {
      await axios.post(
        `${apiUrl}/admin/create`,
        {
          title: spzTitle,
          type: 'spz',
          dateOfCreation,
          dateOfUpdate: null,
          form: {
            info: spzInfo,
            mainSubjects: mainSubjectsArray,
            sideSubjects: sideSubjectsArray,
          },
        },
        {
          headers: { Authorization: `Bearer ${session.accessToken}` },
        }
      );

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
          onChange={handleTitleChange}
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