import React, { useState } from 'react';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import * as S from './list_page.style';

import Wrapper from '../../components/common/wrapper/wrapper';
import { Tab } from '../../components/challenge/tab_menu/tab_menu';

const ListPage = () => {
  const menuArr = [
    { name: '전체', content: '전체' },
    { name: '건강', content: '건강' },
    { name: '취미', content: '취미' },
    { name: '식습관', content: '식습관' },
    { name: '공부', content: '공부' },
    { name: '환경', content: '환경' },
  ];

  const [currentTab, setCurrentTab] = useState(0);

  console.log('menuArr:', menuArr);
  console.log('currentTab:', currentTab);

  return (
    <>
      <Header />
      <Wrapper>
        <S.H2>{menuArr[currentTab].name}</S.H2>
        <Tab currentTab={currentTab} />
      </Wrapper>
      <Footer />
    </>
  );
};

export default ListPage;
