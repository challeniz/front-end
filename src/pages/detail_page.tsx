import React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/common/wrapper';
import DetailContent from '../components/challenge/detail_content';
import DetailNav from '../components/challenge/detail_nav';

const Detail = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
`

const DetailPage = () => {
  return (
    <Wrapper>
      <Detail>
        <DetailContent></DetailContent>
        <DetailNav></DetailNav>
      </Detail>
    </Wrapper>
  )
};

export default DetailPage;