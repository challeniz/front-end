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

const CompleteInfo = () => {
  const [userId, setUserId] = useState<string>('');
  const [challengeList, setChallengeList] = useState<Challenge[]>([]);
  const [challengeData, setChallengeData] = useState<Challenge | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(
    null
  );
  const { id } = useParams();

  const handleChallengeClick = (challenge: Challenge) => {
    // const postDate = new Date(challenge.postDate);
    // const formattedDate = `${postDate.getFullYear()}년 ${
    //   postDate.getMonth() + 1
    // }월 ${postDate.getDate()}일`;
    // challenge.postDate = formattedDate;
    setChallengeData(challenge);
    setSelectedChallenge(challenge);
    setModalOpen(true);
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
        {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
      </S.InfoWrap>
    </S.StatusWrap>
  );
};

export default CompleteInfo;
