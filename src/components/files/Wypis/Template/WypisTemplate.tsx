'use client';

import React, { useEffect } from 'react';

import type { File } from '../../../../types';
import type { WypisForm } from '../types';

import { WypisTemplateStyled } from './WypisTemplate.styles';

type WypisTemplateProps = {
  file: File;
};

const WypisTemplate: React.FC<WypisTemplateProps> = ({ file }) => {
  const { form } = file;
  const { name, surname, albumNumber, fieldOfStudy, email, dean, faculty } =
    form as WypisForm;

  useEffect(() => window.print(), []);

  const now = Date.now();
  const today = new Date(now);

  const yearValue = today.getFullYear();
  const monthValue = today.getMonth() + 1;
  const dayValue = today.getDate();

  const date = `${dayValue}.${monthValue}.${yearValue}`;

  return (
    <WypisTemplateStyled>
      <div className="main-body">
        <div className="header">
          <div className="credits">
            <ul>
              <li>
                {name} {surname}
              </li>
              <li>{albumNumber}</li>
              <li>{email}</li>
            </ul>
          </div>
          <div className="date">
            <p>Kraków, dnia {date}</p>
          </div>
        </div>
        <div className="main">
          <div className="dean-signature">
            <b>
              Szanowny(a) Pan(i) Dziekan Wydziału
              <br />
              dr inż. {dean}
            </b>
          </div>
          <div className="hero">
            <b>Oświadczenie o rezygnacji ze studiów</b>
          </div>
          <div className="message">
            <p>
              Oświadczam, że rezygnuję ze studiów na kierunku{' '}
              <b>{fieldOfStudy}</b> na Wydziale <b>{faculty}</b> i wnoszę o
              skreślenie mnie z listy studentów Akademii Górniczo-Hutniczej im.
              Stanisława Staszica w Krakowie.
            </p>
            <p>Jednocześnie oświadczam, że jestem świadomy/ma, że:</p>
            <ul>
              <li>
                złożenie oświadczenia o rezygnacji ze studiów rozpoczyna
                procedurę skreślenia z listy studentów;
              </li>
              <li>
                skreślenie z listy studentów następuje w drodze decyzji
                administracyjnej;
              </li>
              <li>
                decyzja podlega wykonaniu przed upływem terminu do wniesienia
                wniosku o ponowne rozpatrzenie sprawy, jeżeli jest zgodna z
                żądaniem strony,{' '}
                <b>
                  zatem datą skreślenia z listy studentów jest data doręczenia
                  decyzji administracyjnej o skreśleniu z listy studentów z
                  powodu rezygnacji ze studiów;
                </b>
              </li>
              <li>
                <b>
                  z dniem doręczenia decyzji administracyjnej o skreśleniu z
                  listy studentów z powodu rezygnacji traci Pan(i) status
                  studenta;
                </b>
              </li>
              <li>
                opłaty naliczane są do dnia, w którym do Uczelni wpłynęła
                pisemna rezygnacja ze studiów.
              </li>
            </ul>
          </div>
        </div>
        <div className="footer">
          <p>
            {name} {surname}
          </p>
        </div>
        <div className="law">
          <p className="law-header">
            <b>Podstawa prawna:</b>
          </p>
          <p className="law-entry">
            - art. 108 ust. 1 pkt 2 oraz ust. 3 ustawy z dnia 20 lipca 2018 r. -
            Prawo o szkolnictwie wyższym i nauce (t.j. Dz. U. 2022 poz. 574 z
            późn. zm.)
          </p>
          <p className="law-entry">
            - art. 130 § 4 ustawy z dnia 14 czerwca 1960 r. Kodeks postępowania
            administracyjnego (t.j. Dz. U. 2022 poz. 2000)
          </p>
          <p className="law-entry">
            - § 21 ust. 1 pkt 2, ust. 4 oraz ust. 9 Regulaminu studiów wyższych
            Akademii Górniczo-Hutniczej im. Stanisława Staszica w Krakowie
          </p>
        </div>
      </div>
    </WypisTemplateStyled>
  );
};

export { WypisTemplate };
