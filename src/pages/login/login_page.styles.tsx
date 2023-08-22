import styled from "styled-components";

// 회원 로그인 메인 글
export const Memvership = styled.div`
  font-size: 35px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  padding-top: 60px;
`;

// 이메일 주소, 비밀번호 전체 틀
export const EmailPW = styled.div`
  margin: 70px auto 0;
  width: 400px;
`;

// 이메일주소 , 비밀번호
export const InputTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-top: 26px;
  color: #262626;
  padding-bottom: 6px;
`;

//이메일, 비밀번호 입력창 틀
export const InputWrap = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  width: 400px;
  padding: 16px;
  border: 1px solid #e2e0e0;
  background-color: white;
  border-radius: 10px;

  &:focus-within {
    border: 1.5px solid #339af0;
  }
`;

//이메일, 비밀번호 입력창
export const Input = styled.input`
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

//버튼 정렬해주는 기능
export const BtnCenter = styled.div`
  display: flex;
  justify-content: center;
`;

//이메일, 비밀번호 입력 후 로그인 submit 버튼
export const SubmitBtn = styled.button`
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
export const NoMemberShipWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

//계정이 없으신가요 텍스트
export const NoMemberShip = styled.p`
  font-size: 18px;
  margin-right: 30px;
`;

// 회원가입 btn -> 클릭 시 회원가입 페이지로 리로드
export const JoinMemberBtn = styled.p`
  color: #339af0;
  font-size: 18px;
  margin-right: 15px;
  font-weight: bold;
  cursor: pointer;
`;

// //소셜로그인
// const SocialLogin = styled.div`
//   display: flex;
//   justify-content: center;
//   font-size: 25px;
//   font-weight: 500;
//   margin-top: 50px;
//   color: #339af0;
// `;

// //소셜 로그인 아이콘 틀
// const IconWrap = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 30px;
// `;

// //카카오 로그인 아이콘
// const Kakao = styled.image`
//   flex-wrap: nowrap;

//   img {
//     width: 80px;
//     height: 80px;
//     margin-right: 50px;
//   }
// `;

// //구글 로그인 아이콘
// const Google = styled.image`
//   flex-wrap: nowrap;

//   img {
//     width: 80px;
//     height: 80px;
//     margin-right: 20px;
//   }
// `;
