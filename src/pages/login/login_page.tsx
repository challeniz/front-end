import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../components/common/wrapper';

const Memvership = styled.div`
  font-size: 40px;
  font-weight: bold;
`
const SocialStart = styled.p`
  font-size: 18px;
  margin-top: 20px;
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin-top: 50px;
`

const KakaoImage = styled.img`
  margin-top: 20px;
  
`

const LoginPage = () => {
  return (
    <Wrapper>
      <Memvership>회원가입하기</Memvership>
      <SocialStart>소셜 로그인으로 시작 및 가입할 수 있습니다.</SocialStart>
      <Divider></Divider>
      <KakaoImage src={require('../../assets/icon/kakao_login_large_narrow.png')} alt="카카오로 시작하기"></KakaoImage>
    </Wrapper>
  )
};

export default LoginPage;