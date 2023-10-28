import { styled } from 'styled-components';

const SpzTemplateStyled = styled.div`
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
    margin: 0;
  }

  table,
  th,
  td {
    border: 1px solid rgb(158, 158, 158);
    border-collapse: collapse;
  }

  table {
    width: 100%;
  }

  th {
    text-align: center;
    padding: 10px;
  }

  td {
    padding: 4px;
    font-size: 10px;
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
  }

  .date {
    text-align: right;
    font-size: 12px;
    width: 30%;
  }

  .dean-signature {
    font-size: 14px;
    text-align: right;
    margin: 25px 0px;
  }

  .message {
    margin-bottom: 50px;
  }

  .hero {
    font-size: 16px;
    margin-bottom: 20px;
    text-align: center;
  }

  .tab {
    width: 100%;
    margin-bottom: 30px;
    margin-left: 0px;
    margin-right: 0px;
  }

  .tab-header {
    font-size: 10px;
  }

  .sum {
    margin: 0;
    margin-bottom: 40px;
    width: 100%;
    display: flex;
    text-align: right;
    justify-content: flex-end;
  }

  .footer {
    margin: 0;
    width: 100%;
    display: flex;
    text-align: right;
    justify-content: flex-end;
  }

  .left {
    width: 50%;
  }

  .mid {
    width: 40%;
  }

  .right {
    width: 10%;
  }

  .left-additional {
    width: 50%;
  }

  .mid-additional {
    width: 20%;
  }

  .right-additional {
    width: 10%;
  }

  .faculty {
    width: 20%;
  }

  .lesser {
    font-size: 10px;
    font-weight: normal;
  }
`;

export { SpzTemplateStyled };
