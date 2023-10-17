import styled from 'styled-components';

export const BaseButton = styled.button`
  border-radius: 10px;
  padding: 18px 52px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  @media (min-width:370px) {
    padding: 10px 42px;
    font-size: 16px;
  }
`;

export const FormButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const CancelButton = styled(BaseButton)`
  background-color: #e0e0e0;
`;

export const SubmitButton = styled(BaseButton)`
  background-color: #339af0;
  color: white;
  margin-left: 30px;
  font-weight: 600;

`;
