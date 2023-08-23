import React from 'react';
import * as S from './heart.style';
import HeartImg from '../../../assets/image/heart_red.png';
import EmptyHeartImg from '../../../assets/image/heart.png';

interface HeartButtonProps {
  like: boolean;
  onClick: () => void;
}

const HeartButton: React.FC<HeartButtonProps> = ({ like, onClick }) => {
  return (
    <S.Heart
      src={like ? HeartImg : EmptyHeartImg}
      alt={like ? 'Liked' : 'Not Liked'}
      onClick={onClick}
    />
  );
};

export default HeartButton;
