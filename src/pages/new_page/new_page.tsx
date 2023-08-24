import React from 'react';
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
  return (
    <>
      <Header />
      <S.PageBack>
        <Wrapper>
          <NoticeForm />
          <FormInfo />
          <FormAgreeBox />
          <FormButton>
            <FormCancelButton>취소하기</FormCancelButton>
            <FormSubmitButton>챌린지 개설하기</FormSubmitButton>
          </FormButton>
        </Wrapper>
      </S.PageBack>
      <Footer />
    </>
  );
};

export default NewPage;
