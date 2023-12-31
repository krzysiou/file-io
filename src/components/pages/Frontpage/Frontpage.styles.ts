import { styled } from 'styled-components';

import { styleVariables } from '../../../../public/styles/utils/styleVariables';
import { mediaQuery } from '../../../../public/styles/utils/mediaQuery';

const { colors, paddings, mediaBreakpoint } = styleVariables;

const FrontpageStyled = styled.div`
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

  .logos {
    position: relative;
    overflow: hidden;
    padding: 15px 0;
    width: 100%;
    height: 200px;
    white-space: nowrap;
    z-index: -2;

    ${mediaQuery['web']} {
      padding: 60px 0;
    }
  }

  .logos:before,
  .logos:after {
    position: absolute;
    top: 0;
    width: 250px;
    height: 200px;
    content: '';
    z-index: -1;
  }

  .logos:before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), #ffffff);
  }

  .logos:after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), #ffffff);
  }

  .logos:hover .logos-slide {
    animation-play-state: paused;
  }

  .logosSlide {
    position: absolute;
    animation: 30s logoLoop infinite linear;

    img {
      width: 300px;
      height: 150px;
      opacity: 5%;
    }
  }

  @keyframes logoLoop {
    0% {
      left: calc(-1800px);
    }
    100% {
      left: calc(100%);
    }
  }
`;

export { FrontpageStyled };
