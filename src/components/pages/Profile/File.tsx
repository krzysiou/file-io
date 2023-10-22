'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import type { UserFile } from '../../../fetching/types';

import { FileStyled } from './File.styles';
import { DeleteIcon } from '../../shared/Icons/DeleteIcon';
import { DownloadIcon } from '../../shared/Icons/DownloadIcon';
import { EditIcon } from '../../shared/Icons/EditIcon';

type FileProps = {
  file: UserFile;
};

const File: React.FC<FileProps> = ({ file }) => {
  const router = useRouter();

  const { id, title, dateOfCreation, dateOfUpdate, type } = file;

  const createDateString = new Date(dateOfCreation).toDateString();
  const updateDateString = new Date(dateOfUpdate).toDateString();

  const dateOfUpdateComponent = dateOfUpdate && (
    <p className="file-date">updated: {updateDateString}</p>
  );

  const handleEditClick = () => {};

  const handleDeleteClick = () => {};

  const handleDownloadClick = () => {
    router.push(`/${type}/${id}`);
  };

  return (
    <FileStyled>
      <div className="title">
        <p className="file-name">{title}</p>
      </div>
      <div className="right">
        <div className="date">
          <p className="file-date">created: {createDateString}</p>
          {dateOfUpdateComponent}
        </div>
        <div className="task">
          <button className="button" onClick={handleDownloadClick}>
            <DownloadIcon />
          </button>
          <button className="button" onClick={handleEditClick}>
            <EditIcon />
          </button>
          <button className="button" onClick={handleDeleteClick}>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </FileStyled>
  );
};

export { File };
