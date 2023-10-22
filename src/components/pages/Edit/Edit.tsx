'use client';

import React from 'react';

import type { File } from '../../../types';

import { EditStyled } from './Edit.styles';
import { SpzForm } from '../../shared/Forms/SpzForm';

const getForm = (file: File) => {
  const { id, type, title, form, dateOfCreation } = file;

  switch (type) {
    case 'spz': {
      return (
        <SpzForm
          mode="update"
          id={id}
          title={title}
          info={form.info}
          mainSubjects={form.mainSubjects}
          sideSubjects={form.sideSubjects}
          dateOfCreation={dateOfCreation}
        />
      );
    }
    default: {
      return null;
    }
  }
};

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

export { Edit };
