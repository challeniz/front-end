import React, { useState, useEffect } from 'react';
import { apiInstance } from '../../../utils/api';
import ModalBasic from '../../common/modal/modal';
import * as S from './mypage_check.style';

interface MypageCheckProps {}

interface Challenge {
  description: string;
  img: string;
  name: string;
  postDate: string;
  id: string;
  title: string;
}

const MypageCheck: React.FC<MypageCheckProps> = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [challengeList, setChallengeList] = useState<Challenge[]>([]);
  const [challengeData, setChallengeData] = useState<Challenge | null>(null);
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

        if (data.length > 0) {
          const challenges = data.map((challenge: any) => ({
            name: challenge.posts.user ? challenge.posts.user.name : '',
            img: challenge.posts.img,
            description: challenge.posts.description,
            title: challenge.title,
            postDate: challenge.posts.post_date,
            id: challenge.posts._id,
          })); 
          console.log('인증목록', challenges);
          setChallengeList(challenges);  
        } 
      } catch (error) {
        console.error('데이터 가져오기 오류:', error);
      }
    };
    console.log(challengeData)
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
        {challengeData && <h1>{challengeData.title}</h1>}
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
              userName={challengeData.name}
            />
          )}
        </S.AuthGrid>
      </S.AuthWrap>
    </>
  );
};

export default MypageCheck;
