import { styled } from 'styled-components';

import { styleVariables } from '../../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../../public/styles/utils/mediaQuery';

const { colors } = styleVariables;

const SpzFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 200px;

  ${mediaQuery['web']} {
    width: 550px;
  }

  .label {
    margin: 5px 0 2px;
    font-size: 12px;
  }

  .file-name {
    margin: 0 auto;
    width: 100%;
    border: 1px solid ${colors.action};
    border-radius: 5px;
    padding: 5px 0;
  }

  div {
    width: 80%;

    ${mediaQuery['web']} {
      width: 100%;
    }

    ul {
      width: 100%;

      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        ${mediaQuery['web']} {
          flex-direction: row;
        }

        .entry {
          margin: 5px 0;
          width: 100%;

          ${mediaQuery['web']} {
            width: 45%;
          }

          input {
            width: calc(100% - 10px);
            border: 1px solid ${colors.action};
            border-radius: 5px;
            padding: 5px 5px;
          }
        }
      }
    }
  }

  .error {
    color: ${colors.error};
  }

  .picker {
    width: 30px;
    border: 1px solid ${colors.action};
    border-radius: 5px;
    margin-top: 5px;
    padding: 5px 5px;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;

    ${mediaQuery['web']} {
      width: 100%;
    }

    div {
      width: 100%;

      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin: 10px 0;

        > input {
          width: calc(100% - 10px);
          border: 1px solid ${colors.action};
          border-radius: 5px;
          padding: 5px 5px;
          margin-bottom: 10px;

          ${mediaQuery['web']} {
            width: 30%;
            margin-bottom: 0;
          }
        }
      }
    }
  }

  .side {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;

    ${mediaQuery['web']} {
      width: 100%;
    }

    div {
      width: 100%;

      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 10px 0;

        > input {
          width: calc(100% - 10px);
          border: 1px solid ${colors.action};
          border-radius: 5px;
          padding: 5px 5px;
          margin-bottom: 10px;

          ${mediaQuery['web']} {
            width: 20%;
            margin-bottom: 0;
          }
        }
      }
    }
  }
`;

export { SpzFormStyled };
