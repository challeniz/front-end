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

const InfoWrap = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
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

const HeartInfo = () => {
  return (
    <InfoWrap>
      <StyledImg />
      <InfoFlex>
        <div>
          <h3>만보 걷기 챌린지</h3>
          <h4>2023.08.01 ~ 2023.08.31</h4>
        </div>
      </InfoFlex>
      <ButtonAuth>챌린지 참여하기</ButtonAuth>
    </InfoWrap>
  );
};

export default HeartInfo;
