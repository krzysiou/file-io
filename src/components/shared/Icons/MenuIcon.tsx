import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/menu.svg';

const MenuIcon: React.FC = () => {
  return <Image src={logo} width={40} height={40} alt="menu" />;
};

export { MenuIcon };
