'use client';

import React from 'react';

import { DropdownStyled } from './Dropdown.styles';

type DropdownProps = {
  open: boolean;
  trigger: React.ReactNode;
  menu: React.ReactNode[];
};

const Dropdown: React.FC<DropdownProps> = ({ open, trigger, menu }) => {
  return (
    <DropdownStyled>
      {trigger}
      {open ? (
        <ul className="menu">
          {menu.map(
            (menuItem, index) =>
              menuItem && (
                <li key={index} className="menu-item">
                  {menuItem}
                </li>
              )
          )}
        </ul>
      ) : null}
    </DropdownStyled>
  );
};

export { Dropdown };
