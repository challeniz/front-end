import React from 'react';
import styled from 'styled-components';
import HeartImg from '../../assets/image/heart_red.png';
import EmptyHeartImg from '../../assets/image/heart.png';

const Heart = styled.img`
  width: 30px !important;
  height: 30px !important;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
`;

interface HeartButtonProps {
  like: boolean;
  onClick: () => void;
}

const HeartButton: React.FC<HeartButtonProps> = ({ like, onClick }) => {
  return (
    <Heart
      src={like ? HeartImg : EmptyHeartImg}
      alt={like ? 'Liked' : 'Not Liked'}
      onClick={onClick}
    />
  );
};

export default HeartButton;
