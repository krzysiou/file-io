import { styled } from 'styled-components';

import { styleVariables } from '../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../public/styles/utils/mediaQuery';

const { colors, paddings, mediaBreakpoint } = styleVariables;

const EditStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding: ${paddings.mobile};
  text-align: center;
  color: ${colors.accentDark};

  ${mediaQuery['web']} {
    padding: ${paddings.web};
  }

  .hero {
    font-size: 32px;
    line-height: 32px;
    font-weight: 900;
    margin-bottom: 40px;
    max-width: ${mediaBreakpoint};

    ${mediaQuery['web']} {
      font-size: 64px;
      line-height: 64px;
      max-width: 750px;
      margin-bottom: 80px;
    }

    > span {
      background: -webkit-linear-gradient(
        0deg,
        ${colors.accentDark},
        ${colors.action}
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

export { EditStyled };
