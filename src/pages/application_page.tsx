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
import { CiShare2, CiHeart, CiCalendarDate, CiUser } from "react-icons/ci";// 아이콘 이름 수정

const InputContent = styled.div`
  display:flex;
  margin-bottom:25px;
  align-items:center;
  &.flex-start {
    align-items:flex-start;
  }
`
const LabelStyled = styled.label`
font-size:18px;
width:160px;
`;

const InputStyled = styled.input`
  width:406px;
  height:45px;
  background-color:#f6f6f6;
  border-radius:5px;
  border:1px solid #cfcfcf;
  font-size:16px;
  padding: 0 15px;

  &:focus {
    outline:none;
  }
`

const ImgWrap = styled.div`
  width: 454px;
  height:270px;
  background-color:#d9d9d9;
  margin-right:60px;
  border-right:1px solid #d9d9d9;
`

const ContentWrap = styled.div`
  display:flex;
`
const TextWrap = styled.div`
  display:flex;
  flex-direction: column;
  width:60%;

  h5{
    font-size:15px;
    font-weight:400;
    padding-bottom:15px;
    display:flex;
    align-items:center;
  }
  h2 {
    font-size: 35px;
    font-weight: 700;
    padding-bottom:15px;
  }
  h4 {
    color:#5e5e5e;
    font-size:16px;
    font-weight:400;
    line-height:23px;
  }
  h6 {
    margin-top:auto;
    font-weight:400;
    display:flex;
    align-items:center;
  }
`

const StyledCiUser = styled(CiUser)`
  padding-right: 5px;
  width:1.8em;
  height:1.8em;
`;

const StyledCiCalendar = styled(CiCalendarDate)`
  padding-right: 5px;
  width:1.8em;
  height:1.8em;
`;

const ApplicationPage = () => {
  return (
    <Wrapper>
      <div>
        <WhiteBox>
          <WhiteBoxContents>
            <ContentWrap>
              <ImgWrap>
              </ImgWrap>
              <TextWrap>
                <h5><StyledCiUser />현재 18명 참여 중</h5>
                <h2>만보 걷기 챌린지</h2>
                <h4>챌린지 설명 챌린지 설명 챌린지 설명 챌린지 설명 챌린지 설명 챌린지 설명 챌린지 설명 챌린지 설명 
                  챌린지 설명 챌린지 설명 챌린지 설명 챌린지 설명 챌린지 설명 챌린지 설명 </h4>
                <h6><StyledCiCalendar />2023.08.01 ~ 2023.08.31</h6>
              </TextWrap>
            </ContentWrap>
          </WhiteBoxContents>
        </WhiteBox>
      </div>
      <div>
        <WhiteBox>
          <WhiteBoxTitle>참가자 정보</WhiteBoxTitle>
          <WhiteBoxContents>
          < div>
              <InputContent>
                <LabelStyled htmlFor="formName">이름</LabelStyled>
                <InputStyled type="text" value="엘리스" id="formName" readOnly/>
              </InputContent>
              <InputContent>
                <LabelStyled htmlFor="formTel">휴대폰번호</LabelStyled>
                <InputStyled type="text" value="010-0000-0000" id="formTel" readOnly/>
              </InputContent>
              <InputContent>
                <LabelStyled htmlFor="formMail">이메일</LabelStyled>
                <InputStyled type="text" value="elice@elice.com" id="formMail" readOnly/>
              </InputContent>
            </div>
          </WhiteBoxContents>
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
