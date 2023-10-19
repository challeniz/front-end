import React, { useState, useEffect } from 'react';
import * as S from './create_info.style';
import { apiInstance } from '../../../utils/api';
import { ROUTE } from '../../../routes';
import { Link, useParams } from 'react-router-dom';

interface Challenge {
  mainImg: string;
  title: string;
  start_date: string;
  end_date: string;
  id: string;
}

const CreateInfo = () => {

  const [likeUserData, setLikeUserData] = useState<Challenge[]>([]);

  useEffect(() => {
    async function fetchChallengeData() {
      try {
        const challengeResponse = await apiInstance.get('/users/mypageChall');
        if (challengeResponse.status === 200) {
          const challenges: Challenge[] =
            challengeResponse.data.updateCreateChallenge.map(
              (challenge: any) => ({
                ...challenge,
                start_date: new Date(challenge.start_date).toLocaleDateString(),
                end_date: new Date(challenge.end_date).toLocaleDateString(),
                mainImg: challenge.mainImg,
                id: challenge._id,
              })
            );

          setLikeUserData(challenges);
        }
      } catch (error) {
        console.error('Error fetching challenge data:', error);
      }
    }

    fetchChallengeData();
  }, []);

  return (
    <S.StatusWrap>
      {likeUserData.map((challenge, index) => (
        <div key={index}>
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
          </S.InfoFlex>
          <Link to={`${ROUTE.APPPAGE.link}/${challenge.id}`}>
            <S.ButtonAuth>챌린지 참여하기</S.ButtonAuth>
          </Link>
        </div>
      ))}
    </S.StatusWrap>
  );
};

export default CreateInfo;
