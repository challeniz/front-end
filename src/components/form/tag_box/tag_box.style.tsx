import styled from 'styled-components';

export const TagBoxBlock = styled.div``;

export const TagForm = styled.form`
  display: flex;

  input,
  button {
    outline: none;
    border: none;
    font-size: 1rem;
  }

  input {
    width: 406px;
    height: 45px;
    background-color: #f6f6f6;
    border-radius: 5px;
    border: 1px solid #cfcfcf;
    font-size: 16px;
    padding: 0 15px;
  }
  button {
    cursor: pointer;
    padding-right: 2rem;
    padding-left: 2rem;
    border: none;
    margin-left: 15px;
    background-color: #339af0;
    border-radius: 8px;
    color: white;
    font-weight: bold;
    &:hover {
    }
  }
`;

export const Tag = styled.div`
  background: #000000;
  padding: 0px 16px;
  border-radius: 20px;
  color: #fff;
  margin-right: 5px;
  &:hover {
    opacity: 0.5;
  }
`;

export const TagListBlock = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 25px;
`;
