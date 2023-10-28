'use client';

import React from 'react';

import type { File } from '../../../types';

import { EditStyled } from './Edit.styles';
import { SpzForm } from '../../files/Spz/Form/SpzForm';
import { WypisForm } from '../../files/Wypis/Form/WypisForm';
import { PrzepisForm } from '../../files/Przepis/Form/PrzepisForm';

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

    case 'wypis': {
      return <WypisForm mode="update" file={file} />;
    }

    case 'przepis': {
      return <PrzepisForm mode="update" file={file} />;
    }

    default: {
      return null;
    }
  }
};

export { Edit };
