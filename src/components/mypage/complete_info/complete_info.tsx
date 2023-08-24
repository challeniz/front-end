import React from 'react';
import * as S from './complete_info.style';

const CompleteInfo = () => {
  return (
    <S.InfoWrap>
      <S.StyledImg />
      <S.InfoFlex>
        <div>
          <h3>만보 걷기 챌린지</h3>
          <h4>2023.08.01 ~ 2023.08.31</h4>
        </div>
        <S.PercentWrap>
          <p>달성률</p>
          <h5>
            100<span>%</span>
          </h5>
        </S.PercentWrap>
      </S.InfoFlex>
    </S.InfoWrap>
  );
};

export default CompleteInfo;
