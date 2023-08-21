import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Wrapper from '../components/common/wrapper';
import FormAgreeBox from '../components/form/form_agree';
import WhiteBox from '../components/form/white_box';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import WhiteBoxTitle from '../components/form/white_box_title';
import WhiteBoxContents from '../components/form/white_box_contents';
import { FormButton } from '../components/form/form_button';
import { FormCancelButton } from '../components/form/form_button';
import { FormSubmitButton } from '../components/form/form_button';
import { CiCalendarDate, CiUser } from 'react-icons/ci'; // 아이콘 이름 수정
import axios from 'axios';

const PageBack = styled.div`
  background-color: #f4f4f4;
`;

const InputContent = styled.div`
  display: flex;
  margin-bottom: 25px;
  align-items: center;
  &.flex-start {
    align-items: flex-start;
  }
`;
const LabelStyled = styled.label`
  font-size: 18px;
  width: 160px;
`;

const InputStyled = styled.input`
  width: 406px;
  height: 45px;
  background-color: #f6f6f6;
  border-radius: 5px;
  border: 1px solid #cfcfcf;
  font-size: 16px;
  padding: 0 15px;

  &:focus {
    outline: none;
  }
`;

const ImgWrap = styled.div`
  width: 454px;
  height: 270px;
  background-color: #d9d9d9;
  margin-right: 60px;
  border-right: 1px solid #d9d9d9;
`;

const ContentWrap = styled.div`
  display: flex;
`;
const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  h5 {
    font-size: 15px;
    font-weight: 400;
    padding-bottom: 15px;
    display: flex;
    align-items: center;
  }
  h2 {
    font-size: 35px;
    font-weight: 700;
    padding-bottom: 15px;
  }
  h4 {
    color: #5e5e5e;
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
  }
  h6 {
    margin-top: auto;
    font-weight: 400;
    display: flex;
    align-items: center;
  }
`;

const StyledCiUser = styled(CiUser)`
  padding-right: 5px;
  width: 1.8em;
  height: 1.8em;
`;

const StyledCiCalendar = styled(CiCalendarDate)`
  padding-right: 5px;
  width: 1.8em;
  height: 1.8em;
`;

interface Challenge {
  title: string;
  participants: number;
  description: string;
  date: string;
}

const ApplicationPage = () => {
  const [challengeInfo, setChallengeInfo] = useState<Challenge | null>(null);
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [isAgreed, setIsAgreed] = useState(false); // 약관 동의 여부를 관리하는 상태 추가

  const handleAgreeChange = (isChecked: boolean) => {
    setIsAgreed(isChecked);
  };
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const userData = { name, tel, email };

  //   axios
  //     .post('submit API주소', userData)
  //     .then((response) => {
  //       console.log('참가 신청이 완료되었습니다.');
  //     })
  //     .catch((error) => {
  //       console.error('참가 신청이 실패하였습니다', error);
  //       // 오류 처리
  //     });
  //   // history.push('/success'); // 성공 페이지로 이동
  // };
  // const handleCancel = () => {
  //   // 취소 버튼을 클릭 이전 페이지로 이동
  //   history.push(/);
  // };

  useEffect(() => {
    axios
      .get<Challenge>('API주소')
      .then((response) => {
        setChallengeInfo(response.data);
      })
      .catch((error) => {
        console.error('챌린지 정보가 없습니다', error);
      });
  }, []);
  return (
    <>
      <Header />
      <PageBack>
        <Wrapper>
          <div>
            <WhiteBox>
              <WhiteBoxContents>
                <ContentWrap>
                  <ImgWrap></ImgWrap>
                  <TextWrap>
                    {challengeInfo ? (
                      <>
                        <h5>
                          <StyledCiUser />
                          현재 {challengeInfo.participants}명 참여 중
                        </h5>
                        <h2>{challengeInfo.title}</h2>
                        <h4>{challengeInfo.description}</h4>
                        <h6>
                          <StyledCiCalendar />
                          {challengeInfo.date}
                        </h6>
                      </>
                    ) : (
                      <p>Loading...</p>
                    )}
                  </TextWrap>
                </ContentWrap>
              </WhiteBoxContents>
            </WhiteBox>
          </div>
          <div>
            <WhiteBox>
              <WhiteBoxTitle>참가자 정보</WhiteBoxTitle>
              <WhiteBoxContents>
                <div>
                  <form>
                    <InputContent>
                      <LabelStyled htmlFor="formName">이름</LabelStyled>
                      <InputStyled
                        type="text"
                        value={name}
                        // onChange={(e) => setName(e.target.value)}
                        id="formName"
                      />
                    </InputContent>
                    <InputContent>
                      <LabelStyled htmlFor="formTel">휴대폰번호</LabelStyled>
                      <InputStyled
                        type="text"
                        value={tel}
                        // onChange={(e) => setTel(e.target.value)}
                        id="formTel"
                      />
                    </InputContent>
                    <InputContent>
                      <LabelStyled htmlFor="formMail">이메일</LabelStyled>
                      <InputStyled
                        type="text"
                        value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        id="formMail"
                      />
                    </InputContent>
                  </form>
                </div>
              </WhiteBoxContents>
            </WhiteBox>
          </div>
          <WhiteBox>
            <WhiteBoxTitle>약관 정보</WhiteBoxTitle>
            <WhiteBoxContents>
              {/* <FormAgreeBox></FormAgreeBox> */}
            </WhiteBoxContents>
          </WhiteBox>
          <FormButton>
            <FormCancelButton>취소하기</FormCancelButton>
            <FormSubmitButton>참가하기</FormSubmitButton>
          </FormButton>
        </Wrapper>
      </PageBack>
      <Footer />
    </>
  );
};

export default ApplicationPage;
