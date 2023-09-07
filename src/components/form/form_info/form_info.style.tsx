import styled from 'styled-components';

export const InputContent = styled.div`
  display: flex;
  margin-bottom: 25px;
  align-items: center;
  &.flex-start {
    align-items: flex-start;
  }
  &.formDate {
    margin-bottom: 80px;
  }
`;

export const LabelStyled = styled.label`
  font-size: 18px;
  width: 160px;
`;

export const InputStyled = styled.input`
  width: 406px;
  height: 45px;
  background-color: #f6f6f6;
  border-radius: 5px;
  border: 1px solid #cfcfcf;
  font-size: 16px;
  padding: 0 15px;
`;

export const SelectStyled = styled.select`
  width: 406px;
  height: 45px;
  background-color: #f6f6f6;
  border-radius: 5px;
  border: 1px solid #cfcfcf;
  font-size: 16px;
  padding: 0 15px;
`;

export const TextareaStyled = styled.textarea`
  width: 406px !important;
  height: 220px !important;
  background-color: #f6f6f6;
  border-radius: 5px;
  border: 1px solid #cfcfcf;
  font-size: 16px;
  padding: 10px 15px;
  resize: none;
`;

export const SpanStyled = styled.span`
  font-size: 13px;
`;

export const AvatarWrapper = styled.div`
  width: 406px;
  height: 226px;
  border: 1px solid #cfcfcf;
  border-radius: 10px;
  overflow: hidden;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 999;
`;

export const InputImg = styled.input`
  margin-left: -400px;
  margin-top: -200px;
`;
