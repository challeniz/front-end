import React from 'react';
import * as S from './detail_content.style';
import { Tab } from '../detail_tab/detail_tab';

const DetailContent = () => {
  return (
    <S.DetailContents>
      <S.ImgStyled></S.ImgStyled>
      <Tab></Tab>
    </S.DetailContents>
  );
};

export default DetailContent;
