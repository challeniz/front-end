import React, { useState, useEffect } from 'react';
import * as S from './mobile_menu.style';
import { ROUTE } from '../../../routes';
import { Link, useNavigate } from 'react-router-dom';

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
          <a href="">챌린지 둘러보기</a>
        </li>
        <li>
          <a href="">챌린지 개설하기</a>
        </li>
      </ul>
      <div>
        <button className="login">로그인</button>
        <button className="join">회원가입</button>
      </div>
    </S.MenuWrap>
  );
};

export default MobileMenu;
