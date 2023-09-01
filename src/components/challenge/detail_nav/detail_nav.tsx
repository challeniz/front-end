import React, { useState, useEffect } from 'react';
import * as S from './detail_nav.style';
import { apiInstance } from '../../../utils/api';
import { Link, useParams } from 'react-router-dom';
import { ROUTE } from '../../../routes';

const DetailNav = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [isParticipated, setIsParticipated] = useState(false);

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

  const [userInfo, setUserInfo] = useState({
    id: '',
  });

  //찜하기
  const handleLikeClick = async () => {
    try {
      await apiInstance.patch(`/challenges/zzim/${id}`);

      setIsLiked(!isLiked);
      localStorage.setItem('isLiked', JSON.stringify(!isLiked));
    } catch (error) {
      console.error('Error updating like status:', error);
    }
  };

  useEffect(() => {
    // 로컬 스토리지에서 찜하기 상태 가져오기
    const storedIsLiked = localStorage.getItem('isLiked');

    // 로컬 스토리지에 'isLiked' 키가 존재하고, 값이 null이 아닌 경우에만 파싱하여 설정
    if (storedIsLiked !== null) {
      setIsLiked(JSON.parse(storedIsLiked));
    }
  }, []);

  //
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiInstance.get(`/challenges/${id}`);
        const data = response.data;
        console.log('Fetched data:', data);

        if (data) {
          setChallengeInfo((prevChallengeInfo) => ({
            ...prevChallengeInfo,
            like: false,
            title: data.challenge.title,
            user: data.name,
            tag: data.challenge.tag,
            count: data.count,
            id: data.challenge._id,
          }));

          const response = await apiInstance.get('/users/mypageInfo');
          const currentUserID = response.data._id;

          setUserInfo({
            id: currentUserID.id,
          });
          console.log('유저아이디', currentUserID);

          const hasParticipated = data.challenge.users.includes(currentUserID);
          setIsParticipated(hasParticipated);
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
      {isParticipated ? (
        <Link to={`${ROUTE.AUTHPAGE.link}/${challengeInfo.id}`}>
          <S.MainButton>챌린지 인증하기</S.MainButton>
        </Link>
      ) : (
        <Link to={`${ROUTE.APPPAGE.link}/${challengeInfo.id}`}>
          <S.MainButton>챌린지 참여하기</S.MainButton>
        </Link>
      )}
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
