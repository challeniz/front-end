import React, { useState, useEffect } from 'react';
import * as S from './heart_info.style';
import { apiInstance } from '../../../utils/api';
import { ROUTE } from '../../../routes';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';

interface Challenge {
  mainImg: string;
  title: string;
  start_date: string;
  end_date: string;
  id: string;
  users: string[];
}

const HeartInfo = () => {
  const { id } = useParams();
  const [likeUserData, setLikeUserData] = useState<Challenge[]>([]);
  const [mypageInfo, setMypageInfo] = useState({
    id: '',
  });

  useEffect(() => {
    async function fetchChallengeData() {
      try {
        const challengeResponse = await apiInstance.get('/users/mypageChall');
        if (challengeResponse.status === 200) {
          const challenges: Challenge[] = challengeResponse.data.zzimChallenge
            .map((challenge: any) => ({
              ...challenge,
              start_date: new Date(challenge.start_date).toLocaleDateString(),
              end_date: new Date(challenge.end_date).toLocaleDateString(),
              mainImg: challenge.mainImg,
              id: challenge._id,
              users: challenge.users,
            }))
            .filter(
              (challenge: Challenge) => !challenge.users.includes(mypageInfo.id)
            );

          setLikeUserData(challenges);

          // 필터링된 후 각 챌린지에 대해 apiInstance.patch 호출
          challenges.forEach(async (challenge) => {
            await apiInstance.patch(`/challenges/zzim/${challenge.id}`);
          });
        }
      } catch (error) {
        console.error('Error fetching challenge data:', error);
      }
    }

    async function fetchMypageInfo() {
      try {
        const response = await apiInstance.get('/users/mypageInfo');
        const userData = response.data;
        setMypageInfo({
          id: userData._id,
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchChallengeData();
    fetchMypageInfo();
  }, []);

  const isUserInChallenge = (challenge: Challenge) => {
    return challenge.users.includes(mypageInfo.id);
  };

  return (
    <S.StatusWrap>
      {likeUserData.map((challenge, index) => (
        <div key={index}>
          <S.ImgWrap>
            <img src={challenge.mainImg} alt="Challenge" />
          </S.ImgWrap>
          <S.InfoFlex>
            <div>
              <Link to={`${ROUTE.DETAILPAGE.link}/${challenge.id}`}>
                <h3>{challenge.title}</h3>
              </Link>
              <h4>
                {moment(challenge.start_date).format('YYYY년 MM월 DD일')} ~{' '}
                {moment(challenge.end_date).format('YYYY년 MM월 DD일')}
              </h4>
            </div>
          </S.InfoFlex>
          {isUserInChallenge(challenge) ? (
            <Link to={`${ROUTE.AUTHPAGE.link}/${challenge.id}`}>
              <S.ButtonAuth>챌린지 인증하기</S.ButtonAuth>
            </Link>
          ) : (
            <Link to={`${ROUTE.APPPAGE.link}/${challenge.id}`}>
              <S.ButtonAuth>챌린지 가입하기</S.ButtonAuth>
            </Link>
          )}
        </div>
      ))}
    </S.StatusWrap>
  );
};

export default HeartInfo;
