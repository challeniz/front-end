import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './my_page.style';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import Wrapper from '../../components/common/wrapper/wrapper';
import { MyPageTab } from '../../components/mypage/mypage_tab/mypage_tab';
import 'react-calendar/dist/Calendar.css';
import MyInfo from '../../components/mypage/mypage_info/mypage_info';

const MyPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = 'token';
    const user = localStorage.getItem(token);
    if (!user) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <Header />
      <Wrapper>
        <S.StyleWrapper>
          <h1>마이 페이지</h1>
          <MyInfo />
          <MyPageTab></MyPageTab>
        </S.StyleWrapper>
      </Wrapper>
      <Footer />
    </>
  );
};

export default MyPage;
