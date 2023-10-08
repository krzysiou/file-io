import { styled } from 'styled-components';

import { styleVariables } from '../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../public/styles/utils/mediaQuery';

const { colors } = styleVariables;

const FooterStyled = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 12px;
  height: 45px;
  background-color: ${colors.light};
  border-top: 1px solid ${colors.accentLight};

  ${mediaQuery['web']} {
    height: 60px;
    font-size: 16px;
  }

  .info {
    a {
      color: ${colors.action};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .logos {
    display: flex;
    align-items: center;
    justify-content: space-around;

    img {
      width: 30px;
      height: 30px;
      margin: 0 15px;
    }
  }
`;

export { FooterStyled };
