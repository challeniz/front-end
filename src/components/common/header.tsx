import React from 'react';
import styled from 'styled-components';
import LogoImage from '../../assets/image/logo.png';
import {
  FaHeartPulse,
  FaBowlFood,
  FaLeaf,
  FaBook,
  FaCat,
} from 'react-icons/fa6';
import { FaUserCircle } from 'react-icons/fa';

const HeaderWrapper = styled.div`
  padding: 0px 80px;
  position: relative;
  cursor: pointer;
  height: 90px;
  box-sizing: border-box;
`;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Logo = styled.div`
  width: 180px;
`;

const LogoImg = styled.img`
  width: 100%;
`;

const HeaderNav = styled.nav`
  height: 100%;
  width: 50%;
  cursor: pointer;
`;

const NavList = styled.ul`
  display: flex;
  height: 100%;
  padding-left: 50px;
`;

const NavItem = styled.li`
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  padding: 10px 20px;
  font-weight: 500;
  margin: 0 10px;
  transition: background-color 0.2s;
  position: relative;
  display: flex;
  height: 100%;
  font-size: 18px;

  &:hover {
    ul {
      visibility: visible;
    }
  }
`;

const LoginBox = styled.div`
  display: inline-flex;
  margin-left: auto;
  justify-content: flex-end;
  text-align: center;
  cursor: pointer;
  height: 100%;
`;

const LoginList = styled.ul`
  display: flex;
  height: 100%;
`;

const LoginItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  font-weight: 600;
  position: relative;
  width: 135px;
  height: 100%;

  &:hover {
    ul {
      visibility: visible;
    }
  }
`;

const StyledCiUser = styled(FaUserCircle)`
  width: 2em;
  height: 2em;
  }
`;

const SubMenu = styled.ul`
  visibility: hidden;
  position: absolute;
  background-color: #fff;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  padding: 20px 30px;
  width: 100%;
  top: 90px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
`;

const InnerLi = styled.li`
  line-height: 35px;
  font-size: 17px;
  display: flex;
  align-items: center;

  svg {
    width: 1.4em;
    height: 1.4em;
    padding-right: 9px;
  }

  &:hover {
    text-decoration: underline;
    color: #339af0;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo>
          <LogoImg src={LogoImage} alt="Logo" />
        </Logo>
        <HeaderNav>
          <NavList>
            <NavItem>
              진행중인챌린지
              <SubMenu>
                <InnerLi>
                  <FaHeartPulse />
                  건강
                </InnerLi>
                <InnerLi>
                  <FaCat />
                  취미
                </InnerLi>
                <InnerLi>
                  <FaBowlFood />
                  식습관
                </InnerLi>
                <InnerLi>
                  <FaBook />
                  공부
                </InnerLi>
                <InnerLi>
                  <FaLeaf />
                  환경
                </InnerLi>
              </SubMenu>
            </NavItem>
            <NavItem>챌린지개설하기</NavItem>
          </NavList>
        </HeaderNav>
        <LoginBox>
          <LoginList>
            <LoginItem>
              <StyledCiUser />
              <SubMenu>
                <InnerLi>로그인</InnerLi>
                <InnerLi>회원가입</InnerLi>
                <InnerLi>마이페이지</InnerLi>
              </SubMenu>
            </LoginItem>
          </LoginList>
        </LoginBox>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
