'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

import type { ErrorObject, File } from '../../../../types';
import type { WypisForm as WypisFormType } from '../types';

import { config } from '../../../../config/config';
import { useSession } from '../../../../hooks/use-session';
import { WypisFormStyled } from './WypisForm.styles';

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
    faculty: '',
    dean: '',
  },
};

type WypisFormParams = {
  mode: 'create' | 'update';
  file?: File;
};

const WypisForm: React.FC<WypisFormParams> = ({ mode, file = defaultFile }) => {
  const { id, title, dateOfCreation, form } = file;
  const { name, surname, albumNumber, email, fieldOfStudy, faculty, dean } =
    form as WypisFormType;

  const [errors, setErrors] = useState<ErrorObject>(null);
  const [wypisTitle, setWypisTitle] = useState<string>(title);
  const [wypisName, setWypisName] = useState<string>(name);
  const [wypisSurname, setWypisSurname] = useState<string>(surname);
  const [wypisAlbumNumber, setWypisAlbumNumber] = useState<string>(albumNumber);
  const [wypisEmail, setWypisEmail] = useState<string>(email);
  const [wypisFaculty, setWypisFaculty] = useState<string>(faculty);
  const [wypisDean, setWypisDean] = useState<string>(dean);
  const [wypisFieldOfStudy, setWypisFieldOfStudy] =
    useState<string>(fieldOfStudy);

  const router = useRouter();
  const { session } = useSession();

  const error = errors ? <span className="error">{errors.message}</span> : null;

  const infoComponent = (
    <>
      <li>
        <div className="entry">
          <p className="label">Name</p>
          <input
            type="text"
            value={wypisName}
            onChange={(event) => setWypisName(event.target.value)}
          />
        </div>
        <div className="entry">
          <p className="label">Surname</p>
          <input
            type="text"
            value={wypisSurname}
            onChange={(event) => setWypisSurname(event.target.value)}
          />
        </div>
      </li>
      <li>
        <div className="entry">
          <p className="label">Album number</p>
          <input
            type="text"
            value={wypisAlbumNumber}
            onChange={(event) => setWypisAlbumNumber(event.target.value)}
          />
        </div>
        <div className="entry">
          <p className="label">Field of study</p>
          <input
            type="text"
            value={wypisFieldOfStudy}
            onChange={(event) => setWypisFieldOfStudy(event.target.value)}
          />
        </div>
      </li>
      <li>
        <div className="entry">
          <p className="label">Email</p>
          <input
            type="text"
            value={wypisEmail}
            onChange={(event) => setWypisEmail(event.target.value)}
          />
        </div>
        <div className="entry">
          <p className="label">Faculty</p>
          <input
            type="text"
            value={wypisFaculty}
            onChange={(event) => setWypisFaculty(event.target.value)}
          />
        </div>
      </li>
    </>
  );

  const handleSubmit = async () => {
    const file = {
      id,
      title: wypisTitle,
      type: 'wypis',
      dateOfCreation: mode === 'create' ? Date.now() : dateOfCreation,
      dateOfUpdate: mode === 'create' ? null : Date.now(),
      form: {
        name: wypisName,
        surname: wypisSurname,
        albumNumber: wypisAlbumNumber,
        email: wypisEmail,
        fieldOfStudy: wypisFieldOfStudy,
        faculty: wypisFaculty,
        dean: wypisDean,
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
    <WypisFormStyled>
      <div>
        <p className="label">File name</p>
        <input
          type="text"
          value={wypisTitle}
          className="top-input"
          onChange={(event) => setWypisTitle(event.target.value)}
        />
        <p className="label">Dean</p>
        <input
          type="text"
          value={wypisDean}
          className="top-input"
          onChange={(event) => setWypisDean(event.target.value)}
        />
        <ul>{infoComponent}</ul>
      </div>
      <button className="submit" onClick={handleSubmit}>
        Done
      </button>
      {error}
    </WypisFormStyled>
  );
};

export { WypisForm };
