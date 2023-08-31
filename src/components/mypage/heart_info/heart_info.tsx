import React, { useState, useEffect } from 'react';
import * as S from './heart_info.style';
import { apiInstance } from '../../../utils/api';
import { ROUTE } from '../../../routes';
import { Link, useParams } from 'react-router-dom';

interface Challenge {
  image: string;
  title: string;
  start_date: string;
  end_date: string;
  id: string;
}

const HeartInfo = () => {
  const { id } = useParams();
  const [likeUserData, setLikeUserData] = useState<Challenge[]>([]);

  useEffect(() => {
    async function fetchChallengeData() {
      try {
        const challengeResponse = await apiInstance.get('/users/mypageChall');
        if (challengeResponse.status === 200) {
          const challenges: Challenge[] = challengeResponse.data.challenge.map(
            (challenge: any) => ({
              ...challenge,
              start_date: challenge.start_date,
              end_date: challenge.end_date,
            })
          );
          setLikeUserData(challenges);
        }
      } catch (error) {
        console.error('Error fetching challenge data:', error);
      }
    }

    fetchChallengeData();
  });

  return (
    <S.StatusWrap>
      {likeUserData.map((challenge, index) => (
        <div key={index}>
          <S.StyledImg />
          <S.InfoFlex>
            <div>
              <h3>{challenge.title}</h3>
              <h4>
                {challenge.start_date} ~ {challenge.end_date}
              </h4>
            </div>
          </S.InfoFlex>
          <Link to={`${ROUTE.APPPAGE.link}/${challenge.id}`}>
            <S.ButtonAuth>챌린지 참여하기</S.ButtonAuth>
          </Link>
        </div>
      ))}
    </S.StatusWrap>
  );
};

export default HeartInfo;
