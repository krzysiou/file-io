import React from 'react';
import Image from 'next/image';

import logo from '../../../../public/images/edit.svg';

const EditIcon: React.FC = () => {
  return <Image src={logo} width={40} height={40} alt="edit" />;
};

export { EditIcon };
