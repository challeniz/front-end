import React from 'react';
import styled from 'styled-components';

const InfoFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const StyledImg = styled.div`
  width: 300px;
  height: 117px;
  background-color: #d9d9d9;
  border-radius: 10px;
  margin-bottom: 14px;
`;

const TagEdit = styled.div`
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

const InfoWrap = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
`;

const PercentWrap = styled.div`
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

const ButtonAuth = styled.div`
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

const StatusInfo = () => {
  return (
    <InfoWrap>
      <StyledImg />
      <InfoFlex>
        <div>
          <TagEdit>
            <a>수정</a>
            <a>삭제</a>
          </TagEdit>
          <h3>만보 걷기 챌린지</h3>
          <h4>2023.08.01 ~ 2023.08.31</h4>
        </div>
        <PercentWrap>
          <p>달성률</p>
          <h5>
            70<span>%</span>
          </h5>
        </PercentWrap>
      </InfoFlex>
      <ButtonAuth>챌린지 인증하기</ButtonAuth>
    </InfoWrap>
  );
};

export default StatusInfo;
