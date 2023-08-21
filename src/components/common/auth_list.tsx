import React, { useState } from 'react';
import styled from 'styled-components';

const AuthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 50px;
`;

const ImgWrap = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  height: 310px;
`;

const AuthList = () => {
  return (
    <AuthGrid>
      <ImgWrap></ImgWrap>
      <ImgWrap></ImgWrap>
      <ImgWrap></ImgWrap>
      <ImgWrap></ImgWrap>
      <ImgWrap></ImgWrap>
      <ImgWrap></ImgWrap>
      <ImgWrap></ImgWrap>
    </AuthGrid>
  );
};

export default AuthList;
