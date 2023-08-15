import React, { ReactNode } from 'react';
import styled from 'styled-components';

const BaseButton = styled.button`
  border-radius: 10px;
  padding: 18px 52px;
  border: none;
  cursor:pointer;
  font-size:18px;
`;

const FormButtonWrap = styled.div`
  display:flex;
  justify-content:center;
`

const CancelButton = styled(BaseButton)`
  background-color: #e0e0e0;
`;

const SubmitButton = styled(BaseButton)`
  background-color: #339af0;
  color: white;
  margin-left:30px;
  font-weight:600;
`;

interface FormButtonProps {
  children: ReactNode;
}

interface CancelButtonProps extends FormButtonProps {}

interface SubmitButtonProps extends FormButtonProps {}

export const FormButton: React.FC<FormButtonProps> = ({ children }) => {
  return (
    <FormButtonWrap>
      {children}
    </FormButtonWrap>
  );
};

export const FormCancelButton: React.FC<CancelButtonProps> = ({ children }) => {
  const handleCancel = () => {
    if (window.confirm('챌린지 개설을 취소하시겠습니까?')) {
      window.location.href = '/';
    }
  };
  return (
    <CancelButton onClick={handleCancel}>
      {children}
    </CancelButton>
  );
};

export const FormSubmitButton: React.FC<SubmitButtonProps> = ({ children }) => {
  return (
    <SubmitButton>
      {children}
    </SubmitButton>
  );
};
