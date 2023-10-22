'use client';

import React, { useState } from 'react';

import type { FileType } from '../../../fetching/types';

import { CreateStyled } from './Create.styles';
import { SpzForm } from './Forms/SpzForm';

const getForm = (fileType: FileType) => {
  switch (fileType) {
    case 'spz': {
      return <SpzForm />;
    }
    default: {
      return null;
    }
  }
};

const Create: React.FC = () => {
  const [fileType, setFileType] = useState<FileType>(null);

  const handleSpzClick = () => {
    setFileType('spz');
  };

  const handleStatusClick = () => {
    setFileType('status-studenta');
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
        <button className="button" onClick={handleStatusClick}>
          Status studenta
        </button>
      </div>
      {formComponent}
    </CreateStyled>
  );
};

export { Create };
