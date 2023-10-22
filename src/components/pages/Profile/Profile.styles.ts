import { styled } from 'styled-components';

import { styleVariables } from '../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../public/styles/utils/mediaQuery';

const { colors, mediaBreakpoint, paddings } = styleVariables;

const ProfileStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${paddings.mobile};
  margin: 0 auto;

  ${mediaQuery['web']} {
    padding: ${paddings.web};
  }

  .hero {
    margin: 0 auto;
    font-size: 32px;
    line-height: 32px;
    font-weight: 900;
    margin-bottom: 20px;
    max-width: ${mediaBreakpoint};

    ${mediaQuery['web']} {
      font-size: 64px;
      line-height: 64px;
      max-width: 750px;
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

  .create-file {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.action};
    border: 2px solid ${colors.light};
    border-radius: 10px;
    padding: 5px 10px;
    margin-bottom: 20px;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      border: 2px solid ${colors.action};
    }

    ${mediaQuery['web']} {
      padding: 8px 15px;
    }

    > p {
      font-size: 14px;
      margin-right: 5px;
      color: ${colors.light};

      ${mediaQuery['web']} {
        font-size: 20px;
      }
    }

    img {
      width: 20px;
      height: 20px;

      ${mediaQuery['web']} {
        width: 25px;
        height: 25px;
      }
    }
  }

  .description {
    font-size: 12px;
    line-height: 12px;
    font-weight: 200;
    text-align: center;
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
`;

export { ProfileStyled };
