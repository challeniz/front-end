import React, { useState, useEffect } from 'react';
import * as S from './detail_nav.style';
import { apiInstance } from '../../../utils/api';
import { Link, useParams } from 'react-router-dom';
import { ROUTE } from '../../../routes';

interface Challenge {
  description: string;
  img: string;
  userName: string;
  postDate: string;
  title: string;
}

const DetailNav = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [isParticipated, setIsParticipated] = useState(false);
  const [challengeList, setChallengeList] = useState<Challenge[]>([]);

  // 스크롤시 nav 위치 수정
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

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
    const storedIsLiked = localStorage.getItem('isLiked');

    if (storedIsLiked !== null) {
      setIsLiked(JSON.parse(storedIsLiked));
    }
  }, []);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiInstance.get(`/posts/challenges/${id}`);
        const data = response.data;
        if (data.length > 0) {
          const challenges = data.map((challenge: any) => ({
            postDate: challenge.post_date,
          }));
          setChallengeList(challenges);

          // 오늘 날짜를 가져옵니다.
          const todayDate = getTodayDate();

          // postDates 배열을 생성합니다.
          const postDates = challenges.map(
            (challenge: { postDate: any }) => challenge.postDate
          );
          console.log('인증날짜', postDates);
          console.log('오늘날짜', todayDate);
          if (postDates.includes(todayDate)) {
            console.log('오늘 인증 가능한 챌린지가 있습니다.');
          } else {
            console.log('오늘 인증 가능한 챌린지가 없습니다.');
          }
        }
      } catch (error) {
        console.error('데이터 가져오기 오류:', error);
      }
    };

    fetchData();
  }, [id]);

  // 오늘 날짜를 가져오는 함수
  const getTodayDate = () => {
    const today = new Date();
    return today.toLocaleDateString();
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
