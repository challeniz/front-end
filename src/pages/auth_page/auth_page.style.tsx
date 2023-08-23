import styled from 'styled-components';

export const PageBack = styled.div`
  background-color: #f4f4f4;
`;

export const TextInput = styled.textarea`
  width: 620px;
  height: 377px;
  background-color: #f1f1f1;
  border: 1px solid #339af0;
  border-radius: 10px;
  padding: 20px;
  font-size: 18px;
`;

export const AuthWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    width: 620px;
    height: 377px;
    background-color: #d9d9d9;
    border: none;
  }
`;
export const H2Styled = styled.div`
  font-size: 30px;
  font-weight: 700;
  padding: 0 0 38px;
`;
export const FormCancelButton = styled.button`
  cursor: pointer;
  width: 620px;
  padding: 30px 0;
  text-align: center;
  border: 1px solid #a9a9a9;
  border-radius: 10px;
  background-color: #fff;
  font-size: 20px;
  font-weight: 500;
`;
export const FormSubmitButton = styled.button`
  cursor: pointer;
  width: 620px;
  padding: 30px 0;
  text-align: center;
  border: 1px solid #339af0;
  border-radius: 10px;
  background-color: #339af0;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;
export const FormButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 38px;
`;
