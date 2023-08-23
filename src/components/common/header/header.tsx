import React, { useState, useEffect } from 'react';
import * as S from './header.style';
import { ROUTE } from '../../../routes';
import { Link } from 'react-router-dom';
import LogoImage from '../../../assets/image/logo.png';
import {
  FaHeartPulse,
  FaBowlFood,
  FaLeaf,
  FaBook,
  FaCat,
} from 'react-icons/fa6';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });
  return (
    <S.HeaderWrapper
      className={scrollPosition < 100 ? 'original_header' : 'change_header'}
    >
      <S.HeaderContainer>
        <S.Logo>
          <Link to={ROUTE.MAIN.link}>
            <S.LogoImg src={LogoImage} alt="Logo" />
          </Link>
        </S.Logo>
        <S.HeaderNav>
          <S.NavList>
            <Link to={ROUTE.LISTPAGE.link}>
              <S.NavItem>
                진행중인챌린지
                <S.SubMenu>
                  <S.InnerLi>
                    <FaHeartPulse />
                    건강
                  </S.InnerLi>
                  <S.InnerLi>
                    <FaCat />
                    취미
                  </S.InnerLi>
                  <S.InnerLi>
                    <FaBowlFood />
                    식습관
                  </S.InnerLi>
                  <S.InnerLi>
                    <FaBook />
                    공부
                  </S.InnerLi>
                  <S.InnerLi>
                    <FaLeaf />
                    환경
                  </S.InnerLi>
                </S.SubMenu>
              </S.NavItem>
            </Link>
            <Link to={ROUTE.NEWPAGE.link}>
              <S.NavItem>챌린지개설하기</S.NavItem>
            </Link>
          </S.NavList>
        </S.HeaderNav>
        <S.LoginBox>
          <S.LoginList>
            <S.LoginItem>
              <S.StyledCiUser />
              <S.SubMenu>
                <S.InnerLi>로그인</S.InnerLi>
                <S.InnerLi>회원가입</S.InnerLi>
                <S.InnerLi>마이페이지</S.InnerLi>
              </S.SubMenu>
            </S.LoginItem>
          </S.LoginList>
        </S.LoginBox>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
