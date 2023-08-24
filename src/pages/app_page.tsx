import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Wrapper from '../components/common/wrapper';
// import FormAgreeBox from '../components/form/form_agree';
import WhiteBox from '../components/form/white_box';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import WhiteBoxTitle from '../components/form/white_box_title';
import WhiteBoxContents from '../components/form/white_box_contents';
import {
  FormButton,
  FormCancelButton,
  FormSubmitButton,
} from '../components/form/form_button';
import { CiCalendarDate, CiUser } from 'react-icons/ci';
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

const ApplicationPage: React.FC = () => {
  const [challengeInfo, setChallengeInfo] = useState<Challenge | null>(null);

  // const [isAgreed, setIsAgreed] = useState(false); // 약관 동의 여부

  const [form, setForm] = useState({
    name: '',
    tel: '',
    email: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // const handleAgreeChange = (isChecked: boolean) => {
  //   setIsAgreed(isChecked);
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (!isAgreed) {
    //   console.log('약관에 동의해야 합니다.');
    //   return;
    // }

    const userData = {
      name: form.name,
      tel: form.tel,
      email: form.email,
    };

    try {
      const response = await axios.post('submit API주소', userData);
      console.log('참가 신청이 완료되었습니다.');
    } catch (error) {
      console.error('참가 신청이 실패하였습니다', error);
    }
  };

  useEffect(() => {
    async function fetchChallengeInfo() {
      try {
        const response = await axios.get<Challenge>('API주소');
        setChallengeInfo(response.data);
      } catch (error) {
        console.error('챌린지 정보가 없습니다', error);
      }
    }

    fetchChallengeInfo();
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
                  <form onSubmit={handleSubmit}>
                    <InputContent>
                      <LabelStyled htmlFor="formName">이름</LabelStyled>
                      <InputStyled
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        id="formName"
                      />
                    </InputContent>
                    <InputContent>
                      <LabelStyled htmlFor="formTel">휴대폰번호</LabelStyled>
                      <InputStyled
                        type="text"
                        name="tel"
                        value={form.tel}
                        onChange={handleInputChange}
                        id="formTel"
                      />
                    </InputContent>
                    <InputContent>
                      <LabelStyled htmlFor="formMail">이메일</LabelStyled>
                      <InputStyled
                        type="text"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
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
            <WhiteBoxContents>약관폼</WhiteBoxContents>
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
