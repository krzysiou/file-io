import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/linkedin.svg';

const LinkedInIcon: React.FC = () => {
  return <Image src={logo} width={40} height={40} alt="linkedin" />;
};

export { LinkedInIcon };
