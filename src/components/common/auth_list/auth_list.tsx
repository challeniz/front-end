import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './auth_list.style';
import ModalBasic from '../modal/modal';
import { apiInstance } from '../../../utils/api';

interface AuthListProps {}

interface Challenge {
  description: string;
  img: string;
  userName: string;
  postDate: string;
  title: string;
}

const AuthList: React.FC<AuthListProps> = () => {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  const { id } = useParams();

  // challengeList 상태를 이곳으로 이동
  const [challengeList, setChallengeList] = useState<Challenge[]>([]);
  const [challengeData, setChallengeData] = useState<Challenge | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiInstance.get(`/posts/challenges/${id}`);
        const data = response.data;

        if (data.length > 0) {
          const challenges = data.map((challenge: any) => ({
            userName: challenge.user.name,
            img: challenge.img,
            description: challenge.description,
            title: challenge.title,
            postDate: challenge.post_date,
          }));
          setChallengeList(challenges);
        }
      } catch (error) {
        console.error('데이터 가져오기 오류:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleChallengeClick = (challenge: Challenge) => {
    const postDate = new Date(challenge.postDate);
    const formattedDate = `${postDate.getFullYear()}년 ${
      postDate.getMonth() + 1
    }월 ${postDate.getUTCDate()}일`;
    challenge.postDate = formattedDate;
    setChallengeData(challenge);
    showModal();
  };

  return (
    <>
      <S.AuthWrap>
        <S.AuthGrid>
          {challengeList.map((challenge, index) => (
            <S.ImgWrap
              key={index}
              onClick={() => handleChallengeClick(challenge)}
            >
              <img src={challenge.img} alt="Challenge Image" />
            </S.ImgWrap>
          ))}
          {modalOpen && challengeData && (
            <ModalBasic
              setModalOpen={setModalOpen}
              challengeData={challengeData}
              postDate={challengeData.postDate}
              userName={challengeData.userName}
            />
          )}
        </S.AuthGrid>
      </S.AuthWrap>
    </>
  );
};

export default AuthList;
