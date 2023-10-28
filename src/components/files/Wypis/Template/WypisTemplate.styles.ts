import { styled } from 'styled-components';

const WypisTemplateStyled = styled.div`
  position: relative;
  font-family: 'Verdana', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  margin: 0 auto;
  max-width: 700px;

  @page {
    size: auto;
    margin: 0;
  }

  p {
    margin: 20px 0;
  }

  b {
    font-weight: 800;
  }

  .main-body {
    font-size: small;
    text-align: left;
    margin: 20px 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .credits {
    font-size: 12px;
    width: 70%;

    li {
      margin: 5px 0;
    }
  }

  .date {
    text-align: right;
    font-size: 12px;
    width: 30%;
  }

  .dean-signature {
    font-size: 16px;
    text-align: right;
    margin: 25px 0px;
  }

  .message {
    margin-bottom: 50px;
    line-height: 16px;

    ul {
      list-style-type: circle;
      margin-left: 35px;

      li {
        margin: 5px 0;
      }
    }
  }

  .hero {
    margin: 40px 0;
    text-align: center;
    font-size: 14px;
  }

  .footer {
    margin: 0;
    width: 100%;
    display: flex;
    text-align: right;
    justify-content: flex-end;
  }

  .law {
    margin-top: 40px;

    .law-entry {
      font-size: 10px;
    }
  }
`;

export { WypisTemplateStyled };
