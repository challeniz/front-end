import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Wrapper from '../../components/common/wrapper';
import { stringLiteral } from '@babel/types';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';


//더미데이터 테스트용
const User = [
  {
    email: 'test@test.com',
    password: 'qwer1234!!',
  },
  {
    email: '1004@test.com',
    password: '1004qwer!!',
  },
];



const JoinPage = () => {
  const [email, setEmail] = useState(''); // 이메일 상태, 상태변경
  const [password, setPassword] = useState(''); // 비밀번호 상태, 상태변경
  const [confirmPw, setConfirmPw] = useState(''); // 비밀번호 재입력 상태, 상태변경
  const [name, setName] = useState(''); // 이름 상태, 상태변경
  const [number, setNumber] = useState(''); // 전화번호 상태, 상태변경
  

  const [emailValid, setEmailValid] = useState(false); // 이메일 벨리데이션 유효성 검사
  const [passwordValid, setPasswordValid] = useState(false); // 비밀번호 벨리데이션 유효성 검사
  const [ConfirmPwValid, setConfirmPwValid] = useState(false); // 비밀번호 재입력 벨리데이션 유효성 검사
  const [ConfirmNameValid, setConfirmNameValid] = useState(false); // 이름 벨리데이션 유효성 검사
  const [numberValid, setNumberValid] = useState(false); // 전화번호 유효성 검사
  const [notAllow, setNotAllow] = useState(true); //이메일, 패스워드가 맞게 작동할때 버튼이 활성화 되는 기능

  const navigate  = useNavigate();// 회원가입 페이지에서 회원가입 버튼 누르고 성공할 시 로그인 페이지로 넘어가는 기능

  //submit 버튼 활성화 기능 구현 코드
  useEffect(() => {
    if (emailValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid]); // <- defendency 안에 2개의 이메일 유효성, 비밀번호 유효성의 스테이트 값이 변화 할때 useEffect 코드가 실행됨.

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

  //비밀번호 valid 유효성 검사
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

  //비밀번호 재입력 valid 유효성 검사
  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPasswordValue = e.target.value;
    setConfirmPw(confirmPasswordValue);
    {
      /* 비밀번호 valid 유효성 검사 */
    }

    if (password === confirmPasswordValue) {
      setConfirmPwValid(true);
    } else {
      setConfirmPwValid(false);
    }
  };

  //이름 validation 유효성 검사
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    {
      /* 이름 valid 유효성 검사 */
    }
    const regex = /^[가-힣]{3,4}$/
    if (regex.test(name)) {
      setConfirmNameValid(true);
    } else {
      setConfirmNameValid(false);
    }
  };

  //이름 validation 유효성 검사
  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numberValue = e.target.value;
    setNumber(numberValue);
    {
      /* 이름 valid 유효성 검사 */
    }

    const regex = /^\d{11}$/;

    if (regex.test(numberValue)) {
      setNumberValid(true);
    } else {
      setNumberValid(false);
    }
  };

  //이메일 입력 후 중복확인 버튼 눌렀을때 맞게 되었는지 확인창 기능
  const onClickConfirmBtn = () => {
    const foundUser = User.find(userData => userData.email === email)
    if (foundUser) {
      alert('사용가능한 이메일입니다.');
    } else {
      alert('사용할 수 없는 이메일입니다.');
    }
  };

  //가입하기 버튼 로컬스토리지.setItem
  const handleJoin = () => {
    if (
      !emailValid ||
      !passwordValid ||
      !ConfirmPwValid ||
      !ConfirmNameValid ||
      !numberValid
    ) {
      alert("모든 항목을 입력해주세요.");
    } else {
      // 모든 유효성 검사 통과한 경우
      const user = {
        email,
        password
      }
  
      localStorage.setItem('user', JSON.stringify(user));
      

      // localStorage.setItem('email', email);
      // localStorage.setItem('password', password);
      
      alert("회원가입에 성공하였습니다.");

      navigate('/loginpage'); // 가입 성공 시 로그인 페이지로 이동
    }
  }

  
  return (
    <Wrapper>
      <Body>
        {/* 회원가입 문구 */}
        <JoinText>회원가입</JoinText>
        <JoinText1>회원이 되어 다양한 혜택을 경험해 보세요!</JoinText1>

        {/* 이메일 ui 및 기능 로직 */}
        <EmailPW>
          {/* 이메일 입력칸 */}
          <InputTitle>이메일</InputTitle>
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
            <ConfrimBtn onClick={onClickConfirmBtn} disabled={notAllow}>
              중복확인
            </ConfrimBtn>
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

          {/* 비밀번호 확인 */}
          <InputTitle style={{ marginTop: '26px' }}>비밀번호 확인</InputTitle>
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
            <Input2
              type="password"
              value={confirmPw}
              onChange={handleConfirmPassword}
              placeholder="비밀번호 재입력"
            />
          </InputWrap>
          {/* 비밀번호 에러메세지 입력칸 */}
          <ErrorMessageWrap>
            {!ConfirmPwValid && confirmPw.length > 0 && (
              <div>비밀번호가 일치하지 않습니다.</div>
            )}
          </ErrorMessageWrap>

          {/* 이름 입력칸 */}
          <InputTitle style={{ marginTop: '26px' }}>이름</InputTitle>
          <InputWrap>
            <Input2
              type="text"
              value={name}
              onChange={handleName}
              placeholder="이름을 입력해주세요."
            />
          </InputWrap>
          {/* 이름 에러메세지 입력칸 */}
          <ErrorMessageWrap>
            {!ConfirmNameValid && name.length > 0 && (
              <div>비밀번호가 일치하지 않습니다.</div>
            )}
          </ErrorMessageWrap>

          {/* 전화번호 입력칸 */}
          <InputTitle style={{ marginTop: '26px' }}>전화번호</InputTitle>
          <InputWrap>
            <Input2
              type="text"
              value={number}
              onChange={handleNumber}
              placeholder="전화번호를 입력해주세요."
            />
          </InputWrap>
          <ErrorMessageWrap>
            {!numberValid && number.length > 0 && (
              <div>전화번호가 올바르지 않습니다.</div>
            )}
          </ErrorMessageWrap>

        </EmailPW>

        {/* 가입하기, 가입취소 버튼 */}
        <BtnWrap>
          <LoginBtn onClick={() => handleJoin()}>가입하기</LoginBtn>
          <Link to="/loginpage">
            <Cancel>가입취소</Cancel>
          </Link>
        </BtnWrap>
      </Body>
    </Wrapper>
  );
};

export default JoinPage;

//전체 틀 잡기
const Body = styled.div`
  margin-left: 400px;
  margin-right: 400px;
`;

//회원가입 문구
const JoinText = styled.p`
  font-size: 30px;
  font-weight: 700;
`;

//회원가입 부가설명
const JoinText1 = styled.p`
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 40px;
`;

// 이메일 주소, 비밀번호 전체 틀
const EmailPW = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
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
  width: 100%;
  padding: 8px;
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
  height: 40px;
  font-size: 18px;
  font-weight: 400;

  &::placeholder {
    color: #dadada;
  }
`;

// 비밀번호 재입력 확인창
const Input2 = styled.input`
  width: 100%;
  outline: none;
  border: none;
  height: 40px;
  font-size: 18px;
  font-weight: 400;

  &::placeholder {
    color: #dadada;
  }
`;

//이메일 중복확인 버튼
const ConfrimBtn = styled.button`
  border-radius: 3px;
  width: 350px;
  padding: 5px;
  border: 1px solid #e2e0e0;
  border-radius: 6px;
  background-color: #339af0;
  font-size: 20px;
  color: white;
  font-weight: 400;
  cursor: pointer;

  &:disabled {
    background-color: #dadada;
    color: white;
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
`;

//이메일, 비밀번호 에러 메세지
const ErrorMessageWrap = styled.div`
  margin-top: 10px;
  color: #ef0000;
  font-size: 14px;
`;

//가입하기 취소하기 버튼 틀 구조
const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginBtn = styled.button`
  border-radius: 3px;
  width: 200px;
  padding: 10px;
  border: 1px solid #e2e0e0;
  border-radius: 6px;
  background-color: #339af0;
  font-size: 20px;
  color: white;
  font-weight: 400;
  cursor: pointer;
  margin-top: 30px;
`;

const Cancel = styled.button`
  border-radius: 3px;
  width: 200px;
  padding: 10px;
  border: 1px solid #e2e0e0;
  border-radius: 6px;
  background-color: #cde8ac;
  font-size: 20px;
  color: black;
  font-weight: 400;
  cursor: pointer;
  margin-top: 30px;
  margin-left: 20px;
`;
