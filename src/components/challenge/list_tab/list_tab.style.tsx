import styled from 'styled-components';

export const ListTite = styled.div`
  display: flex;
  padding-bottom: 50px;
  align-items: flex-end;

  @media (max-width: 420px) {
    padding: 20px 0;
  }

  h2 {
    font-size: 35px;
    padding-right: 15px;

    @media (max-width: 420px) {
      font-size: 23px;
    }
  }

  p {
    font-size: 17px;
    @media (max-width: 420px) {
      font-size: 15px;
    }
  }
`;

export const TabMenu = styled.ul`
  border-bottom: 1px solid #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-bottom: 10px;
  margin-top: 10px;
  justify-contents: center;

  @media (max-width: 420px) {
    flex-wrap: wrap;
    justify-content: space-between;
    border-bottom: none;
  }

  .submenu {
    display: flex;
    padding: 0 25px 15px;
    font-size: 20px;
    border-radius: 10px 10px 0px 0px;
    text-align: center;
    color: #787878;
    cursor: pointer;
    font-weight: 600;

    @media (max-width: 420px) {
      flex-wrap: wrap;
      border-radius: 20px;
      border: 1px solid #787878;
      padding: 8px;
      width: calc(100% / 3.1);
      justify-content: center;
      margin-bottom: 10px;
    }
  }

  .focused {
    color: #fff;
    position: relative;
    font-weight: 600;
    background-color: #339af0;
    border: 1px solid #339af0;

    &::before {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      background-color: #339af0;
      height: 5px;
      border-radius: 10px;

      @media (max-width: 420px) {
        display: none;
      }
    }
  }

  & div.desc {
    text-align: center;
  }
`;
