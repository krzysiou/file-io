import { styled } from 'styled-components';

import type { AuthErrorObject } from '../../types';

import { styleVariables } from '../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../public/styles/utils/mediaQuery';

const { colors, paddings, mediaBreakpoint } = styleVariables;

type RegisterStyledProps = {
  errors: AuthErrorObject;
};

const RegisterStyled = styled.div<RegisterStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${paddings.mobile};
  width: 250px;
  margin: 0 auto;

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

  form {
    width: 100%;
  }

  .label {
    width: 100%;
    text-align: left;
    margin: 10px 0 0;
  }

  .label ~ .label {
    margin: 30px 0 0;
  }

  .clear {
    color: ${colors.accentDark};
    cursor: pointer;
  }

  .error {
    position: absolute;
    bottom: -30px;
    left: 0;
    font-size: 12px;
    color: ${colors.error};
    margin: 10px 0;
  }

  .input-frame {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 20px);
    border: none;
    margin: 5px 0 5px;
    padding: 5px 10px;
    background-color: ${colors.accentLighter};
    border-radius: 5px;

    .form-input {
      width: calc(100% - 20px);
      border: none;
      background-color: transparent;
      color: ${colors.accentDark};

      &:focus {
        outline-width: 0;
      }
    }
  }

  .input-username {
    border: ${(props) =>
      props.errors?.username
        ? `1px solid ${colors.error}`
        : `1px solid ${colors.accentLighter}`};
  }

  .input-password {
    border: ${(props) =>
      props.errors?.password
        ? `1px solid ${colors.error}`
        : `1px solid ${colors.accentLighter}`};
  }

  .submit-button {
    width: 100px;
    margin: 30px 0 20px;
    padding: 10px 20px;
    background-color: ${colors.action};
    border: none;
    border-radius: 20px;
    transition: 0.2s;

    &:hover {
      background-color: ${colors.accentDark};
      color: ${colors.light};
    }
  }

  .redirect {
    text-decoration: none;
    color: ${colors.accentDark};

    > span {
      color: ${colors.action};

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export { RegisterStyled };
