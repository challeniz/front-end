import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './status_info.style';
import { apiInstance } from '../../../utils/api';
import { ROUTE } from '../../../routes';
import { Link } from 'react-router-dom';

interface Challenge {
  image: string;
  title: string;
  start_date: string;
  end_date: string;
  id: string;
}

const StatusInfo = () => {
  const { id } = useParams();
  const [challengeData, setChallengeData] = useState<Challenge[]>([]);
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

          setChallengeData(processedChallenges);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchUserData();
  }, []);

  return (
    <S.StatusWrap>
      {challengeData.map((challenge, index) => (
        <S.InfoWrap key={index}>
          <S.StyledImg />
          <S.InfoFlex>
            <div>
              <S.TagEdit>
                <a>수정</a>
                <a>삭제</a>
              </S.TagEdit>
              <h3>{challenge.title}</h3>
              <h4>
                {challenge.start_date} ~ {challenge.end_date}
              </h4>
            </div>
            {/* <S.PercentWrap>
              <p>달성률</p>
              <h5>
                70<span>%</span>
              </h5>
            </S.PercentWrap> */}
          </S.InfoFlex>
          <Link to={`${ROUTE.AUTHPAGE.link}/${challenge.id}`}>
            <S.ButtonAuth>챌린지 인증하기</S.ButtonAuth>
          </Link>
        </S.InfoWrap>
      ))}
    </S.StatusWrap>
  );
};

export default StatusInfo;
