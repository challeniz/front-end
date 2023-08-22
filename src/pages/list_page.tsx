import React, { useState } from 'react';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import styled from 'styled-components';

import Wrapper from '../components/common/wrapper';
import { Tab } from '../components/challenge/tab_menu';

const H2 = styled.h2`
  font-size: 35px;
  font-weight: 700;
  padding-bottom: 45px;
`;

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
        <H2>{menuArr[currentTab].name}</H2>
        <Tab currentTab={currentTab} />
      </Wrapper>
      <Footer />
    </>
  );
};

export default ListPage;
