import React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/common/wrapper';
import FormAgreeBox from '../components/form/form_agree';
import WhiteBox from '../components/form/white_box';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import WhiteBoxTitle from '../components/form/white_box_title';
import WhiteBoxContents from '../components/form/white_box_contents';
import { FormButton } from '../components/form/form_button';
import { FormCancelButton } from '../components/form/form_button';
import { FormSubmitButton } from '../components/form/form_button';

const ApplicationPage = () => {
  return (
    <Wrapper>
      <div>
        <WhiteBox>
          <WhiteBoxContents>ㅇ</WhiteBoxContents>
        </WhiteBox>
      </div>
      <div>
        <WhiteBox>
          <WhiteBoxTitle>참가자 정보</WhiteBoxTitle>
          <WhiteBoxContents>ㅇ</WhiteBoxContents>
        </WhiteBox>
      </div>
      <WhiteBox>
        <WhiteBoxTitle>약관 정보</WhiteBoxTitle>
        <WhiteBoxContents>
          <FormAgreeBox>약관</FormAgreeBox>
        </WhiteBoxContents>
      </WhiteBox>
      <FormButton>
        <FormCancelButton>취소하기</FormCancelButton>
        <FormSubmitButton>참가하기</FormSubmitButton>
      </FormButton>
    </Wrapper>
  );
};

export default ApplicationPage;
