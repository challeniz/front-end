import React, { useState } from 'react';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import * as S from './list_page.style';
import ListContent from '../../components/challenge/list_content/list_content';
import Wrapper from '../../components/common/wrapper/wrapper';

const ListPage = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <>
      <Header />
      <Wrapper>
        <ListContent />
      </Wrapper>
      <Footer />
    </>
  );
};

export default ListPage;
