import React from 'react';
import * as S from './heart_info.style';

const HeartInfo = () => {
  return (
    <S.InfoWrap>
      <S.StyledImg />
      <S.InfoFlex>
        <div>
          <h3>만보 걷기 챌린지</h3>
          <h4>2023.08.01 ~ 2023.08.31</h4>
        </div>
      </S.InfoFlex>
      <S.ButtonAuth>챌린지 참여하기</S.ButtonAuth>
    </S.InfoWrap>
  );
};

export default HeartInfo;
