import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './complete_info.style';
import { apiInstance } from '../../../utils/api';
import ModalBasic from '../../comment/comment_write/comment_write';

interface Challenge {
  description: string;
  img: string;
  userName: string;
  postDate: string;
}
interface ModalBasicProps {
  setModalOpen: (open: boolean) => void;
  star: number;
  description: string;
  onSubmit: (star: number, description: string) => void; // onSubmit을 추가
}

const CompleteInfo = () => {
  const [userId, setUserId] = useState<string>('');
  const [challengeList, setChallengeList] = useState<Challenge[]>([]);
  const [challengeData, setChallengeData] = useState<Challenge | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [star, setStar] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(
    null
  );
  const { id } = useParams();

  const handleChallengeClick = (challenge: Challenge) => {
    setChallengeData(challenge);
    setSelectedChallenge(challenge);
    setModalOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiInstance.get(`/challenges/${id}`);
        const data = response.data;

        if (data.length > 0) {
          const challenges = data.map((challenge: any) => ({
            id: challenge._id,
          }));

          setChallengeList(challenges);
        }
      } catch (error) {
        console.error('데이터 불러오기 오류:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleChallengeSubmit = async (star: number, description: string) => {
    try {
      const score = star;
      const response = await apiInstance.post(`/review/${id}`, {
        star: score,
        description: description,
      });
      const data = response.data;

      if (response) {
        alert('리뷰가 성공적으로 등록되었습니다!');
      } else {
        console.error('리뷰 전송 중 오류가 발생했습니다.');
        // 오류 처리 코드 추가
      }
    } catch (error) {
      console.error('오류 발생:', error);
      // 오류 처리 코드 추가
    }
  };

  return (
    <S.StatusWrap>
      <S.InfoWrap>
        <S.StyledImg />
        <S.InfoFlex>
          <div>
            <h3>물 마시기</h3>
            <h4>2023.08.01 ~ 2023.08.31</h4>
          </div>
          <S.PercentWrap>
            <p>달성률</p>
            <h5>
              100<span>%</span>
            </h5>
          </S.PercentWrap>
        </S.InfoFlex>
        <S.ButtonAuth onClick={() => handleChallengeClick(selectedChallenge!)}>
          후기 작성하기
        </S.ButtonAuth>
        {modalOpen && (
          <ModalBasic
            setModalOpen={setModalOpen}
            star={star}
            description={description}
            onSubmit={handleChallengeSubmit}
          />
        )}
      </S.InfoWrap>
    </S.StatusWrap>
  );
};

export default CompleteInfo;
