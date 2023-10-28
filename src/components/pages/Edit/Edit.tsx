'use client';

import React from 'react';

import type { File } from '../../../types';

import { EditStyled } from './Edit.styles';
import { SpzForm } from '../../files/Forms/SpzForm';
type EditProps = {
  file: File;
};

const Edit: React.FC<EditProps> = ({ file }) => {
  const formComponent = getForm(file);

  return (
    <EditStyled>
      <p className="hero">
        <span>Edit file</span>
      </p>
      {formComponent}
    </EditStyled>
  );
};

const getForm = (file: File) => {
  const { type } = file;

  switch (type) {
    case 'spz': {
      return <SpzForm mode="update" file={file} />;
    }
    default: {
      return null;
    }
  }
};

export { Edit };
