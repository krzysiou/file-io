'use client';

import React from 'react';

import type { File } from '../../../types';

import { SpzTemplate } from '../../files/Templates/SpzTemplate';
import { DownloadStyled } from './Download.styles';

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

    default: {
      return null;
    }
  }
};

export { Download };
