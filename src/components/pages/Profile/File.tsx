'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

import type { File as FileType } from '../../../types';

import { FileStyled } from './File.styles';
import { DeleteIcon } from '../../shared/Icons/DeleteIcon';
import { DownloadIcon } from '../../shared/Icons/DownloadIcon';
import { EditIcon } from '../../shared/Icons/EditIcon';
import { config } from '../../../../config/config';
import { useSession } from '../../../hooks/use-session';

const { apiUrl } = config;

type FileProps = {
  file: FileType;
};

const File: React.FC<FileProps> = ({ file }) => {
  const router = useRouter();
  const { session } = useSession();

  const { id, title, dateOfCreation, dateOfUpdate } = file;

  const createDateString = new Date(Number(dateOfCreation)).toDateString();
  const updateDateString = new Date(Number(dateOfUpdate)).toDateString();

  const dateOfUpdateComponent = dateOfUpdate && (
    <p className="file-date">updated: {updateDateString}</p>
  );

  const handleEditClick = () => {
    router.push(`/profile/edit?id=${id}`);
  };

  const handleDownloadClick = () => {
    router.push(`/profile/download?id=${id}`);
  };

  const handleDeleteClick = async () => {
    try {
      await axios.post(
        `${apiUrl}/admin/delete`,
        { id },
        {
          headers: { Authorization: `Bearer ${session.accessToken}` },
        }
      );

      router.refresh();
    } catch (error) {
      console.log(error);
    }
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
