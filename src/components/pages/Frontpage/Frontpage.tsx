'use client';

import React from 'react';

import { LogoIcon } from '../../shared/Icons';
import { FrontpageStyled } from './Frontpage.styles';

const Frontpage: React.FC = () => {
  return (
    <FrontpageStyled>
      <p className="hero">
        Fill out your <span>paperwork with lighting fast schemas</span>
      </p>
      <p className="description">
        Frustrated filling out papers repeatedly every semester?{' '}
        <span>
          File-io lets you create, save and download your own paper schemas{' '}
        </span>
        to help you manage your paperwork.
      </p>
      <div className="logos">
        <div className="logosSlide">
          <LogoIcon />
          <LogoIcon />
          <LogoIcon />
          <LogoIcon />
          <LogoIcon />
          <LogoIcon />
        </div>
      </div>
    </FrontpageStyled>
  );
};

export { Frontpage };
