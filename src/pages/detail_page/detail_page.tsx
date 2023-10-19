import React from 'react';
import * as S from './detail_page.style';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import Wrapper from '../../components/common/wrapper/wrapper';
import DetailContent from '../../components/challenge/detail_content/detail_content';
import DetailNav from '../../components/challenge/detail_nav/detail_nav';

const DetailPage = () => {
  const isMobileView = window.innerWidth <= 420;

  return (
    <>
      <Header />
      <S.PageBack>
        <Wrapper>
          <S.Detail>
            <DetailContent></DetailContent>
            {isMobileView ? null : <DetailNav></DetailNav>}{' '}
          </S.Detail>
        </Wrapper>
      </S.PageBack>
      <Footer />
    </>
  );  
};

export default DetailPage;
