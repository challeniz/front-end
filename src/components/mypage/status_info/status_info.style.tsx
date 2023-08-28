import styled from 'styled-components';

export const InfoFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const StyledImg = styled.div`
  width: 300px;
  height: 117px;
  background-color: #d9d9d9;
  border-radius: 10px;
  margin-bottom: 14px;
`;

export const TagEdit = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  a {
    font-size: 14px;
    padding: 5px 13px;
    background-color: #ccc;
    border-radius: 5px;
    margin-right: 8px;
    cursor: pointer;
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
`;

export const PercentWrap = styled.div`
  display: flex;
  flex-direction: column;

  p {
    padding-bottom: 15px;
  }

  h5 {
    font-size: 38px;

    span {
      font-size: 18px;
      font-weight: 500;
    }
  }
`;

export const ButtonAuth = styled.div`
  border-radius: 10px;
  border: 1px solid #339af0;
  width: 100%;
  font-size: 18px;
  text-align: center;
  padding: 16px 0;
  cursor: pointer;

  &:hover {
    background-color: #339af0;
    color: #fff;
  }
`;
