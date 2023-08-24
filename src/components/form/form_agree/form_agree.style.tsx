import styled from 'styled-components';

export const AgreeBox = styled.div`
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  margin-top: 30px;
  padding: 20px 25px;

  .agree-title {
    font-weight: bold;
    font-size: 14px;
    color: #269400;
    background-color: #d1f3c5;
    border-radius: 15px;
    padding: 0px 12px;
    width: 74px;
    margin-bottom: 20px;
  }

  input {
    float: left;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    background-color: #e8e8e8;
    margin-right: 10px;
  }

  .agree-text {
    font-weight: 600;
  }
`;
export const StyledUl = styled.ul`
  margin-left: 20px;
  color: #545454;
  list-style: disc;
`;
