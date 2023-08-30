import React, { useState } from 'react';
import * as S from './auth_page.style';
import { ROUTE } from '../../routes';
import Footer from '../../components/common/footer/footer';
import Wrapper from '../../components/common/wrapper/wrapper';
import WhiteBox from '../../components/form/white_box/white_box/white_box';
import WhiteBoxTitle from '../../components/form/white_box/white_box_title/white_box_title';
import WhiteBoxContents from '../../components/form/white_box/white_box_contents/white_box_contents';

import { useNavigate, Link } from 'react-router-dom';

const AuthPage: React.FC = () => {
  const [text, setText] = useState('');

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;

    if (inputValue.length <= 70) {
      setText(inputValue);
    }
  };

  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}.${
    currentDate.getMonth() + 1
  }.${currentDate.getDate()}`;

  // HTMLInputElement

  const handleCancelClick = () => {
    if (window.confirm('정말 취소하겠습니까?')) {
      setText(''); // 입력한 내용을 삭제
    }
  };

  return (
    <>
 
      <Wrapper>
        <WhiteBox>
          <WhiteBoxTitle>챌린지 인증</WhiteBoxTitle>
          <WhiteBoxContents>
            <S.H2Styled>{formattedDate}</S.H2Styled>
            <S.AuthWrapper>
              <input type="file" />
              <S.TextInput
                placeholder="70자 이내로 입력해주세요."
                value={text}
                onChange={handleTextChange}
              ></S.TextInput>
            </S.AuthWrapper>
            <S.FormButton>
              <S.FormCancelButton onClick={handleCancelClick}>
                <Link to={ROUTE.DETAILPAGE.link}>취소하기</Link>
              </S.FormCancelButton>
              <S.FormCancelButton>
                <Link to={ROUTE.DETAILPAGE.link}>등록하기</Link>
              </S.FormCancelButton>
            </S.FormButton>
          </WhiteBoxContents>
        </WhiteBox>
      </Wrapper>
  
    </>
  );
};

export default AuthPage;
