import { styled } from 'styled-components';

import { styleVariables } from '../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../public/styles/utils/mediaQuery';

const { colors } = styleVariables;

type HeaderStyledProps = {
  open: boolean;
};

const HeaderStyled = styled.div<HeaderStyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: ${colors.light};
  border-bottom: 1px solid ${colors.accentLight};

  ${mediaQuery['web']} {
    height: 75px;
  }

  img:first-of-type {
    width: 120px;
    height: 50px;

    ${mediaQuery['web']} {
      width: 180px;
      height: 75px;
      margin-left: 30px;
    }
  }

  .headerLinks {
    display: none;

    ${mediaQuery['web']} {
      display: flex;
      width: auto;
      margin-right: 30px;
      gap: 64px;
    }

    .headerLink {
      font-size: 16px;
      font-weight: 200;
      color: ${colors.main};
      border-bottom: 2px solid ${colors.light};
      text-decoration: none;
      transition: 0.2s;
      cursor: pointer;

      &:hover {
        color: ${colors.accentDark};
        border-bottom: 2px solid ${colors.action};
      }
    }
  }

  button:last-of-type {
    display: block;
    border: none;
    background-color: transparent;

    ${mediaQuery['web']} {
      display: none;
    }

    > img {
      width: 50px;
      rotate: ${(props) => (props.open ? '90deg' : '0deg')};
    }
  }
`;

export { HeaderStyled };
