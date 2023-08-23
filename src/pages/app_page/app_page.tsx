import React, { useState, useEffect, ReactNode } from 'react';
import * as S from './app_page.style';
import Wrapper from '../../components/common/wrapper/wrapper';
import FormAgreeBox from '../../components/form/form_agree/form_agree';
import WhiteBox from '../../components/form/white_box/white_box/white_box';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import WhiteBoxTitle from '../../components/form/white_box/white_box_title/white_box_title';
import WhiteBoxContents from '../../components/form/white_box/white_box_contents/white_box_contents';
import {
  FormButton,
  FormCancelButton,
  FormSubmitButton,
} from '../../components/form/form_button/form_button';
import { CiCalendarDate, CiUser } from 'react-icons/ci';
import axios from 'axios';

interface Challenge {
  title: string;
  participants: number;
  description: string;
  date: string;
}
interface FormButtonProps {
  children: ReactNode;
}

interface CancelButtonProps extends FormButtonProps {}

interface SubmitButtonProps extends FormButtonProps {}

const ApplicationPage = () => {
  const [challengeInfo, setChallengeInfo] = useState<Challenge | null>(null);

  const [isAgreed, setIsAgreed] = useState(false); // 약관 동의 여부

  const [form, setForm] = useState({
    name: '',
    tel: '',
    email: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isAgreed) {
      console.log('약관에 동의해야 합니다.');
      return;
    }
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
      <S.PageBack>
        <Wrapper>
          <div>
            <WhiteBox>
              <WhiteBoxContents>
                <S.ContentWrap>
                  <S.ImgWrap></S.ImgWrap>
                  <S.TextWrap>
                    {challengeInfo ? (
                      <>
                        <h5>
                          <S.StyledCiUser />
                          현재 {challengeInfo.participants}명 참여 중
                        </h5>
                        <h2>{challengeInfo.title}</h2>
                        <h4>{challengeInfo.description}</h4>
                        <h6>
                          <S.StyledCiCalendar />
                          {challengeInfo.date}
                        </h6>
                      </>
                    ) : (
                      <p>Loading...</p>
                    )}
                  </S.TextWrap>
                </S.ContentWrap>
              </WhiteBoxContents>
            </WhiteBox>
          </div>
          <div>
            <WhiteBox>
              <WhiteBoxTitle>참가자 정보</WhiteBoxTitle>
              <WhiteBoxContents>
                <div>
                  <form onSubmit={handleSubmit}>
                    <S.InputContent>
                      <S.LabelStyled htmlFor="formName">이름</S.LabelStyled>
                      <S.InputStyled
                        type="text"
                        name="name"
                        value={form.name}
                        id="formName"
                      />
                    </S.InputContent>
                    <S.InputContent>
                      <S.LabelStyled htmlFor="formTel">
                        휴대폰번호
                      </S.LabelStyled>
                      <S.InputStyled
                        type="text"
                        name="tel"
                        value={form.tel}
                        id="formTel"
                      />
                    </S.InputContent>
                    <S.InputContent>
                      <S.LabelStyled htmlFor="formMail">이메일</S.LabelStyled>
                      <S.InputStyled
                        type="text"
                        name="email"
                        value={form.email}
                        id="formMail"
                      />
                    </S.InputContent>
                  </form>
                </div>
              </WhiteBoxContents>
            </WhiteBox>
          </div>
          <WhiteBox>
            <WhiteBoxTitle>약관 정보</WhiteBoxTitle>
            <WhiteBoxContents>
              <FormAgreeBox />
            </WhiteBoxContents>
          </WhiteBox>
          <FormButton>
            <FormCancelButton>취소하기</FormCancelButton>
            <FormSubmitButton>챌린지 신청하기</FormSubmitButton>
          </FormButton>
        </Wrapper>
      </S.PageBack>
      <Footer />
    </>
  );
};

export default ApplicationPage;
