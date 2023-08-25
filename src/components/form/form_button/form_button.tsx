import React, { ReactNode, MouseEvent } from 'react';
import * as S from './form_button.style';

interface FormButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
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

export const FormSubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  onClick,
  ...props
}) => {
  return (
    <S.SubmitButton {...props} onClick={onClick}>
      {children}
    </S.SubmitButton>
  );
};
