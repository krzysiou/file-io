import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/plus.svg';

const PlusIcon: React.FC = () => {
  return <Image src={logo} width={40} height={40} alt="create" />;
};

export { PlusIcon };
