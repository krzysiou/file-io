import React from 'react';
import Image from 'next/image';

import logo from '../../assets/file-io.svg';

const LogoIcon: React.FC = () => {
  return <Image src={logo} width={100} height={50} alt="file-io" />;
};

export { LogoIcon };
