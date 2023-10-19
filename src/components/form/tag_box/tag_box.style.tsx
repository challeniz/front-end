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
  @media (max-width: 420px) {
    input {
      width: 220px;
      height: 25px;
      font-size: 10px;
      padding: 0 10px;
    }
    button {
      padding-right: 4px;
      padding-left: 4px;
      font-size: 12px;
      width: 56px;
      margin-left: 10px;
    }
`;

export const Tag = styled.div`
  border: 1px solid #797979;
  padding: 0px 16px;
  border-radius: 20px;
  margin-right: 5px;
  display: flex;
  align-items: center;
`;

export const TagListBlock = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 25px;
  position: absolute;
  top: 50px;
  left: 135px;
`;

export const Closebutton = styled.button`
  cursor: pointer;
  background-color: transparent;

  svg {
    width: 0.8em;
  }
`;
