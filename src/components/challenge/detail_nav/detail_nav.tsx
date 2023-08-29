import React, { useState, useEffect } from 'react';
import * as S from './detail_nav.style';
import { apiInstance } from '../../../utils/api';
import { Link, useParams } from 'react-router-dom';
import { ROUTE } from '../../../routes';

const DetailNav = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);

  // 스크롤시 nav 위치 수정
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      // 컴포넌트 언마운트 시 스크롤 이벤트 리스너 제거
      window.removeEventListener('scroll', updateScroll);
    };
  }, []); // 두 번째 파라미터로 빈 배열을 넣어 최초 렌더링 시에만 실행되도록 설정

  // 챌린지 데이터 호출
  const [challengeInfo, setChallengeInfo] = useState({
    like: false,
    title: '',
    user: '',
    tag: [],
    count: '',
    id: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiInstance.get(`/challenges/${id}`);
        const data = response.data;
        console.log('Fetched data:', data);

        if (data) {
          // 데이터가 존재하는지 확인
          setChallengeInfo((prevChallengeInfo) => ({
            ...prevChallengeInfo,
            like: false,
            title: data.challenge.title,
            user: data.name,
            tag: data.challenge.tag,
            count: data.count,
            id: data.challenge._id,
          }));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  //찜하기
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <S.DetailNavs
      className={scrollPosition < 100 ? 'DetailNavs' : 'ScrollNavs'}
    >
      <div>
        {challengeInfo.tag &&
          challengeInfo.tag.map((tag, index) => (
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
          <S.ButtonFlex
            className={isLiked ? 'liked' : ''}
            onClick={handleLikeClick}
          >
            <S.StyledCiHeart className={isLiked ? 'red' : ''} />
            찜하기
          </S.ButtonFlex>
        </S.SubButton>
      </S.ButtonWrap>
      <Link to={`${ROUTE.APPPAGE.link}/${challengeInfo.id}`}>
        <S.MainButton>챌린지 참여하기</S.MainButton>
      </Link>
      <S.DetailInfo>
        <S.PStyled>
          <S.StyledCiUser />
          현재 {challengeInfo.count}명 참여 중
        </S.PStyled>
      </S.DetailInfo>
    </S.DetailNavs>
  );
};

export default DetailNav;
