import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Wrapper from '../../components/common/wrapper';
import { Routes, Route, Link } from 'react-router-dom';


//더미데이터 테스트용
const User = {
  email: 'test@test.com',
  password: 'qwer1234!!',
};

//로그인 페이지 컴포넌트
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true); //이메일, 패스워드가 맞게 작동할때 버튼이 활성화 되는 기능

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    {
      /* 이메일 valid 유효성 검사 */
    }
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(email)) {
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
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(password)) {
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
  const onClickConfirmBtn = () => {
    if (email === User.email && password === User.password) {
      alert('로그인에 성공했습니다.');
    } else {
      alert('등록되지 않은 회원입니다.');
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
            <a href="https://www.flaticon.com/kr/free-icons/" title="사람 아이콘"></a>
            <img src={require('../../assets/icon/free-icon-user-5264565.png')} alt="아이콘" />
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
        <InputTitle style={{ marginTop: '26px' }}>비밀번호</InputTitle>
        <InputWrap>
          <UserIcon>
            <a href="https://www.flaticon.com/kr/free-icons/" title="키 아이콘"></a>
            <img src={require('../../assets/icon/free-icon-key-566076.png')} alt="아이콘" />
          </UserIcon>
          <Input
            type="password"
            value={password}
            onChange={handlePassword}
            placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          />
        </InputWrap>
        {/* 비밀번호 에러메세지 입력칸 */}
        <ErrorMessageWrap>
          {!passwordValid && password.length > 0 && (
            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
          )}
        </ErrorMessageWrap>
      </EmailPW>

      {/* 이메일, 비밀번호 입력 후 버튼 활성화 */}
      <BtnCenter>
        <SubmitBtn onClick={onClickConfirmBtn} disabled={notAllow}>
          로그인
        </SubmitBtn>
      </BtnCenter>

      {/* 계정이 없을경우 회원가입 페이지 리로드 */}
      <NoMemberShipWrap>
        <NoMemberShip>계정이 없으신가요?</NoMemberShip>
        <Link to={"/joinpage"}>
          <JoinMemberBtn>회원가입</JoinMemberBtn>
        </Link>
        
      </NoMemberShipWrap>

      {/* 구분선 */}
      <Divider></Divider>

      {/* 소셜로그인 */}
      <SocialLogin>SNS계정으로 로그인</SocialLogin>

      {/* 소셜로그인 이모티콘 틀*/}
      <IconWrap>
            <Kakao>
              <a href="https://www.flaticon.com/kr/free-icons/-" title="카카오 톡 아이콘"></a>
              <img src={require('../../assets/icon/free-icon-kakao-talk-4494622.png')} alt="아이콘" />
            </Kakao>
            <Google>
            <a href="https://www.flaticon.com/kr/free-icons/" title="구글 아이콘"></a>
              <img src={require('../../assets/icon/free-icon-search-281764.png')} alt="아이콘" />
            </Google>
      </IconWrap>


    </Wrapper>
  );
};

// 회원 로그인 메인 글
const Memvership = styled.div`
  font-size: 35px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

// 이메일 주소, 비밀번호 전체 틀
const EmailPW = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

// 이메일주소 , 비밀번호
const InputTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #262626;
  
`;

//이메일, 비밀번호 입력창 틀
const InputWrap = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  width: 400px;
  padding: 16px;
  border: 1px solid #e2e0e0;
  background-color: white;
  box-shadow: 1px 1px 0.5px 0.5px gray;

  &:focus-within {
    border: 1.5px solid #339af0;
  }
`;

//이메일, 비밀번호 입력창
const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  height: 20px;
  font-size: 18px;
  font-weight: 400;

  &::placeholder {
    color: #dadada;
  }
`;

//이메일 아이콘
const UserIcon = styled.image`
  display: flex;
  align-items: center;

  img {
    width: 24px; 
    height: 24px; 
    margin-right: 20px; 
  
  }
`

//이메일, 비밀번호 에러 메세지
const ErrorMessageWrap = styled.div`
  margin-top: 10px;
  color: #ef0000;
  font-size: 14px;
`;

//버튼 정렬해주는 기능
const BtnCenter = styled.div`
  display: flex;
  justify-content: center;
`;

//이메일, 비밀번호 입력 후 로그인 submit 버튼
const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 40px;
  display: flex;
  border-radius: 3px;
  width: 400px;
  padding: 16px;
  border: 1px solid #e2e0e0;
  background-color: #339af0;
  margin-top: 40px;
  font-size: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  

  &:disabled {
    background-color: #dadada;
    color: white;
  }
`;

// 계정이 없을경우 회원가입 유도하는 구조
const NoMemberShipWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

//계정이 없으신가요 텍스트
const NoMemberShip = styled.p`
  font-size: 18px;
  margin-right: 30px;
`;

// 회원가입 btn -> 클릭 시 회원가입 페이지로 리로드
const JoinMemberBtn = styled.p`
  color: #339af0;
  font-size: 18px;
  margin-right: 15px;
  font-weight: bold;
  cursor: pointer;
`;

//구분선
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e2e2e2;
  margin-top: 30px;
`;

//소셜로그인
const SocialLogin = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
  font-weight: 500;
  margin-top: 50px;
  color: #339af0;
`;

//소셜 로그인 아이콘 틀
const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

//카카오 로그인 아이콘
const Kakao = styled.image`
  flex-wrap: nowrap;
  
  img {
    width: 80px; 
    height: 80px; 
    margin-right: 50px; 
  
  }
`

//구글 로그인 아이콘
const Google = styled.image`
  flex-wrap: nowrap;

  img {
    width: 80px; 
    height: 80px; 
    margin-right: 20px; 
  
  }
`

export default LoginPage;
