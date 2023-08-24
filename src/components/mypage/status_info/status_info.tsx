import React from 'react';
import * as S from './status_info.style';

const StatusInfo = () => {
  return (
    <S.InfoWrap>
      <S.StyledImg />
      <S.InfoFlex>
        <div>
          <S.TagEdit>
            <a>수정</a>
            <a>삭제</a>
          </S.TagEdit>
          <h3>만보 걷기 챌린지</h3>
          <h4>2023.08.01 ~ 2023.08.31</h4>
        </div>
        <S.PercentWrap>
          <p>달성률</p>
          <h5>
            70<span>%</span>
          </h5>
        </S.PercentWrap>
      </S.InfoFlex>
      <S.ButtonAuth>챌린지 인증하기</S.ButtonAuth>
    </S.InfoWrap>
  );
};

export default StatusInfo;
