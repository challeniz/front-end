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
    async function fetchUserData() {
      try {
        const challengeResponse = await apiInstance.get('/users/mypageChall');
        const data = challengeResponse.data;

        if (data && data.challenge && data.challenge.length > 0) {
          const challengeArray = data.challenge;

          const processedChallenges = challengeArray.map(
            (challenge: Challenge) => {
              const startDate = new Date(challenge.start_date);
              const endDate = new Date(challenge.end_date);

              return {
                image: challenge.image,
                title: challenge.title,
                start_date: `${startDate.getFullYear()}년 ${
                  startDate.getMonth() + 1
                }월 ${startDate.getDate()}일`,
                end_date: `${endDate.getFullYear()}년 ${
                  endDate.getMonth() + 1
                }월 ${endDate.getDate()}일`,
                id: challenge.id,
              };
            }
          );

          setLikeUserData(processedChallenges);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchUserData();
  }, []);

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
