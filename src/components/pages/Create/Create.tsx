'use client';

import React, { useState } from 'react';

import type { FileType } from '../../../types';

import { CreateStyled } from './Create.styles';
import { SpzForm } from '../../files/Spz/Form/SpzForm';
import { WypisForm } from '../../files/Wypis/Form/WypisForm';
import { PrzepisForm } from '../../files/Przepis/Form/PrzepisForm';

const Create: React.FC = () => {
  const [fileType, setFileType] = useState<FileType>(null);

  const handleSpzClick = () => {
    setFileType('spz');
  };

  const handleWypisClick = () => {
    setFileType('wypis');
  };

  const handlePrzepisClick = () => {
    setFileType('przepis');
  };

  const formComponent = getForm(fileType);

  return (
    <CreateStyled>
      <p className="hero">
        <span>Create file</span>
      </p>
      <p className="description">
        Choose a <span>file type</span> and fill out the <span>form</span>.
      </p>
      <div className="file-type-buttons">
        <button className="button" onClick={handleSpzClick}>
          Semestralny plan zajęć
        </button>
        <button className="button" onClick={handleWypisClick}>
          Wypis ze studiów
        </button>
        <button className="button" onClick={handlePrzepisClick}>
          Przepisanie oceny
        </button>
      </div>
      {formComponent}
    </CreateStyled>
  );
};

const getForm = (fileType: FileType) => {
  switch (fileType) {
    case 'spz': {
      return <SpzForm mode="create" />;
    }

    case 'wypis': {
      return <WypisForm mode="create" />;
    }

    case 'przepis': {
      return <PrzepisForm mode="create" />;
    }

    default: {
      return null;
    }
  }
};

export { Create };
