import styled from 'styled-components';

export const CommentWrap = styled.div`
  display: flex;
  position: relative;
`;

//코멘트 입력창
export const CommentInput = styled.input`
  padding: 10px;
  border: none;
  text-align: left;
  font-size: 14px;
  outline: none;
  width: 100%;
  float: left;
  background-color: transparent;
  border-bottom: 1px solid #000;

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

//입력창
export const SubmitBtn = styled.button<{ isValid: boolean }>`
  position: absolute;

  font-size: 14px;
  width: 66px;
  height: 34px;
  border-radius: 10px;
  background: #d9d9d9;
  color: #111;
  border: none;
  cursor: pointer;
  right: 6px;
  bottom: 11px;
`;
export const CommentContainer = styled.div`
  padding: 0px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

//식제버튼
export const RemoveBtn = styled.button`
  background-color: transparent;
  color: #af0f0f;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;
