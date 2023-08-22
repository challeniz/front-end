import React, { useState } from 'react';
import styled from 'styled-components';
import Wrapper from '../components/common/wrapper';
import WhiteBox from '../components/form/white_box';
import WhiteBoxTitle from '../components/form/white_box_title';
import WhiteBoxContents from '../components/form/white_box_contents';
import { ROUTE } from "../routes";

import { Link} from "react-router-dom";



const TextInput = styled.textarea`
  width: 620px;
  height:377px;
  background-color:#f1f1f1;
  border:1px solid #339af0;
  border-radius:10px;
  padding:20px;
  font-size:18px;
`

const AuthWrapper = styled.div`
  display:flex;
  justify-content:space-between;

  input {
    width:620px;
    height:377px;
    background-color:#d9d9d9;
    border:none;
  }
`
const H2Styled = styled.div`
  font-size:30px;
  font-weight:700;
  padding:0 0 38px;
`
const FormCancelButton = styled.button`
  cursor:pointer;
  width:620px;
  padding:30px 0;
  text-align:center;
  border:1px solid #a9a9a9;
  border-radius:10px;
  background-color:#fff;
  font-size:20px;
  font-weight:500;
`
const FormSubmitButton = styled.button`
  cursor:pointer;
  width:620px;
  padding:30px 0;
  text-align:center;
  border:1px solid #339af0;
  border-radius:10px;
  background-color:#339af0;
  color:#fff;
  font-size:20px;
  font-weight:600;
`
const FormButton = styled.div`
  display:flex;
  justify-content:space-between;
  margin-top:38px;
`

const AuthPage: React.FC = () => {

  const [text, setText] = useState('');

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    
    if (inputValue.length <= 70) {
      setText(inputValue);
    }
  };

  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}.${currentDate.getMonth() + 1}.${currentDate.getDate()}`;

  // HTMLInputElement

  const handleCancelClick = () => {
    if (window.confirm("정말 취소하겠습니까?")) {
      setText(""); // 입력한 내용을 삭제
    }
  };

  return (
    <Wrapper>
      <WhiteBox>
        <WhiteBoxTitle>챌린지 인증</WhiteBoxTitle>
        <WhiteBoxContents>
          <H2Styled>{formattedDate}</H2Styled>
          <AuthWrapper>
            <input type="file" />
            <TextInput
            placeholder="70자 이내로 입력해주세요."
            value={text}
            onChange={handleTextChange}></TextInput>
          </AuthWrapper>
          <FormButton>
            <FormCancelButton onClick={handleCancelClick}><Link to={ROUTE.DETAIL_PAGE.link}>취소하기</Link></FormCancelButton>
            <FormCancelButton><Link to={ROUTE.DETAIL_PAGE.link}>등록하기</Link></FormCancelButton>
          </FormButton>
        </WhiteBoxContents>
      </WhiteBox>
    </Wrapper>
  )
};

export default AuthPage;