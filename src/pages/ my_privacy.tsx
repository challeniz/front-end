import React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/common/wrapper';
import Header from '../components/common/header';
import Footer from '../components/common/footer';

const MyPrivacy = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <StyleH1>마이 페이지</StyleH1>
        <MyInfo>
          <InfoTitle>
            <h3>내정보 수정</h3>
            <h4>회원탈퇴</h4>
          </InfoTitle>
          <InfoBox>
            <ul>
              <InfoTxt>
                이름 <span className="InfoSpan">김챌린지</span>
              </InfoTxt>
              <br />
              <InfoTxt>
                전화번호 <span className="InfoSpan">010-1234-5678</span>
              </InfoTxt>
              <br />
              <InfoTxt>
                이메일 <span className="InfoSpan">abcd123@gmail.com</span>
              </InfoTxt>
              <br />
              <InfoTxt>
                비밀번호 <span>비밀번호</span>
              </InfoTxt>
              <br />
              <InfoTxt>
                비밀번호 확인 <span>비밀번호 확인</span>
              </InfoTxt>
              <br />
            </ul>
          </InfoBox>
        </MyInfo>
      </Wrapper>
      <Footer />
    </>
  );
};

const StyleH1 = styled.h1`
  font-weight: 800;
  font-size: 48px;
`;

const MyInfo = styled.div`
  position: relative;
  top: 8rem;
`;

const InfoTitle = styled.div`
  display: flex;
  h3 {
    font-size: 24px;
  }
  h4 {
    font-size: 20px;
    font-weight: normal;
    border-bottom: 1px solid #000;
    float: right;
    right: 10px;
    position: absolute;
    cursor: pointer;
  }
`;

const InfoBox = styled.div`
  position: relative;
  top: 3rem;
`;

const InfoTxt = styled.li`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  span {
    display: block;
    font-weight: normal;
    margin-top: 44px;
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 8px;
  }
`;

export default MyPrivacy;
