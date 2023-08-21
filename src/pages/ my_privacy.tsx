import React from 'react';
import styled from 'styled-components';
import Wrapper from '../components/common/wrapper';

const MyPrivacy = () => {
  return (
    <div>
      <Wrapper>
        <StyleH1>마이 페이지</StyleH1>

        <PageBox>
          <PageImg></PageImg>
          <PageTxt>
            <ul>
              <li>김챌린지님</li>
              <li>
                현재등급은 <span>신입챌리니즈</span>입니다.
              </li>
            </ul>
          </PageTxt>

          <PageBtn>내 정보 수정하기</PageBtn>
        </PageBox>

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
    </div>
  );
};

const PageBox = styled.div`
  position: relative;
  width: 1400px;
  height: 299px;
  border-radius: 10px;
  background-color: #d3d3d3;
  display: flex;
  top: 5rem;
`;

const PageImg = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: #b0b4b6;
  width: 226px;
  height: 226px;
  left: 50px;
  top: 40px;
`;

const StyleH1 = styled.h1`
  font-weight: 800;
  font-size: 48px;
`;
const PageTxt = styled.div`
  display: flex;
  position: absolute;
  left: 22rem;
  top: 7rem;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  li:nth-child(1) {
    margin-bottom: 16px;
    font-weight: bold;
    font-size: 40px;
    letter-spacing: 5px;
  }

  li:nth-child(2) {
    font-size: 30px;
    letter-spacing: 2px;
  }
  span {
    font-size: 30px;
    font-weight: 700;
  }
`;

const PageBtn = styled.button`
  width: 295px;
  height: 69px;
  border-radius: 20px;
  background-color: #339af0;
  color: #fff;
  font-size: 23px;
  font-weight: 600;
  position: relative;
  left: 60rem;
  top: 7rem;
  cursor: pointer;
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
