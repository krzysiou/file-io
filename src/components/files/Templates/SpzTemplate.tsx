'use client';

import React, { useEffect } from 'react';

import type { File, MainSubject } from '../../../types';

import { SpzTemplateStyled } from './SpzTemplate.styles';

const getTotalEcts = (subjects: MainSubject[]): number => {
  return subjects.reduce(
    (totalEcts, subject) => totalEcts + Number(subject.ects),
    0
  );
};

const getTotalHours = (subjects: MainSubject[]): number => {
  return subjects.reduce((totalHours, subject) => {
    const numbers = subject.wclps.split('/').map(Number);
    const hours = numbers.reduce((hours, number) => hours + number, 0);

    return totalHours + hours;
  }, 0);
};

type SpzTemplateProps = {
  file: File;
};

const SpzTemplate: React.FC<SpzTemplateProps> = ({ file }) => {
  const {
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
        dean,
      },
      mainSubjects,
      sideSubjects,
    },
  } = file;

  const mainEcts: number = getTotalEcts(mainSubjects);
  const sideEcts: number = getTotalEcts(sideSubjects);

  const totalEcts = mainEcts + sideEcts;

  const mainHours: number = getTotalHours(mainSubjects);
  const sideHours: number = getTotalHours(sideSubjects);

  const totalHours = mainHours + sideHours;

  const now = Date.now();
  const today = new Date(now);

  const yearValue = today.getFullYear();
  const monthValue = today.getMonth() + 1;
  const dayValue = today.getDate();

  const date = `${dayValue}.${monthValue}.${yearValue}`;

  const mainSubjectsComponent = mainSubjects.map((subject, index) => (
    <tr key={index}>
      <td className="left">{subject.name}</td>
      <td className="mid">{subject.wclps}</td>
      <td className="right">{subject.ects}</td>
    </tr>
  ));

  const sideSubjectsComponent = sideSubjects.map((subject, index) => (
    <tr key={index}>
      <td className="left-additional">{subject.name}</td>
      <td className="mid-additional">{subject.wclps}</td>
      <td className="right-additional">{subject.ects}</td>
      <td className="faculty">{subject.faculty}</td>
    </tr>
  ));

  useEffect(() => window.print(), []);

  return (
    <SpzTemplateStyled>
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
          <div className="message">
            <p>
              Proszę o wpisanie mnie na <b>{term}</b> semestr studiów w roku
              akademickim <b>{year}</b> oraz zatwierdzenie poniszego
              semestralnego planu zajęć.
            </p>
          </div>
        </div>
        <div className="header">
          <h3>Semestralny plan zajęć</h3>
        </div>

        <div className="tab">
          <table>
            <thead>
              <tr>
                <th className="tab-header" colSpan={3}>
                  <b>Przedmioty obowiązkowe</b>
                </th>
              </tr>
              <tr>
                <th className="lesser">Przedmiot</th>
                <th className="lesser">Liczba W/C/L/P/S</th>
                <th className="lesser">ECTS</th>
              </tr>
            </thead>
            <tbody>{mainSubjectsComponent}</tbody>
          </table>
        </div>

        <div className="tab">
          <table>
            <thead>
              <tr>
                <th className="tab-header" colSpan={4}>
                  <b>Przedmioty obieralne</b>
                </th>
              </tr>
              <tr>
                <th className="lesser">Przedmiot</th>
                <th className="lesser">Liczba W/C/L/P/S</th>
                <th className="lesser">ECTS</th>
                <th className="lesser">Wydział</th>
              </tr>
            </thead>
            <tbody>{sideSubjectsComponent}</tbody>
          </table>
        </div>

        <div className="sum">
          <p>
            Razem ECTS {totalEcts}
            <br />
            Łączna liczba godzin zajęć {totalHours}
          </p>
        </div>
        <div className="footer">
          <p>
            {name} {surname}
          </p>
        </div>
      </div>
    </SpzTemplateStyled>
  );
};

export { SpzTemplate };
