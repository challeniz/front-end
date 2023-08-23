import React, { useState, useEffect } from 'react';
import * as S from './detail_nav.style';
import {
  CiShare2,
  CiHeart,
  CiCalendarDate,
  CiUser,
  CiStar,
} from 'react-icons/ci'; // 아이콘 이름 수정

const DetailNav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });
  return (
    <S.DetailNavs
      className={scrollPosition < 100 ? 'DetailNavs' : 'ScrollNavs'}
    >
      <div>
        <S.DetailTag>#운동</S.DetailTag>
        <S.DetailTag>#걷기</S.DetailTag>
      </div>
      <S.H3Styled>만보 걷기 챌린지</S.H3Styled>
      <h5>개설 챌리니 : 윥이님</h5>
      <S.ButtonWrap>
        <S.SubButton>
          <S.ButtonFlex>
            <S.StyledCiShare2 />
            공유하기
          </S.ButtonFlex>
        </S.SubButton>
        <S.SubButton>
          <S.ButtonFlex>
            <S.StyledCiHeart />
            찜하기
          </S.ButtonFlex>
        </S.SubButton>
      </S.ButtonWrap>
      <S.MainButton>챌린지 참여하기</S.MainButton>
      <S.DetailInfo>
        <S.PStyled>
          <S.StyledCiUser />
          현재 18명 참여 중
        </S.PStyled>
      </S.DetailInfo>
    </S.DetailNavs>
  );
};

export default DetailNav;
