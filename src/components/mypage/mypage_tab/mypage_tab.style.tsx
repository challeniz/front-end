import styled from 'styled-components';

export const TabMenu = styled.ul`
  border-bottom: 1px solid #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-bottom: 20px;
  margin-top: 80px;
  justify-content: left;
  width: 100%;

  .submenu {
    display: flex;
    padding: 0 20px 15px;
    font-size: 20px;
    border-radius: 10px 10px 0px 0px;
    text-align: left;
    color: #787878;
    cursor: pointer;
    font-weight: 600;
    justify-content: center;
    width: calc(100% / 2);
  }

  .focused {
    color: #339af0;
    position: relative;
    font-weight: 600;

    &::before {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      background-color: #339af0;
      height: 5px;
      border-radius: 10px;
    }
  }

  & div.desc {
    text-align: center;
  }
`;

export const Wrap = styled.div``;

export const Desc = styled.div`
  text-align: left;
`;

export const StatusWrap = styled.div`
  padding: 30px 0 50px;
  h2 {
    font-size: 24px;
    padding-bottom: 23px;
  }
  h3 {
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 10px;
  }
  h4 {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const StatusGrid = styled.div``;

export const AuthInfo = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 40px;


  h4{
    font-size:18px;
    font-weight:500;
    padding-bottom:10px;
    text-align:center;
  }
  h3 {
    text-align:center;
    font-size: 31px;
    font-weight: 600;
  }
  }
`;
