import { CiCalendarDate, CiUser } from 'react-icons/ci';
import styled from 'styled-components';

export const PageBack = styled.div`
  background-color: #f4f4f4;
`;

export const InputContent = styled.div`
  display: flex;
  margin-bottom: 25px;
  align-items: center;
  &.flex-start {
    align-items: flex-start;
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

  &:focus {
    outline: none;
  }
`;

export const ImgWrap = styled.div`
  width: 454px;
  height: 270px;
  background-color: #d9d9d9;
  margin-right: 60px;
  border-right: 1px solid #d9d9d9;
`;

export const ContentWrap = styled.div`
  display: flex;
`;
export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  h5 {
    font-size: 15px;
    font-weight: 400;
    padding-bottom: 15px;
    display: flex;
    align-items: center;
  }
  h2 {
    font-size: 35px;
    font-weight: 700;
    padding-bottom: 15px;
  }
  h4 {
    color: #5e5e5e;
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    white-space: pre-line;
  }
  h6 {
    margin-top: auto;
    font-weight: 400;
    display: flex;
    align-items: center;
  }
`;

export const StyledCiUser = styled(CiUser)`
  padding-right: 5px;
  width: 1.8em;
  height: 1.8em;
`;

export const StyledCiCalendar = styled(CiCalendarDate)`
  padding-right: 5px;
  width: 1.8em;
  height: 1.8em;
`;
