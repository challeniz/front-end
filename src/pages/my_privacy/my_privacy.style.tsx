import styled from 'styled-components';

export const MyWrap = styled.div`
  padding-top: 100px;
`;

export const PrivacyWrap = styled.div`
  padding-top: 100px;
`;

export const StyleH1 = styled.h1`
  font-size: 38px;
  padding-bottom: 30px;
`;

export const InfoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 60px;
  h3 {
    font-size: 30px;
    font-weight: 600;
  }
  h4 {
    font-size: 20px;
    font-weight: normal;
    border-bottom: 1px solid #000;
    cursor: pointer;
  }
`;

export const InfoBox = styled.div``;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const CorrectionButton = styled.button`
  padding: 18px 52px;
  background-color: #339af0;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 10px;
  text-align: center;
`;

export const BackButton = styled.button`
  padding: 18px 52px;
  background-color: #fff;
  color: #339af0;
  border: 1px solid #339af0;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 10px;
  text-align: center;
  margin-right: 15px;
`;

export const InfoTxt = styled.li`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
  input {
    display: block;
    font-weight: normal;
    margin-top: 25px;
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 8px;
    border-right: none;
    border-top: none;
    border-left: none;
    font-size: 18px;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
`;

//이메일, 비밀번호 에러 메세지
export const ErrorMessageWrap = styled.div`
  margin-top: 10px;
  color: #ef0000;
  font-size: 14px;
`;
