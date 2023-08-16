import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  padding: 40px 80px;
  position: relative;
  cursor: pointer;
`;

const HeaderContainer = styled.header`
  display: flex;
  transform: translateY(-50%);
  align-items: center;
`;

const Logo = styled.div`
  h1 {
    margin: 0;
  }
`;

const HeaderNav = styled.nav`
  padding: 30px;
  width: 50%;
  cursor: pointer;
`;

const NavList = styled.ul`
  display:flex;
`;

const NavItem = styled.li`
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  padding: 10px 20px;
  font-weight: 600;
  margin: 0 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d8d8d8c5;
    border-radius: 10px;
  }
`;

const LoginBox = styled.div`
  display: inline-flex;
  width: 50%;
  justify-content: flex-end;
  text-align: center;
  cursor: pointer;
`;

const LoginList = styled.ul`
display: flex;
`

const LoginItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  width: 120px;
  height: 35px;
  margin: 10px 5px;
  font-weight: 600;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d8d8d8c5;
    border-radius: 10px;
  }
`;

const ChallMakeButton = styled.li`
  color: #fff;
  background: linear-gradient(90deg, #74c0fc 0%, #228be6 100%);
  border-radius: 10px;
  width: 142px;
  height: 35px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo><h1>logo</h1></Logo>
        <HeaderNav>
          <NavList>
            <NavItem>진행중인첼린지</NavItem>
            <NavItem>운동챌린지</NavItem>
            <NavItem>독서챌린지</NavItem>
          </NavList>
        </HeaderNav>
        <LoginBox>
        <LoginList>
            <ChallMakeButton>챌린지 만들기</ChallMakeButton>
            <LoginItem>로그인</LoginItem>
            <LoginItem>회원가입</LoginItem>
            <LoginItem>회원가입</LoginItem>
          </LoginList>
        </LoginBox>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
