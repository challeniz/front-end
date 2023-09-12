import styled from 'styled-components';

export const WeekWrap = styled.div`
  position: relative;
`;

export const Button = styled.button`
  cursor: pointer;
  border: 1px solid #c0c0c0;
  border-radius: 25px;
  padding: 12px 20px;

  &.selected {
    background-color: #339af0;
    color: #fff;
    border: 1px solid #339af0;
  }
  & + & {
    margin: 0 5px;
  }
  &:nth-child(1) {
    margin-right: 5px;
  }
`;

export const Label = styled.label`
  position: absolute;
  bottom: -61px;
  left: 0;
  font-size: 14px;
  color: #090000;
  background-color: #eee;
  padding: 10px 22px;
  border-radius: 10px;
  font-size: 17px;
`;
