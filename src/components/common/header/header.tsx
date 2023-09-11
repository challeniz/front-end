import React, { useState, useEffect } from 'react';
import * as S from './header.style';
import { ROUTE } from '../../../routes';
import { Link, useNavigate } from 'react-router-dom';
import LogoImage from '../../../assets/image/logo.png';
import {
  FaHeartPulse,
  FaBowlFood,
  FaLeaf,
  FaBook,
  FaCat,
} from 'react-icons/fa6';
import { FaUserCircle } from 'react-icons/fa';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  const token = 'token';
  const user = localStorage.getItem(token);

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });
  const navigate = useNavigate();

  const handleChallengeCreationClick = () => {
    const storedToken = localStorage.getItem('token');
    if (!storedToken) {
      if (
        window.confirm(
          '챌린지를 개설하려면 먼저 로그인하세요. 로그인 페이지로 이동하시겠습니까?'
        )
      ) {
        navigate('/login'); // 로그인 페이지로 이동
      }
    } else {
      navigate(ROUTE.NEWPAGE.link); // 챌린지 개설 페이지로 이동
    }
  };

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
            <S.NavItem>챌리니즈 소개</S.NavItem>
            <Link to={ROUTE.LISTPAGE.link}>
              <S.NavItem>
                <Link to={`${ROUTE.LISTPAGE.link}?category=`}>
                  챌린지 둘러보기
                </Link>
                <S.SubMenu>
                  <S.InnerLi>
                    <FaHeartPulse />
                    <Link to={`${ROUTE.LISTPAGE.link}?category=건강`}>
                      건강
                    </Link>
                  </S.InnerLi>
                  <S.InnerLi>
                    <FaCat />
                    <Link to={`${ROUTE.LISTPAGE.link}?category=취미`}>
                      취미
                    </Link>
                  </S.InnerLi>
                  <S.InnerLi>
                    <FaBowlFood />
                    <Link to={`${ROUTE.LISTPAGE.link}?category=식습관`}>
                      식습관
                    </Link>
                  </S.InnerLi>
                  <S.InnerLi>
                    <FaBook />
                    <Link to={`${ROUTE.LISTPAGE.link}?category=공부`}>
                      공부
                    </Link>
                  </S.InnerLi>
                  <S.InnerLi>
                    <FaLeaf />
                    <Link to={`${ROUTE.LISTPAGE.link}?category=환경`}>
                      환경
                    </Link>
                  </S.InnerLi>
                </S.SubMenu>
              </S.NavItem>
            </Link>
            <S.NavItem onClick={handleChallengeCreationClick}>
              챌린지 개설하기
            </S.NavItem>
          </S.NavList>
        </S.HeaderNav>
        <S.LoginBox>
          <S.LoginList>
            <S.LoginItem>
              <S.StyledCiUser />
              <S.SubMenu>
                {!user ? (
                  <>
                    <Link to={'/login'}>
                      <S.InnerLi>로그인</S.InnerLi>
                    </Link>
                    <Link to={'/joinpage'}>
                      <S.InnerLi>회원가입</S.InnerLi>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to={'/mypage'}>
                      <S.InnerLi>마이페이지</S.InnerLi>
                    </Link>
                    <button
                      onClick={() => {
                        localStorage.removeItem('token');
                        window.location.reload();
                      }}
                    >
                      <S.InnerLi>로그아웃</S.InnerLi>
                    </button>
                  </>
                )}
              </S.SubMenu>
            </S.LoginItem>
          </S.LoginList>
        </S.LoginBox>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
