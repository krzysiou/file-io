'use client';

import React, { useEffect } from 'react';

import type { File } from '../../../../types';
import type { PrzepisForm } from '../types';

import { PrzepisTemplateStyled } from './PrzepisTemplate.styles';

type PrzepisTemplateProps = {
  file: File;
};

const PrzepisTemplate: React.FC<PrzepisTemplateProps> = ({ file }) => {
  const { form } = file;
  const {
    name,
    surname,
    albumNumber,
    fieldOfStudy,
    email,
    dean,
    level,
    year,
    termType,
    subjects,
  } = form as PrzepisForm;

  useEffect(() => window.print(), []);

  const now = Date.now();
  const today = new Date(now);

  const yearValue = today.getFullYear();
  const monthValue = today.getMonth() + 1;
  const dayValue = today.getDate();

  const date = `${dayValue}.${monthValue}.${yearValue}`;

  const subjectsComponent = subjects.map((subject, index) => (
    <tr key={index}>
      <td className="sub-1">{subject.name}</td>
      <td className="sub-2">{subject.type}</td>
      <td className="sub-3">{subject.dateOfCompletion}</td>
      <td className="sub-4">{subject.grade}</td>
      <td className="sub-5"></td>
    </tr>
  ));

  return (
    <PrzepisTemplateStyled>
      <div className="main-body">
        <div className="header">
          <div className="credits">
            <ul>
              <li>Nazwisko: {surname}</li>
              <li>Imię: {name}</li>
              <li>Nr Albumu: {albumNumber}</li>
              <li>Kierunek Studiów: {fieldOfStudy}</li>
              <li>Studia stopnia: {level}</li>
              <li>e-mail: {email}</li>
            </ul>
          </div>
          <div className="date">
            <p>Kraków, dnia {date}</p>
          </div>
        </div>
        <div className="main">
          <div className="dean-signature">
            <b>
              Prodziekan ds. studenckich
              <br />
              dr inż. {dean}
            </b>
          </div>
          <div className="hero">
            <b>Prośba o przepisanie ocen</b>
          </div>
          <div className="message">
            <p>
              Proszę o zwolnienie z obowiązku ponownego udziału w poniższych
              zajęciach w semestrze <b>{termType}</b> roku akademickiego{' '}
              <b>{year}</b>:
            </p>
          </div>
        </div>
        <div className="tab">
          <table>
            <thead>
              <tr>
                <th className="lesser">
                  <b>Przedmiot</b>
                </th>
                <th className="lesser">
                  <b>Forma zajęć</b>
                </th>
                <th className="lesser">
                  <b>Data zaliczenia</b>
                </th>
                <th className="lesser">
                  <b>Ocena</b>
                </th>
                <th className="lesser">
                  <b>Zgoda koordynatora przedmiotu (podpis)</b>
                </th>
              </tr>
            </thead>
            <tbody>{subjectsComponent}</tbody>
          </table>
        </div>
        <div className="footer">
          <p>
            {name} {surname}
          </p>
        </div>
      </div>
    </PrzepisTemplateStyled>
  );
};

export { PrzepisTemplate };
