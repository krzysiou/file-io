import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/download.svg';

const DownloadIcon: React.FC = () => {
  return <Image src={logo} width={40} height={40} alt="download" />;
};

export { DownloadIcon };
