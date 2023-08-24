import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import Wrapper from '../components/common/wrapper';
import { MyPageTab } from '../components/mypage/mypage_tab';
import 'react-calendar/dist/Calendar.css';
import MyInfo from '../components/mypage/mypage_info';

const StyleWrapper = styled.div`
  h1 {
    font-size: 38px;
    padding-bottom: 30px;
  }
`;

const MyPage = () => {
  const [value, setValue] = useState(new Date());
  return (
    <>
      <Header />
      <Wrapper>
        <StyleWrapper>
          <h1>마이 페이지</h1>
          <MyInfo />
          <MyPageTab></MyPageTab>
        </StyleWrapper>
      </Wrapper>
      <Footer />
    </>
  );
};

export default MyPage;
