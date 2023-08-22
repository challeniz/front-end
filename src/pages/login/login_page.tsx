import React, { useEffect, useState } from 'react';
import { 
  Memvership, EmailPW, InputTitle, InputWrap, Input, UserIcon,
  ErrorMessageWrap, BtnCenter, SubmitBtn, NoMemberShipWrap, NoMemberShip, JoinMemberBtn } from './login_page.styles';
import Wrapper from '../../components/common/wrapper';
import { Link, useNavigate } from 'react-router-dom';
import { emailRegex, passwordRegex } from '../../components/common/validation'
import { ROUTE } from "../../routes";
import axios from 'axios';


//로그인 페이지 컴포넌트
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true); //이메일, 패스워드가 맞게 작동할때 버튼이 활성화 되는 기능

  const navigate = useNavigate(); // 로그인 페이지에서 로그인 버튼 누르고 성공할 시 메인 페이지로 넘어가는 기능

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    {
      /* 이메일 valid 유효성 검사 */
    }
    if (emailRegex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);

    {
      /* 비밀번호 valid 유효성 검사 */
    }
    if (passwordRegex.test(password)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  //submit 버튼 활성화 기능 구현 코드
  useEffect(() => {
    if (emailValid && passwordValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, passwordValid]); // <- defendency 안에 2개의 이메일 유효성, 비밀번호 유효성의 스테이트 값이 변화 할때 useEffect 코드가 실행됨.

  //이메일, 비밀번호 입력 후 로그인 버튼 눌렀을때 맞게 되었는지 확인창 기능
  const onClickLoginBtn = async () => {
    try {
      const response = await axios.post('http://34.64.62.80:3000/users/login', {
        email,
        password
      });

      if (response.status === 201) {
        const token = response.data.token;
        alert('로그인에 성공하였습니다.');
        localStorage.setItem('token', token);
        navigate('/'); // 로그인 성공 시 홈 메인페이지로 이동
      } else {
        alert('등록되지 않은 회원입니다.');
      }
    } catch (error) {
      console.error('로그인 에러:', error);
      alert('로그인에 실패하였습니다.');
    }
  };

  return (
    <Wrapper>
      <Memvership>회원 로그인</Memvership>

      <EmailPW>
        {/* 이메일 입력칸 */}
        <InputTitle>이메일 주소</InputTitle>
        <InputWrap>
          <UserIcon>
            <a
              href="https://www.flaticon.com/kr/free-icons/"
              title="사람 아이콘"
            ></a>
            <img
              src={require('../../assets/icon/free-icon-user-5264565.png')}
              alt="아이콘"
            />
          </UserIcon>
          <Input
            type="text"
            value={email}
            onChange={handleEmail}
            placeholder="test@gmail.com"
          />
        </InputWrap>
        {/* 이메일 에러메세지 입력칸 */}
        <ErrorMessageWrap>
          {!emailValid && email.length > 0 && (
            <div>올바른 이메일을 입력해주세요.</div>
          )}
        </ErrorMessageWrap>

        {/* 비밀번호 입력칸 */}
        <InputTitle>비밀번호</InputTitle>
        <InputWrap>
          <UserIcon>
            <a
              href="https://www.flaticon.com/kr/free-icons/"
              title="키 아이콘"
            ></a>
            <img
              src={require('../../assets/icon/free-icon-key-566076.png')}
              alt="아이콘"
            />
          </UserIcon>
          <Input
            type="password"
            value={password}
            onChange={handlePassword}
            placeholder="영문, 숫자, 특수문자 포함 10자 이상"
          />
        </InputWrap>
        {/* 비밀번호 에러메세지 입력칸 */}
        <ErrorMessageWrap>
          {!passwordValid && password.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 10자 이상 입력해주세요.</div>
          )}
        </ErrorMessageWrap>
      </EmailPW>

      {/* 이메일, 비밀번호 입력 후 버튼 활성화 */}
      <BtnCenter>
        <SubmitBtn onClick={onClickLoginBtn} disabled={notAllow}>
          로그인
        </SubmitBtn>
      </BtnCenter>

      {/* 계정이 없을경우 회원가입 페이지 리로드 */}
      <NoMemberShipWrap>
        <NoMemberShip>계정이 없으신가요?</NoMemberShip>
        <Link to={ROUTE.JOINPAGE.link}>
          <JoinMemberBtn>회원가입</JoinMemberBtn>
        </Link>
      </NoMemberShipWrap>

      {/* 소셜로그인 */}
      {/* <SocialLogin>SNS계정으로 로그인</SocialLogin> */}

      {/* 소셜로그인 이모티콘 틀*/}
      {/* <IconWrap>
        <Kakao>
          <a
            href="https://www.flaticon.com/kr/free-icons/-"
            title="카카오 톡 아이콘"
          ></a>
          <img
            src={require('../../assets/icon/free-icon-kakao-talk-4494622.png')}
            alt="아이콘"
          />
        </Kakao>
        <Google>
          <a
            href="https://www.flaticon.com/kr/free-icons/"
            title="구글 아이콘"
          ></a>
          <img
            src={require('../../assets/icon/free-icon-search-281764.png')}
            alt="아이콘"
          />
        </Google>
      </IconWrap> */}
    </Wrapper>
  );
};


export default LoginPage;
