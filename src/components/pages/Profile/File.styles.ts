import { styled } from 'styled-components';

import { styleVariables } from '../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../public/styles/utils/mediaQuery';

const { colors } = styleVariables;

const FileStyled = styled.div`
  width: calc(100% - 30px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  background-color: ${colors.light};
  border-bottom: 1px solid ${colors.accentLight};

  &:last-child {
    border-bottom: none;
  }

  ${mediaQuery['web']} {
    margin: 0 auto;
    width: 550px;
    padding: 10px 30px;
  }

  .title {
    width: 33%;
    color: ${colors.action};
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-weight: 200;
    font-size: 14px;

    ${mediaQuery['web']} {
      width: 40%;
      font-size: 18px;
    }
  }

  .right {
    width: 66%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${mediaQuery['web']} {
      width: 60%;
    }

    .date {
      color: ${colors.accentLight};
      font-size: 10px;

      ${mediaQuery['web']} {
        font-size: 12px;
      }

      .file-date {
        margin: 10px;
      }
    }

    .task {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      ${mediaQuery['web']} {
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
      }

      .button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        border: none;
        padding: 0 10px;
        border: none;
        background: transparent;
        border-radius: 5px;
        transition: 0.1s;
        cursor: pointer;

        ${mediaQuery['web']} {
          padding: 5px 5px;
          margin: 0 5px;
        }

        &:hover {
          background-color: ${colors.action};

          img {
            filter: brightness(0) invert(1);
          }
        }

        img {
          width: 20px;
          height: 20px;

          ${mediaQuery['web']} {
            height: 25px;
            width: 25px;
          }
        }
      }
    }
  }
`;

export { FileStyled };
