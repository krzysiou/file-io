import React from 'react';
import Link from 'next/link';

import { GitHubIcon, LinkedInIcon } from '../Icons';
import styles from './Footer.module.scss';

const { footer, info, logos } = styles;

const Footer: React.FC = () => {
  return (
    <div className={footer}>
      <div className={info}>
        <p>
          You can find me on{' '}
          <Link href="https://github.com/krzysiou">GitHub</Link>
        </p>
      </div>
      <div className={logos}>
        <Link href="https://github.com/krzysiou">
          <GitHubIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/krzysztof-tluszcz/">
          <LinkedInIcon />
        </Link>
      </div>
    </div>
  );
};

export { Footer };
