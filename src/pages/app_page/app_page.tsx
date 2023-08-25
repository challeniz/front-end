import React, { useState, useEffect, FormEventHandler } from 'react';
import * as S from './app_page.style';
import * as D from '../../components/form/form_agree/form_agree.style';
import Wrapper from '../../components/common/wrapper/wrapper';
import WhiteBox from '../../components/form/white_box/white_box/white_box';
import Header from '../../components/common/header/header';
// import { ROUTE } from '../../routes';
import Footer from '../../components/common/footer/footer';
import WhiteBoxTitle from '../../components/form/white_box/white_box_title/white_box_title';
import WhiteBoxContents from '../../components/form/white_box/white_box_contents/white_box_contents';
import {
  FormButton,
  FormCancelButton,
  FormSubmitButton,
} from '../../components/form/form_button/form_button';
// import axios from 'axios';
import { apiInstance } from '../../utils/api';

interface Challenge {
  title: string;
  participants: number;
  description: string;
  date: string;
}

const ApplicationPage: React.FC = () => {
  const [challengeInfo, setChallengeInfo] = useState<Challenge | null>(null);
  const [isAgreed, setIsAgreed] = useState(false); // 약관 동의 여부
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
  interface FormAgreeBoxProps {
    onAgreeChange: (isChecked: boolean) => void;
  }

  const FormAgreeBox: React.FC<FormAgreeBoxProps> = ({ onAgreeChange }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = e.target;
      setIsChecked(checked);
      onAgreeChange(checked);
    };
    return (
      <>
        <p>
          회사는 개설챌린지의 주제를 검토할 수 있으며, 회사의 판단하에 챌린지를
          삭제할 수 있습니다. 삭제할 수 있는 경우는 아래와 같습니다.
        </p>
        <D.StyledUl>
          <li>2명 이상의 회원이 신고한 경우</li>
          <li>다른 챌린지와 지나치게 유사한 경우</li>
          <li>타인에게 불쾌감을 줄 수 있는 주제인 경우</li>
          <li>그외 회사가 판단하기에 부적절한 경우</li>
        </D.StyledUl>
        <p>
          챌린지를 삭제할 때, 부적절한 챌린지로 판단되는 경우 서비스 이용을
          영구정지 할 수 있습니다.
        </p>
        <D.AgreeBox>
          <p className="agree-title">약관동의</p>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          ></input>
          <p className="agree-text">
            위의 내용을 모두 읽어보았으며, 이에 모두 동의합니다.
          </p>
        </D.AgreeBox>
      </>
    );
  };

  const handleAgreeChange = (isChecked: boolean) => {
    setIsAgreed(isChecked);
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

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
      const response = await apiInstance.patch(
        '/challenges/subscription/64e4d93bb812a8e5dc1882f5',
        userData
      );
      console.log('참가 신청이 완료되었습니다.');
    } catch (error) {
      console.error('참가 신청이 실패하였습니다', error);
    }
  };

  useEffect(() => {
    async function fetchChallengeInfo() {
      try {
        const response = await apiInstance.get<Challenge>('/challenges/');
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
                        id="formTel"
                      />
                    </S.InputContent>
                    <S.InputContent>
                      <S.LabelStyled htmlFor="formMail">이메일</S.LabelStyled>
                      <S.InputStyled
                        type="text"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
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
              <FormAgreeBox onAgreeChange={handleAgreeChange} />
            </WhiteBoxContents>
          </WhiteBox>
          <FormButton>
            <FormCancelButton>취소하기</FormCancelButton>
            <FormSubmitButton disabled={!isAgreed}>참가하기</FormSubmitButton>
          </FormButton>
        </Wrapper>
      </S.PageBack>
      <Footer />
    </>
  );
};

export default ApplicationPage;
