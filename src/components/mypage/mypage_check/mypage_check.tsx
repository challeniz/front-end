import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiInstance } from '../../../utils/api';
import ModalBasic from '../../common/modal/modal';
import * as S from './mypage_check.style';

interface MypageCheckProps {}

interface Challenge {
  description: string;
  img: string;
  userName: string;
  postDate: string;
  id: string;
}

const MypageCheck: React.FC<MypageCheckProps> = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [challengeList, setChallengeList] = useState<Challenge[]>([]);
  const [challengeData, setChallengeData] = useState<Challenge | null>(null);
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState({
    id: '',
  });
  const [isParticipated, setIsParticipated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('token', token);
        const response = await apiInstance.get('/posts');
        const data = response.data;

        if (data) {
          const challenges: Challenge[] = data.map((challenge: any) => ({
            userName: challenge.user.name,
            img: challenge.img,
            description: challenge.description,
            title: challenge.title,
            postDate: challenge.post_date,
            id: challenge._id,
          }));

          console.log('인증목록', challenges);
          setChallengeList(challenges);

          if (token) {
            setUserInfo({
              id: String(token),
            }); console.log('User Info:', userInfo);

            const hasParticipated = challenges.some(
              (challenge) => challenge.id === String(token)
            ); console.log('Has Participated:', hasParticipated);
            setIsParticipated(hasParticipated);
          }
        }
      } catch (error) {
        console.error('데이터 가져오기 오류:', error);
      }
    };

    fetchData();
  }, []);

  const handleChallengeClick = (challenge: Challenge) => {
    const postDate = new Date(challenge.postDate);
    const formattedDate = `${postDate.getFullYear()}년 ${
      postDate.getMonth() + 1
    }월 ${postDate.getDate()}일`;
    challenge.postDate = formattedDate;
    setChallengeData(challenge);
    showModal();
  };

  const showModal = () => {
    setModalOpen(true);
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

export default MypageCheck;
