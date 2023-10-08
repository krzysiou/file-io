'use client';

import { createGlobalStyle } from 'styled-components';

import { styleVariables } from './utils/styleVariables';

const { fontFamily, colors } = styleVariables;

const Globals = createGlobalStyle`
  body {
    font-family: ${fontFamily};
    color: ${colors.main};
    background-color: ${colors.light};
  }
`;

export { Globals };
