import { styled } from 'styled-components';

import { styleVariables } from '../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../public/styles/utils/mediaQuery';

const { colors, paddings, mediaBreakpoint } = styleVariables;

const SchemasStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${paddings.mobile};
  margin: 0 auto;
  margin-bottom: 100px;

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
      margin-bottom: 50px;
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
    padding: 20px;

    ${mediaQuery['web']} {
      font-size: 18px;
      line-height: 20px;
      padding: 0;
    }

    > span {
      font-weight: 600;
      color: ${colors.action};
    }
  }

  .images {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;

    ${mediaQuery['web']} {
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 40px;
    }

    .entry {
      font-size: 14px;
      color: ${colors.action};
      margin: 15px 10px;

      ${mediaQuery['web']} {
        font-size: 18px;
      }

      img {
        width: 200px;
        height: 200px;
        margin-top: 10px;
        -webkit-box-shadow: 15px 16px 39px 0px rgba(66, 68, 90, 1);
        -moz-box-shadow: 15px 16px 39px 0px rgba(66, 68, 90, 1);
        box-shadow: 15px 16px 39px 0px rgba(66, 68, 90, 1);

        ${mediaQuery['web']} {
          width: 400px;
          height: 400px;
        }
      }
    }
  }
`;

export { SchemasStyled };
