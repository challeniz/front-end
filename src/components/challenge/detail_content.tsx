import React from 'react';
import styled from 'styled-components';
import { Tab } from './detail_tab';

const DetailContents = styled.div`
  width:67%;
  height:3000px;
`

const H2Styled = styled.h2`
  font-size:35px;
  padding-bottom:12px;
  font-weight:700;
`
const H4Styled = styled.h4`
  font-size:15px;
  font-weight:500;
  padding-bottom:25px;
`

const ImgStyled = styled.div`
  width:100%;
  height:450px;
  background-color: #d9d9d9;
  border-radius:25px;
  margin-bottom:55px;
`

const DetailContent = () => {
  return(
    <DetailContents>
      <H2Styled>만보 걷기 챌린지</H2Styled>
      <H4Styled>2023.08.01 ~ 2023.08.31</ H4Styled>
      <ImgStyled></ImgStyled>
      <Tab></Tab>
    </DetailContents>
  )
};

export default DetailContent;