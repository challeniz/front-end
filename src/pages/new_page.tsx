import React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/common/wrapper';
import WhiteBox from '../components/form/white_box';
import WhiteBoxTitle from '../components/form/white_box_title';
import WhiteBoxContents from '../components/form/white_box_contents';
import { FormButton, FormCancelButton, FormSubmitButton } from '../components/form/form_button';
import FormAgreeBox from '../components/form/form_agree';
import ReactDatePicker from '../components/calendar/calendar';

const InputContent = styled.div`
  display:flex;
  margin-bottom:25px;
  align-items:center;
`

const LabelStyled = styled.label`
font-size:18px;
width:88px;
margin-right:75px;
`;

const InputStyled = styled.input`
  width:406px;
  height:45px;
  background-color:#f6f6f6;
  border-radius:5px;
  border:1px solid #cfcfcf;
  font-size:18px;
  padding: 0 15px;
`

const SelectStyled = styled.select`
  width:406px;
  height:45px;
  background-color:#f6f6f6;
  border-radius:5px;
  border:1px solid #cfcfcf;
  font-size:18px;
  padding: 0 15px;
`

const NewPage = () => {
  return (
    <Wrapper>
      <WhiteBox>
        <WhiteBoxTitle>챌린지 개설</WhiteBoxTitle>
        <WhiteBoxContents>
          <div>
            <InputContent>
              <LabelStyled htmlFor="formName">주제</LabelStyled>
              <InputStyled type="text" id="formName" />
            </InputContent>
            <InputContent>
              <LabelStyled htmlFor="formCate">카테고리</LabelStyled>
              <SelectStyled id="formCate">
                <option value="운동">운동</option>
                <option value="습관">습관</option>
                <option value="취미">취미</option>
                <option value="공부">공부</option>
              </SelectStyled>
            </InputContent>
            <InputContent>
              <LabelStyled htmlFor="formDage">챌린지 기간</LabelStyled>
              <ReactDatePicker></ReactDatePicker>
            </InputContent>
          </div>
        </WhiteBoxContents>
      </WhiteBox>
      <WhiteBox>
        <WhiteBoxTitle>약관 동의</WhiteBoxTitle>
        <WhiteBoxContents>
           <FormAgreeBox>
           </FormAgreeBox>
        </WhiteBoxContents>
      </WhiteBox>
      <FormButton>
        <FormCancelButton>취소하기</FormCancelButton>
        <FormSubmitButton>챌린지 개설하기</FormSubmitButton>
      </FormButton>
    </Wrapper>
  )
};

export default NewPage;