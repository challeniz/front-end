import React, { useEffect, useState } from 'react';
import * as S from './join_page.styles';
import Wrapper from '../../components/common/wrapper/wrapper';
import {
  emailRegex,
  passwordRegex,
  nickNameRegex,
  numberRegex,
} from '../../components/common/validation/validation';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTE } from '../../routes';
import { apiInstance } from '../../utils/api';

const JoinPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [nickName, setNickName] = useState('');
  const [number, setNumber] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [ConfirmPwValid, setConfirmPwValid] = useState(false);

  const [ConfirmNickNameValid, setConfirmNickNameValid] = useState(false);
  const [numberValid, setNumberValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (emailValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid]);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailRegex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (passwordRegex.test(password)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPasswordValue = e.target.value;
    setConfirmPw(confirmPasswordValue);
    if (password === confirmPasswordValue) {
      setConfirmPwValid(true);
    } else {
      setConfirmPwValid(false);
    }
  };

  const handleNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
    if (nickNameRegex.test(nickName)) {
      setConfirmNickNameValid(true);
    } else {
      setConfirmNickNameValid(false);
    }
  };

  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numberValue = e.target.value;
    setNumber(numberValue);

    if (numberRegex.test(numberValue)) {
      setNumberValid(true);
    } else {
      setNumberValid(false);
    }
  };

  const onClickConfirmBtn = async () => {
    try {
      const response = await apiInstance.post('/users/check', {
        email: email,
      });

      if (response.data === true) {
        alert('사용할 수 없는 이메일입니다.');
      } else {
        alert('사용가능한 이메일입니다.');
      }
    } catch (error) {
      alert('서버와의 통신 중 오류가 발생하였습니다.');
      console.error(error);
    }
  };

  const handleJoin = async () => {
    if (
      !emailValid ||
      !passwordValid ||
      !ConfirmPwValid ||
      !ConfirmNickNameValid ||
      !numberValid ||
      !onClickConfirmBtn
    ) {
      alert('모든 항목 및 정보를 올바르게 입력해주세요.');
    } else {
      const user = {
        name: nickName,
        email,
        password,
        phone: number,
      };

      try {
        const response = await apiInstance.post('/users/signup', user);

        if (response.status === 201) {
          alert('회원가입에 성공하였습니다.');
          navigate(ROUTE.LOGIN.link);
        } else {
          alert('회원가입에 실패하였습니다.');
        }
      } catch (error) {
        alert('서버와의 통신 중 오류가 발생하였습니다.');
        console.error(error);
      }
    }
  };

  return (
    <Wrapper>
      <S.Body>
        <S.JoinText>회원가입</S.JoinText>
        <S.JoinText1>회원이 되어 다양한 혜택을 경험해 보세요!</S.JoinText1>

        <S.EmailPW>
          <S.InputTitle>이메일</S.InputTitle>
          <S.InputWrap>
            <S.UserIcon>
              <a
                href="https://www.flaticon.com/kr/free-icons/"
                title="사람 아이콘"
              ></a>
              <img
                src={require('../../assets/icon/free-icon-user-5264565.png')}
                alt="아이콘"
              />
            </S.UserIcon>
            <S.Input
              type="text"
              value={email}
              onChange={handleEmail}
              placeholder="test@gmail.com"
            />
            <S.ConfrimBtn onClick={onClickConfirmBtn} disabled={notAllow}>
              중복확인
            </S.ConfrimBtn>
          </S.InputWrap>

          <S.ErrorMessageWrap>
            {!emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )}
          </S.ErrorMessageWrap>

          <S.InputTitle>비밀번호</S.InputTitle>
          <S.InputWrap>
            <S.UserIcon>
              <a
                href="https://www.flaticon.com/kr/free-icons/"
                title="키 아이콘"
              ></a>
              <img
                src={require('../../assets/icon/free-icon-key-566076.png')}
                alt="아이콘"
              />
            </S.UserIcon>
            <S.Input
              type="password"
              value={password}
              onChange={handlePassword}
              placeholder="영문, 숫자, 특수문자 포함 10자 이상"
            />
          </S.InputWrap>

          <S.ErrorMessageWrap>
            {!passwordValid && password.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 10자 이상 입력해주세요.</div>
            )}
          </S.ErrorMessageWrap>

          <S.InputTitle>비밀번호 확인</S.InputTitle>
          <S.InputWrap>
            <S.UserIcon>
              <a
                href="https://www.flaticon.com/kr/free-icons/"
                title="키 아이콘"
              ></a>
              <img
                src={require('../../assets/icon/free-icon-key-566076.png')}
                alt="아이콘"
              />
            </S.UserIcon>
            <S.Input2
              type="password"
              value={confirmPw}
              onChange={handleConfirmPassword}
              placeholder="비밀번호 재입력"
            />
          </S.InputWrap>

          <S.ErrorMessageWrap>
            {!ConfirmPwValid && confirmPw.length > 0 && (
              <div>비밀번호가 일치하지 않습니다.</div>
            )}
          </S.ErrorMessageWrap>

          <S.InputTitle>닉네임</S.InputTitle>
          <S.InputWrap>
            <S.Input3
              type="text"
              value={nickName}
              onChange={handleNickName}
              placeholder="닉네임을 입력해주세요."
            />
          </S.InputWrap>

          <S.ErrorMessageWrap>
            {!ConfirmNickNameValid && nickName.length > 0 && (
              <div>2자 이상 8자 이하, 영어 or 숫자 or 한글로 입력해주세요.</div>
            )}
          </S.ErrorMessageWrap>

          <S.InputTitle>전화번호</S.InputTitle>
          <S.InputWrap>
            <S.Input3
              type="text"
              value={number}
              onChange={handleNumber}
              placeholder="전화번호를 입력해주세요."
            />
          </S.InputWrap>
          <S.ErrorMessageWrap>
            {!numberValid && number.length > 0 && (
              <div>전화번호가 올바르지 않습니다.</div>
            )}
          </S.ErrorMessageWrap>
        </S.EmailPW>

        <S.BtnWrap>
          <S.LoginBtn onClick={() => handleJoin()}>가입하기</S.LoginBtn>
          <Link to={ROUTE.LOGIN.link}>
            <S.Cancel>가입취소</S.Cancel>
          </Link>
        </S.BtnWrap>
      </S.Body>
    </Wrapper>
  );
};

export default JoinPage;
