import React, { useState } from 'react';
import * as S from './mobile_menu.style';
import { ROUTE } from '../../../routes';
import { Link } from 'react-router-dom';

const token = 'token';
const user = localStorage.getItem(token);

const MobileMenu = () => {
  const [isMenuButtonOpen, setIsMenuButtonOpen] = useState(false); // 추가: 버튼 상태 관리

  // 모바일 메뉴 토글 함수
  const toggleMobileMenu = () => {
    setIsMenuButtonOpen(!isMenuButtonOpen);
  };

  return (
    <S.MenuWrap>
      <ul>
        <li>
          <Link to={ROUTE.LISTPAGE.link}>챌린지 둘러보기</Link>
        </li>
        <li>
          <Link to={ROUTE.NEWPAGE.link}>챌린지 개설하기</Link>
        </li>
      </ul>
      <div>
        {!user ? (
          <>
            <S.Button1>
              <Link to={'/login'}>로그인</Link>
            </S.Button1>
            <S.Button2>
              <Link to={'/joinpage'}>회원가입</Link>
            </S.Button2>
          </>
        ) : (
          <>
            <S.Button1>
              <Link to={'/mypage'}>마이페이지</Link>
            </S.Button1>
            <S.Button2
              onClick={() => {
                localStorage.removeItem('token');
                window.location.reload();
              }}
            >
              로그아웃
            </S.Button2>
          </>
        )}
      </div>
    </S.MenuWrap>
  );
};

export default MobileMenu;
