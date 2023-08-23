import styled from 'styled-components';

//코멘트 입력창
export const CommentInput = styled.input`
  padding: 10px;
  border: none;
  text-align: left;
  font-size: 14px;
  outline: none;
  width: 100%;
  background-color: transparent;
  border-bottom: 1px solid #000;
  margin-top: 10px;
  ::placeholder {
    color: #999;
  }
`;
export const H2Styled = styled.h2`
  font-size: 25px;
  padding-bottom: 25px;
  font-weight: 700;
  text-align: left;
`;

export const CommentWrap = styled.div`
  display: flex;
`;

//입력창
export const SubmitBtn = styled.button<{ isValid: boolean }>`
  position: relative;
  left: -58px;
  font-size: 14px;
  width: 66px;
  height: 34px;
  border-radius: 10px;
  background: #d9d9d9;
  color: #111;
  border: none;
  cursor: pointer;
`;
export const CommentContainer = styled.div`
  padding: 0px;
`;

//식제버튼
export const RemoveBtn = styled.button`
  background-color: transparent;
  color: #af0f0f;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;
