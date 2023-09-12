import React from 'react';
import * as S from './challenge_slide.style'
interface ChallengeSlideProps {
    challenge: {
      mainImg: string;
      // 다른 챌린지 속성들도 필요한 경우 여기에 추가
    };
  }
  
  const ChallengeSlide: React.FC<ChallengeSlideProps> = ({ challenge }) => {
    return (
      <S.ContentWrap>
        <S.ImgStyled>
          <img src={challenge.mainImg} alt="Challenge" />
          {/* 좋아요 버튼과 관련된 코드 */}
        </S.ImgStyled>
        {/* 나머지 챌린지 정보 요소들 */}
      </S.ContentWrap>
    );
  };
  
  export default ChallengeSlide;