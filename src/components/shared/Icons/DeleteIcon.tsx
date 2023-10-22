import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/delete.svg';

const DeleteIcon: React.FC = () => {
  return <Image src={logo} width={40} height={40} alt="delete" />;
};

export { DeleteIcon };
