import React from 'react';
import * as S from './edit_page.style';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import Wrapper from '../../components/common/wrapper/wrapper';
import FormEdit from '../../components/form/form_edit/form_edit';
import {
  FormButton,
  FormCancelButton,
  FormSubmitButton,
} from '../../components/form/form_button/form_button';
import FormInfo from '../../components/form/form_info/form_info';

const EditPage = () => {
  return (
    <>
      <Header />
      <S.PageBack>
        <Wrapper>
          <FormEdit />
          <FormButton>
            <FormCancelButton>취소하기</FormCancelButton>
            <FormSubmitButton>챌린지 수정하기</FormSubmitButton>
          </FormButton>
        </Wrapper>
      </S.PageBack>
      <Footer />
    </>
  );
};

export default EditPage;
