// list_content.tsx
import React, { useState, useEffect } from 'react';
import * as S from './challenge_box_main.style';
import { BsCalendarRange } from 'react-icons/bs';
import { apiInstance } from '../../../utils/api';
import { ROUTE } from '../../../routes';
import { Link } from 'react-router-dom';
import ListTab from '../list_tab/list_tab';

// 예시로 Challenge 타입을 정의
export interface Challenge {
  like: boolean;
  title: string;
  start_date: string;
  end_date: string;
  tag: string[];
  id: string;
  category: string;
}

export interface ChallengeBoxProps {
  selectedCategory: string;
  handleCategoryClick: (category: string) => void;
  challenges?: Challenge[];
}

const ChallengeBox: React.FC<ChallengeBoxProps> = ({
  selectedCategory,
  handleCategoryClick,
  challenges,
}) => {
  return (
    <S.ListWrap>
      <S.ContentsWrap>
        {challenges &&
          challenges.map((challenge, index) => (
            <S.ContentWrap key={index}>
              <S.ImgStyled>
                <img src="" alt={`Challenge`} />
                <S.StyledHeartButton like={challenge.like} onClick={() => {}} />
              </S.ImgStyled>
              <S.TabWrap>
                {challenge.tag.map((tag, index) => (
                  <S.TabStyled key={index}>{tag}</S.TabStyled>
                ))}
              </S.TabWrap>
              <Link to={`${ROUTE.DETAILPAGE.link}/${challenge.id}`}>
                <S.H3Styled>{challenge.title}</S.H3Styled>
              </Link>
              <S.H4Styled>
                <BsCalendarRange />
                {challenge.start_date} ~ {challenge.end_date}
              </S.H4Styled>
            </S.ContentWrap>
          ))}
      </S.ContentsWrap>
    </S.ListWrap>
  );
};

export default ChallengeBox;
