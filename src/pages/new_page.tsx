import React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/common/wrapper';
import WhiteBox from '../components/white_box';
import WhiteBoxTitle from '../components/white_box_title';
import WhiteBoxContents from '../components/white_box_contents';



const NewPage = () => {
  return (
    <Wrapper>
      <WhiteBox>
        <WhiteBoxTitle>챌린지 개설</WhiteBoxTitle>
        <WhiteBoxContents>
          <div>내용내용</div>
        </WhiteBoxContents>
      </WhiteBox>
      <WhiteBox>
        <WhiteBoxTitle>약관 동의</WhiteBoxTitle>
        <WhiteBoxContents>
          <div>내용내용</div>
        </WhiteBoxContents>
      </WhiteBox>
    </Wrapper>
  )
};

export default NewPage;