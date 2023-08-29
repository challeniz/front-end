// HeartButton 컴포넌트

import React from 'react';
import * as S from './heart.style';
import HeartImg from '../../../assets/image/heart_red.png';
import EmptyHeartImg from '../../../assets/image/heart.png';

interface HeartButtonProps {
  like: boolean;
  onClick: () => void;
}

const HeartButton: React.FC<HeartButtonProps> = ({ like, onClick }) => {
  const imgSrc = like ? HeartImg : EmptyHeartImg;
  const imgAlt = like ? 'Liked' : 'Not Liked';

  return <S.Heart src={imgSrc} alt={imgAlt} onClick={onClick} />;
};

export default HeartButton;
