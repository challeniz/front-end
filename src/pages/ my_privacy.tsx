import React from 'react';
import styled from 'styled-components';
import { ROUTE } from '../routes';
import { Link } from 'react-router-dom';
import Wrapper from '../components/common/wrapper';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import MyInfo from '../components/mypage/mypage_info';

const MyPrivacy = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <StyleH1>마이 페이지</StyleH1>
        <MyInfo />
        <div>
          <InfoTitle>
            <h3>내정보 수정</h3>
            <h4>회원탈퇴</h4>
          </InfoTitle>
          <InfoBox>
            <ul>
              <InfoTxt>
                <label htmlFor="labelName">닉네임</label>
                <input type="text" id="labelName" />
              </InfoTxt>
              <br />
              <InfoTxt>
                <label htmlFor="labelTel">전화번호</label>
                <input type="text" id="labelTel" />
              </InfoTxt>
              <br />
              <InfoTxt>
                <label htmlFor="labeMail">이메일</label>
                <input type="text" id="labelMail" readOnly />
              </InfoTxt>
              <br />
              <InfoTxt>
                <label htmlFor="labelPassword">비밀번호</label>
                <input type="password" id="labelPassword" />
              </InfoTxt>
              <br />
              <InfoTxt>
                <label htmlFor="labelPasswordConfirm">비밀번호 확인</label>
                <input type="password" id="labelPasswordConfirm" />
              </InfoTxt>
              <br />
            </ul>
          </InfoBox>
          <ButtonWrap>
            <Link to={ROUTE.MYPAGE.link}>
              <BackButton>뒤로가기</BackButton>
            </Link>
            <CorrectionButton>수정하기</CorrectionButton>
          </ButtonWrap>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

const StyleH1 = styled.h1`
  font-size: 38px;
  padding-bottom: 30px;
`;

const InfoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 60px;
  h3 {
    font-size: 30px;
    font-weight: 500;
  }
  h4 {
    font-size: 20px;
    font-weight: normal;
    border-bottom: 1px solid #000;
    cursor: pointer;
  }
`;

const InfoBox = styled.div``;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const CorrectionButton = styled.button`
  padding: 18px 52px;
  background-color: #339af0;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 10px;
  text-align: center;
`;

const BackButton = styled.button`
  padding: 18px 52px;
  background-color: #fff;
  color: #339af0;
  border: 1px solid #339af0;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 10px;
  text-align: center;
  margin-right: 15px;
`;

const InfoTxt = styled.li`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
  input {
    display: block;
    font-weight: normal;
    margin-top: 25px;
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 8px;
    border-right: none;
    border-top: none;
    border-left: none;
    font-size: 18px;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
`;

export default MyPrivacy;
