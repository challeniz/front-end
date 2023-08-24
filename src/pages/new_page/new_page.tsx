import React, { useState } from 'react';
import * as S from './new_page.style';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import Wrapper from '../../components/common/wrapper/wrapper';
import NoticeForm from '../../components/form/form_notice/from_notice';
import {
  FormButton,
  FormCancelButton,
  FormSubmitButton,
} from '../../components/form/form_button/form_button';
import FormAgreeBox from '../../components/form/form_agree/form_agree';
import FormInfo from '../../components/form/form_info/form_info';

const NewPage = () => {
  const [isAgreed, setIsAgreed] = useState(false);

  const handleChallengeSubmit = () => {
    if (isAgreed) {
      // 챌린지 개설 로직 실행
      alert('챌린지가 성공적으로 개설되었습니다!');
    } else {
      alert('챌린지를 개설하려면 약관에 동의해야 합니다.');
    }
  };

  return (
    <>
      <Header />
      <S.PageBack>
        <Wrapper>
          <NoticeForm />
          <FormInfo />
          <FormAgreeBox onAgreeChange={setIsAgreed} />
          <FormButton>
            <FormCancelButton>취소하기</FormCancelButton>
            <FormSubmitButton onClick={handleChallengeSubmit}>
              챌린지 개설하기
            </FormSubmitButton>
          </FormButton>
        </Wrapper>
      </S.PageBack>
      <Footer />
    </>
  );
};

export default NewPage;
