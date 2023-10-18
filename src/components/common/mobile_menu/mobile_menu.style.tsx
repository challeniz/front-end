import styled from 'styled-components';

export const MenuWrap = styled.div`
  background-color: #fff;
  position: absolute;
  top: 65px;
  left: 0;
  display: fixed;
  z-index: 10000;
  width: 100%;
  height: 100vh;
  padding: 50px 0px;

  ul {
    padding-bottom: 50px;
  }

  li {
    border-bottom: 1px solid #ddd;
    padding: 20px 30px;
  }

  a {
    font-size: 22px;
    font-weight: 500;
  }

  div {
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
  }

  button {
    padding: 15px;
    border-radius: 10px;
    width: calc(100% / 2.1);
    font-size: 16px;
    font-weight: 500;
  }

  button.login {
    border: 1px solid #339af0;
    background-color: #fff;
  }
  button.join {
    background-color: #339af0;
    border: 1px solid #339af0;
    color: #fff;
  }
`;
