'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import type { User } from '../../../types';

import { ProfileStyled } from './Profile.styles';
import { File } from './File';
import { PlusIcon } from '../../shared/Icons/PlusIcon';

type ProfileProps = {
  user: User;
};

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const { files } = user;

  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, [router]);

  const handleCreateClick = () => router.push('/profile/create');

  const filesComponent =
    files && files.length != 0 ? (
      files.map((file) => <File key={file.id} file={file} />)
    ) : (
      <p className="description">
        <span>Oops . . .</span> seems like You do not have any files. <br />
        ¯\_(ツ)_/¯
      </p>
    );

  return (
    <ProfileStyled>
      <p className="hero">
        <span>Your files</span>
      </p>
      <button className="create-file" onClick={handleCreateClick}>
        <p>Create</p>
        <PlusIcon />
      </button>
      {filesComponent}
    </ProfileStyled>
  );
};

export { Profile };
