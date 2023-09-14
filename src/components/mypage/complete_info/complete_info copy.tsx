import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './complete_info.style';
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

const CompleteInfo = () => {
  const { id } = useParams();
  const [challengeData, setChallengeData] = useState<Challenge[]>([]);
  const [userId, setUserId] = useState<string>(''); // 유저의 ID를 저장할 상태 추가

  useEffect(() => {
    async function fetchUserData() {
      try {
        // 유저 정보 가져오기
        const userInfoResponse = await apiInstance.get('/users/mypageInfo');
        const userData = userInfoResponse.data;

        if (userData && userData.id) {
          // 유저의 ID를 상태에 저장
          setUserId(userData.id);
        }

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
              <h3>물 마시기</h3>
              <h4>2023.08.01 ~ 2023.08.31</h4>
            </div>
          </S.InfoFlex>
        </S.InfoWrap>
      ))}
    </S.StatusWrap>
  );
};

export default CompleteInfo;
