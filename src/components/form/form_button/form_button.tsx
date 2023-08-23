import React, { ReactNode } from 'react';
import * as S from './form_button.style';

interface FormButtonProps {
  children: ReactNode;
}

interface CancelButtonProps extends FormButtonProps {}

interface SubmitButtonProps extends FormButtonProps {}

export const FormButton: React.FC<FormButtonProps> = ({ children }) => {
  return <S.FormButtonWrap>{children}</S.FormButtonWrap>;
};

export const FormCancelButton: React.FC<CancelButtonProps> = ({ children }) => {
  const handleCancel = () => {
    if (window.confirm('작업을 취소하시겠습니까?')) {
      window.location.href = '/';
    }
  };
  return <S.CancelButton onClick={handleCancel}>{children}</S.CancelButton>;
};

export const FormSubmitButton: React.FC<SubmitButtonProps> = ({ children }) => {
  return <S.SubmitButton>{children}</S.SubmitButton>;
};
