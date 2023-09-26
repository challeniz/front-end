import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './status_info.style';
import { apiInstance } from '../../../utils/api';
import { ROUTE } from '../../../routes';
import { Link } from 'react-router-dom';

interface Challenge {
  mainImg: string;
  title: string;
  start_date: string;
  end_date: string;
  id: string;
}

const StatusInfo = () => {
  const { id } = useParams();
  const [challengeData, setChallengeData] = useState<Challenge[]>([]);

  useEffect(() => {
    async function fetchChallengeData() {
      try {
        const challengeResponse = await apiInstance.get('/users/mypageChall');
        if (challengeResponse.status === 200) {
          const challenges: Challenge[] = challengeResponse.data.challenge.map(
            (challenge: any) => ({
              ...challenge,
              start_date: new Date(challenge.start_date).toLocaleDateString(),
              end_date: new Date(challenge.end_date).toLocaleDateString(),
              mainImg: challenge.mainImg,
              id: challenge._id,
            })
          );

          setChallengeData(challenges);
        }
      } catch (error) {
        console.error('Error fetching challenge data:', error);
      }
    }

    fetchChallengeData();
  }, []);

  return (
    <S.StatusWrap>
      {challengeData.map((challenge, index) => (
        <S.InfoWrap key={index}>
          <S.ImgWrap>
            <img src={challenge.mainImg} alt="Challenge" />
          </S.ImgWrap>
          <S.InfoFlex>
            <div>
              <h3>{challenge.title}</h3>
              <h4>
                {challenge.start_date} ~ {challenge.end_date}
              </h4>
            </div>
            <S.PercentWrap>
              <p>달성률</p>
              <h5>
                70<span>%</span>
              </h5>
            </S.PercentWrap>
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
