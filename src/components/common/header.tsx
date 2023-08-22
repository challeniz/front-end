import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ROUTE } from '../../routes';
import { Link } from 'react-router-dom';
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
  position: sticky;
  top: 0px;
  padding: 0px 80px;
  cursor: pointer;
  height: 90px;
  box-sizing: border-box;
  border-bottom: 1px solid #e6e6e6;
  z-index: 99999;

  &.original_header {
    background-color: #fff;
    transition: 0.3s;
  }

  &.change_header {
    background-color: #fff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
    transition: 0.3s;
  }
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
    // color: #339af0;
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
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });
  return (
    <HeaderWrapper
      className={scrollPosition < 100 ? 'original_header' : 'change_header'}
    >
      <HeaderContainer>
        <Logo>
          <Link to={ROUTE.MAIN.link}>
            <LogoImg src={LogoImage} alt="Logo" />
          </Link>
        </Logo>
        <HeaderNav>
          <NavList>
            <Link to={ROUTE.LISTPAGE.link}>
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
            </Link>
            <Link to={ROUTE.NEWPAGE.link}>
              <NavItem>챌린지개설하기</NavItem>
            </Link>
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
