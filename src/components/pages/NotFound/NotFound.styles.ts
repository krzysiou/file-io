import { styled } from 'styled-components';

import { styleVariables } from '../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../public/styles/utils/mediaQuery';

const { colors, paddings, mediaBreakpoint } = styleVariables;

const NotFoundStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${paddings.mobile};

  ${mediaQuery['web']} {
    padding: ${paddings.web};
  }

  .hero {
    font-size: 32px;
    line-height: 32px;
    font-weight: 900;
    margin-bottom: 20px;
    max-width: ${mediaBreakpoint};

    ${mediaQuery['web']} {
      font-size: 64px;
      line-height: 64px;
      max-width: 750px;
      margin-bottom: 40px;
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

  .description {
    font-size: 12px;
    line-height: 12px;
    font-weight: 200;
    max-width: ${mediaBreakpoint};

    ${mediaQuery['web']} {
      font-size: 18px;
      line-height: 20px;
    }

    > span {
      font-weight: 600;
      color: ${colors.action};
    }
  }

  .link {
    margin: 10px 0;
    font-size: 16px;
    font-weight: 600;
    color: ${colors.action};
    border-bottom: 2px solid ${colors.light};
    text-decoration: none;

    &:hover {
      border-bottom: 2px solid ${colors.action};
    }
  }
`;

export { NotFoundStyled };
