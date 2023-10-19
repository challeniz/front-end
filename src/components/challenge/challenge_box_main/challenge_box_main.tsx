import React, { useState } from 'react';
import * as S from './challenge_box_main.style';
import { BsCalendarRange } from 'react-icons/bs';
import { apiInstance } from '../../../utils/api';
import { ROUTE } from '../../../routes';
import { Link } from 'react-router-dom';
import moment from 'moment';
import EmptyHeartImg from '../../../assets/image/heart.png';
import HeartImg from '../../../assets/image/heart_red.png';

// 예시로 Challenge 타입을 정의
export interface Challenge {
  _id: string;
  like: boolean;
  title: string;
  start_date: string;
  end_date: string;
  tag: string[];
  id: string;
  category: string;
  mainImg: string;
}
interface modules {
  onClick: () => void;
}
export interface ChallengeBoxProps {
  selectedCategory: string;
  handleCategoryClick: (category: string) => void;
  challenge: Challenge; // 단일 Challenge을 받도록 수정
}

const ChallengeBox: React.FC<ChallengeBoxProps> = ({
  selectedCategory,
  handleCategoryClick,
  challenge,
}) => {
  const [wishCount, setWishCount] = useState(808);
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);

  const wishCountHandler = async (challengeId: string) => {
    const newLikeValue = !challenge.like;
    try {
      if (newLikeValue) {
        await apiInstance.patch(`/challenges/zzim/${challengeId}`);
      } else {
        await apiInstance.patch(`/challenges/zzim/${challengeId}`);
      }
      console.log(newLikeValue);
    } catch (error) {
      console.error(`Error updating challenge like status:`, error);
    }
    setWishCount((prevCount) => prevCount + 1);
  };

  return (
    <S.ContentWrap>
      <S.ImgStyled>
        <img src={challenge.mainImg} alt="Challenge" />
        <S.StyledHeartButton
          src={challenge.like ? HeartImg : EmptyHeartImg}
          alt={challenge.like ? 'Liked' : 'Not Liked'}
          onClick={() => wishCountHandler(challenge.id)}
        />
      </S.ImgStyled>
      <S.TabWrap>
        {challenge.tag.map((tag, index) => (
          <S.TabStyled key={index}>{tag}</S.TabStyled>
        ))}
      </S.TabWrap>
      <Link to={`${ROUTE.DETAILPAGE.link}/${challenge._id}`}>
        <S.H3Styled>{challenge.title}</S.H3Styled>
      </Link>
      <S.H4Styled>
        <BsCalendarRange />
        {moment(challenge.start_date).format('YYYY년 MM월 DD일')} ~{' '}
        {moment(challenge.end_date).format('YYYY년 MM월 DD일')}
      </S.H4Styled>
    </S.ContentWrap>
  );
};

export default ChallengeBox;
