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

const CompleteInfo = () => {
  return (
    <InfoWrap>
      <StyledImg />
      <InfoFlex>
        <div>
          <h3>만보 걷기 챌린지</h3>
          <h4>2023.08.01 ~ 2023.08.31</h4>
        </div>
        <PercentWrap>
          <p>달성률</p>
          <h5>
            100<span>%</span>
          </h5>
        </PercentWrap>
      </InfoFlex>
    </InfoWrap>
  );
};

export default CompleteInfo;
