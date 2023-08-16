import React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/common/wrapper';
import { Tab } from '../components/challenge/tab_menu';

const H2 = styled.h2`
  font-size:35px;
  font-weight:700;
  padding-bottom:45px;
`

const ListPage = () => {
  return (
    <Wrapper>
      <H2>전체보기</H2>
      <Tab></Tab>
    
    </Wrapper>
  )
};

export default ListPage;