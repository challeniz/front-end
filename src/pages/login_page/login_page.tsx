import React, { useEffect, useState, useRef } from 'react';
import * as S from './login_page.styles';
import Wrapper from '../../components/common/wrapper/wrapper';
import { Link, useNavigate } from 'react-router-dom';
import {
  emailRegex,
  passwordRegex,
} from '../../components/common/validation/validation';
import { ROUTE } from '../../routes';
import { apiInstance } from '../../utils/api';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const loginButtonRef = useRef<HTMLButtonElement>(null);
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    buttonClickFunction: () => void
  ) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      buttonClickFunction();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (buttonClickFunction === onClickLoginBtn) {
        passwordInputRef.current?.focus();
      } else {
        loginButtonRef.current?.focus();
      }
    }
  };

  const navigate = useNavigate();

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
  useEffect(() => {
    if (emailValid && passwordValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, passwordValid]);

  const onClickLoginBtn = async () => {
    try {
      const response = await apiInstance.post('/users/login', {
        email,
        password,
      });

      if (response.status === 201) {
        const token = response.data.access_token;
        alert('로그인에 성공하였습니다.');
        localStorage.setItem('token', token);
        console.log('token', token);
        navigate('/');
      } else {
        alert('등록되지 않은 회원입니다.');
      }
    } catch (error) {
      console.error('로그인 에러:', error);
      alert('로그인에 실패하였습니다..');
    }
  };

  return (
    <Wrapper>
      <S.Memvership>회원 로그인</S.Memvership>

      <S.EmailPW>
        <S.InputTitle>이메일 주소</S.InputTitle>
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
            onKeyDown={(e) =>
              handleKeyDown(e, () => passwordInputRef.current?.focus())
            }
            placeholder="test@gmail.com"
          />
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
              aria-label="키 아이콘 링크입니다."
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
            ref={passwordInputRef}
            onKeyDown={(e) => handleKeyDown(e, onClickLoginBtn)}
            placeholder="영문, 숫자, 특수문자 포함 10자 이상"
          />
        </S.InputWrap>

        <S.ErrorMessageWrap>
          {!passwordValid && password.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 10자 이상 입력해주세요.</div>
          )}
        </S.ErrorMessageWrap>
      </S.EmailPW>

      <S.BtnCenter>
        <S.SubmitBtn
          ref={loginButtonRef}
          onClick={onClickLoginBtn}
          disabled={notAllow}
        >
          로그인
        </S.SubmitBtn>
      </S.BtnCenter>

      <S.NoMemberShipWrap>
        <S.NoMemberShip>계정이 없으신가요?</S.NoMemberShip>
        <Link to={ROUTE.JOINPAGE.link}>
          <S.JoinMemberBtn>회원가입</S.JoinMemberBtn>
        </Link>
      </S.NoMemberShipWrap>
    </Wrapper>
  );
};

export default LoginPage;
