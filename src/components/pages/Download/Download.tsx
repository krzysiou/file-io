'use client';

import React from 'react';

import type { File } from '../../../types';

import { DownloadStyled } from './Download.styles';
import { SpzTemplate } from '../../files/Spz/Template/SpzTemplate';
import { WypisTemplate } from '../../files/Wypis/Template/WypisTemplate';
import { PrzepisTemplate } from '../../files/Przepis/Template/PrzepisTemplate';

type DownloadProps = {
  file: File;
};

const Download: React.FC<DownloadProps> = ({ file }) => {
  const templateComponent = getTemplate(file);

  return <DownloadStyled>{templateComponent}</DownloadStyled>;
};

const getTemplate = (file: File) => {
  const { type } = file;

  switch (type) {
    case 'spz': {
      return <SpzTemplate file={file} />;
    }

    case 'wypis': {
      return <WypisTemplate file={file} />;
    }

    case 'przepis': {
      return <PrzepisTemplate file={file} />;
    }

    default: {
      return null;
    }
  }
};

export { Download };
