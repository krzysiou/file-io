import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/github.svg';

const GitHubIcon: React.FC = () => {
  return <Image src={logo} width={40} height={40} alt="github" />;
};

export { GitHubIcon };
