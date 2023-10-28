'use client';

import React from 'react';
import Image from 'next/image';

import { SchemasStyled } from './Schemas.styles';
import spzImage from '../../../../public/images/spz.png';
import wypisImage from '../../../../public/images/wypis.png';
import przepisImage from '../../../../public/images/przepis.png';

const Schemas: React.FC = () => {
  return (
    <SchemasStyled>
      <p className="hero">
        <span>Schemas</span>
      </p>
      <p className="description">
        There are <span>three file schemas</span> available. Just sign in,
        choose your schema, <span>fill</span> out the form and{' '}
        <span>download</span> pdf file which is ready to print or to send.
      </p>
      <div className="images">
        <div className="entry">
          <p>Spz</p>
          <Image src={spzImage} alt="spz file" />
        </div>
        <div className="entry">
          <p>Resign</p>
          <Image src={wypisImage} alt="resign" />
        </div>
        <div className="entry">
          <p>Copy grade</p>
          <Image src={przepisImage} alt="copy grade" />
        </div>
      </div>
    </SchemasStyled>
  );
};

export { Schemas };
