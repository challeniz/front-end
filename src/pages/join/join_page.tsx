import React, { useEffect, useState } from 'react';
// import { 
//   Body ,JoinText, JoinText1, EmailPW, InputTitle, InputWrap, Input, Input2,
//   Input3, ConfrimBtn, UserIcon, ErrorMessageWrap, BtnWrap, LoginBtn, Cancel} from './join_page.styles';
import * as S from  './join_page.styles';
import Wrapper from '../../components/common/wrapper';
import { emailRegex, passwordRegex, nickNameRegex, numberRegex} from '../../components/common/validation'
import { Link, useNavigate } from 'react-router-dom';
import { ROUTE } from "../../routes";
import axios from 'axios';
import { emailApiInstance, joinApiInstance } from '../../utils/api';



const JoinPage = () => {

  
  const [email, setEmail] = useState(''); // 이메일 상태, 상태변경
  const [password, setPassword] = useState(''); // 비밀번호 상태, 상태변경
  const [confirmPw, setConfirmPw] = useState(''); // 비밀번호 재입력 상태, 상태변경
  //const [name, setName] = useState(''); // 이름 상태, 상태변경
  const [nickName, setNickName] = useState(''); // 닉네임 상태, 상태변경
  const [number, setNumber] = useState(''); // 전화번호 상태, 상태변경


  const [emailValid, setEmailValid] = useState(false); // 이메일 벨리데이션 유효성 검사
  const [passwordValid, setPasswordValid] = useState(false); // 비밀번호 벨리데이션 유효성 검사
  const [ConfirmPwValid, setConfirmPwValid] = useState(false); // 비밀번호 재입력 벨리데이션 유효성 검사
  //const [ConfirmNameValid, setConfirmNameValid] = useState(false); // 이름 벨리데이션 유효성 검사
  const [ConfirmNickNameValid, setConfirmNickNameValid] = useState(false); // 닉네임 벨리데이션 유효성 검사
  const [numberValid, setNumberValid] = useState(false); // 전화번호 유효성 검사
  const [notAllow, setNotAllow] = useState(true); //이메일, 패스워드가 맞게 작동할때 버튼이 활성화 되는 기능

  const navigate = useNavigate(); // 회원가입 페이지에서 회원가입 버튼 누르고 성공할 시 로그인 페이지로 넘어가는 기능

  //중복확인 버튼 활성화 기능 구현 코드
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
      
    if (emailRegex.test(email)) {
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
    if (passwordRegex.test(password)) {
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
      /* 비밀번호 재입력 valid 유효성 검사 */
    }

    if (password === confirmPasswordValue) {
      setConfirmPwValid(true);
    } else {
      setConfirmPwValid(false);
    }
  };


  //닉네임 validation 유효성 검사
  const handleNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
    {
      /* 닉네임 valid 유효성 검사 */
    }
    if (nickNameRegex.test(nickName)) {
      setConfirmNickNameValid(true);
    } else {
      setConfirmNickNameValid(false);
    }
  };

  



  ////////////////////
  //이름 validation 유효성 검사
  // const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(e.target.value);
    {
      /* 이름 valid 유효성 검사 */
    }
  //   const regex = /^[가-힣]{3,4}$/;
  //   if (regex.test(name)) {
  //     setConfirmNameValid(true);
  //   } else {
  //     setConfirmNameValid(false);
  //   }
  // };

  //이름 validation 유효성 검사
  // const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const numberValue = e.target.value;
  //   setNumber(numberValue);
    {
      /* 이름 valid 유효성 검사 */
    }

  //   const regex = /^\d{11}$/;

  //   if (regex.test(numberValue)) {
  //     setNumberValid(true);
  //   } else {
  //     setNumberValid(false);
  //   }
  // };
  ////////////////////

    //전화번호 validation 유효성 검사
  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numberValue = e.target.value;
    setNumber(numberValue);
    {
      /* 전화번호 valid 유효성 검사 */
    }

    if (numberRegex.test(numberValue)) {
      setNumberValid(true);
    } else {
      setNumberValid(false);
    }
  };

  //이메일 입력 후 중복확인 버튼 눌렀을때 맞게 되었는지 확인창 기능
  const onClickConfirmBtn = async () => {
    try {
      const response = await emailApiInstance.post('/users/check', {
        email: email,
      });
      console.log(response.data)
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

  //가입하기 버튼 로컬스토리지.setItem
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
      // 모든 유효성 검사 통과한 경우
      const user = {
        name: nickName, // 닉네임을 name으로 사용
        email,
        password,
        phone: number, // 전화번호를 phone으로 사용
      };

      try {
        const response = await joinApiInstance.post('/users/signup', user);

        if (response.status === 201) {
          // 회원가입 성공 시 처리
          alert('회원가입에 성공하였습니다.');
          navigate(ROUTE.LOGIN.link); // 가입 성공 시 로그인 페이지로 이동
        } else {
          // 회원가입 실패 시 처리
          alert('회원가입에 실패하였습니다.');
        }
      } catch (error) {
        // API 호출 중 에러 발생 시 처리
        alert('서버와의 통신 중 오류가 발생하였습니다.');
        console.error(error);
      }
    }
  };

  return (
    <Wrapper>
      <S.Body>
        {/* 회원가입 문구 */}
        <S.JoinText>회원가입</S.JoinText>
        <S.JoinText1>회원이 되어 다양한 혜택을 경험해 보세요!</S.JoinText1>

        {/* 이메일 ui 및 기능 로직 */}
        <S.EmailPW>
          {/* 이메일 입력칸 */}
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
          {/* 이메일 에러메세지 입력칸 */}
          <S.ErrorMessageWrap>
            {!emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )}
          </S.ErrorMessageWrap>

          {/* 비밀번호 입력칸 */}
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
          {/* 비밀번호 에러메세지 입력칸 */}
          <S.ErrorMessageWrap>
            {!passwordValid && password.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 10자 이상 입력해주세요.</div>
            )}
          </S.ErrorMessageWrap>

          {/* 비밀번호 확인 */}
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
          {/* 비밀번호 에러메세지 입력칸 */}
          <S.ErrorMessageWrap>
            {!ConfirmPwValid && confirmPw.length > 0 && (
              <div>비밀번호가 일치하지 않습니다.</div>
            )}
          </S.ErrorMessageWrap>

          {/* 닉네임 입력칸 */}
          <S.InputTitle>닉네임</S.InputTitle>
          <S.InputWrap>
            <S.Input3
              type="text"
              value={nickName}
              onChange={handleNickName}
              placeholder="닉네임을 입력해주세요."
            />
          </S.InputWrap>
          {/* 닉네임 에러메세지 입력칸 */}
          <S.ErrorMessageWrap>
            {!ConfirmNickNameValid && nickName.length > 0 && (
              <div>2자 이상 8자 이하, 영어 or 숫자 or 한글로 입력해주세요.</div>
            )}
          </S.ErrorMessageWrap>

          {/* 이름 입력칸 */}
          {/* <InputTitle style={{ marginTop: '26px' }}>이름</InputTitle>
          <InputWrap>
            <Input2
              type="text"
              value={name}
              onChange={handleName}
              placeholder="이름을 입력해주세요."
            />
          </InputWrap> */}
          {/* 이름 에러메세지 입력칸 */}
          {/* <ErrorMessageWrap>
            {!ConfirmNameValid && name.length > 0 && (
              <div>4자외로 입력해 주세요.</div>
            )}
          </ErrorMessageWrap> */}



          {/* 전화번호 입력칸 */}
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

        {/* 가입하기, 가입취소 버튼 */}
        <S.BtnWrap>
          <S.LoginBtn 
          onClick={() => handleJoin()}>가입하기</S.LoginBtn>
          <Link to={ROUTE.LOGIN.link}>
            <S.Cancel>가입취소</S.Cancel>
          </Link>
        </S.BtnWrap>
      </S.Body>
    </Wrapper>
  );
};

export default JoinPage;

