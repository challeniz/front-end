import React, { useState, useEffect } from 'react';
import * as S from './detail_nav.style';
import { apiInstance } from '../../../utils/api';
import { Link, useParams } from 'react-router-dom';
import { ROUTE } from '../../../routes';

const DetailNav = () => {
  const { id } = useParams();

  // 스크롤시 nav 위치 수정
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  // 챌린지 데이터 호출
  const [challengeInfo, setChallengeInfo] = useState({
    like: false,
    title: '',
    user: '',
    tag: [],
  });

  console.log(challengeInfo.tag);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiInstance.get(`/challenges/${id}`);
        const data = response.data;
        console.log(data);

        if (data) {
          // 데이터가 존재하는지 확인
          setChallengeInfo({
            like: false,
            title: data.title,
            user: data.user,
            tag: data.tag,
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <S.DetailNavs
      className={scrollPosition < 100 ? 'DetailNavs' : 'ScrollNavs'}
    >
      <div>
        {challengeInfo.tag.map((tag, index) => (
          <S.DetailTag key={index}>{tag}</S.DetailTag>
        ))}
      </div>
      <S.H3Styled>{challengeInfo.title}</S.H3Styled>
      <h5>개설 챌리니 : {challengeInfo.user}</h5>
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
      <Link to={ROUTE.APPPAGE.link}>
        <S.MainButton>챌린지 참여하기</S.MainButton>
      </Link>
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
