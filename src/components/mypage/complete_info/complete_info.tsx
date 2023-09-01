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
  const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);
  const [userId, setUserId] = useState<string>(''); // 유저의 ID를 저장할 상태 추가

  const handleDeleteChallenge = async (challengeId: string) => {
    const isConfirmed = window.confirm('삭제하시겠습니까?');

    if (isConfirmed) {
      try {
        // 현재 로그인한 사용자의 ID 가져오기
        const loggedInUserId = userId; // 이제 유저의 ID를 사용

        // 유저의 값과 현재 로그인한 유저의 ID를 비교하여 권한 확인
        if (loggedInUserId === id) {
          // 삭제 요청 보내기
          await apiInstance.delete(`/challenges/${challengeId}`);
          // 삭제된 챌린지를 상태에서 제거
          setChallengeData((prevChallenges) =>
            prevChallenges.filter((challenge) => challenge.id !== challengeId)
          );
          // 삭제 성공 알림창 표시
          showDeleteSuccessAlert();
        } else {
          alert('삭제 권한이 없습니다.');
        }
      } catch (error) {
        console.error('Error deleting challenge:', error);
      }
    }
  };
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
  }, [isDeleteSuccess]);

  // 삭제 성공 알림창
  const showDeleteSuccessAlert = () => {
    alert('챌린지가 삭제되었습니다.');
  };

  // 삭제 성공 상태가 true일 때 알림창
  useEffect(() => {
    if (isDeleteSuccess) {
      showDeleteSuccessAlert();
    }
  }, [isDeleteSuccess]);

  return (
    <S.StatusWrap>
      {challengeData.map((challenge, index) => (
        <S.InfoWrap key={index}>
          <S.StyledImg />
          <S.InfoFlex>
            <div>
              <S.TagEdit>
                {/* <Link to={`${ROUTE.EDITPAGE.link}/${challenge.id}`}>
                    <a>수정</a>
                  </Link> */}
                <a onClick={() => handleDeleteChallenge(challenge.id)}>삭제</a>
              </S.TagEdit>
              <h3>{challenge.title}</h3>
              <h4>
                {challenge.start_date} ~ {challenge.end_date}
              </h4>
            </div>
          </S.InfoFlex>
        </S.InfoWrap>
      ))}
    </S.StatusWrap>
  );
};

export default CompleteInfo;
