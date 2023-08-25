import React, { useState } from 'react';
import * as S from './new_page.style';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import Wrapper from '../../components/common/wrapper/wrapper';
import NoticeForm from '../../components/form/form_notice/from_notice';

import FormInfo from '../../components/form/form_info/form_info';

const NewPage = () => {
  const [isAgreed, setIsAgreed] = useState(false);

  return (
    <>
      <Header />
      <S.PageBack>
        <Wrapper>
          <NoticeForm />
          <FormInfo />
        </Wrapper>
      </S.PageBack>
      <Footer />
    </>
  );
};

export default NewPage;
