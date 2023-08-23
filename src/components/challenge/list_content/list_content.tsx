import React, { useState } from 'react';
import * as S from './list_content.style';
import HeartButton from '../heart/heart';
import { BsCalendarRange } from 'react-icons/bs';

interface ListContentProps {
  challenge: {
    title: string;
    startdate: string;
    enddate: string;
    img: string;
    coment: string;
    tag: string;
  };
}

const ListContent: React.FC<ListContentProps> = ({ challenge }) => {
  const [like, setLike] = useState(false);

  const toggleLike = async () => {
    try {
      // 좋아요 관련 처리를 진행
      setLike(!like);
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  return (
    <S.ContentWrap>
      <S.ImgStyled>
        <img src={challenge.img} alt={`Challenge`} />
        <S.StyledHeartButton like={like} onClick={toggleLike} />
      </S.ImgStyled>
      <S.TabWrap>
        {challenge.tag.split(',').map((tag, index) => (
          <S.TabStyled key={index}>{tag}</S.TabStyled>
        ))}
      </S.TabWrap>
      <S.H3Styled>{challenge.title}</S.H3Styled>
      <S.H4Styled>
        <BsCalendarRange />
        {challenge.startdate} ~ {challenge.enddate}
      </S.H4Styled>
    </S.ContentWrap>
  );
};

export default ListContent;
