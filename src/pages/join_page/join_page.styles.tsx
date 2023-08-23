import styled from "styled-components";



//전체 틀 잡기
export const Body = styled.div`
  margin-left: 400px;
  margin-right: 400px;
`;

//회원가입 문구
export const JoinText = styled.p`
  font-size: 30px;
  font-weight: 700;
`;

//회원가입 부가설명
export const JoinText1 = styled.p`
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 40px;
`;

// 이메일 주소, 비밀번호 전체 틀
export const EmailPW = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

// 이메일주소 , 비밀번호
export const InputTitle = styled.div`
  font-size: 18px;
  margin-top: 26px;
  font-weight: 600;
  color: #262626;
`;

//이메일, 비밀번호 입력창 틀
export const InputWrap = styled.div`
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
export const Input = styled.input`
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
export const Input2 = styled.input`
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


// 닉네임 & 전화번호 입력창
export const Input3 = styled.input`
  width: 100%;
  outline: none;
  border: none;
  margin-left: 10px;
  height: 40px;
  font-size: 18px;
  font-weight: 400;

  &::placeholder {
    color: #dadada;
  }
`;

//이메일 중복확인 버튼
export const ConfrimBtn = styled.button`
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
export const UserIcon = styled.image`
  display: flex;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
    margin-right: 20px;
  }
`;

//이메일, 비밀번호 에러 메세지
export const ErrorMessageWrap = styled.div`
  margin-top: 10px;
  color: #ef0000;
  font-size: 14px;
`;

//가입하기 취소하기 버튼 틀 구조
export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginBtn = styled.button`
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

export const Cancel = styled.button`
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