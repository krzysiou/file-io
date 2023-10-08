'use client';

import React from 'react';
import Link from 'next/link';

import { FooterStyled } from './Footer.styles';
import { GitHubIcon, LinkedInIcon } from '../Icons';

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <div className="info">
        <p>
          You can find me on{' '}
          <Link href="https://github.com/krzysiou">GitHub</Link>
        </p>
      </div>
      <div className="logos">
        <Link href="https://github.com/krzysiou">
          <GitHubIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/krzysztof-tluszcz/">
          <LinkedInIcon />
        </Link>
      </div>
    </FooterStyled>
  );
};

export { Footer };
