import React, { useState, useEffect } from 'react';
import * as S from './mypage_tab.style';
import StatusInfo from '../status_info/status_info';
import HeartInfo from '../heart_info/heart_info';
import CompleteInfo from '../complete_info/complete_info';
import { apiInstance } from '../../../utils/api';
import AuthList from '../../common/auth_list/auth_list';

const menuArr = [
  { name: '내 챌린지 현황', content: 'Tab menu ONE' },
  { name: '내 인증 현황', content: 'Tab menu TWO' },
];

export const MyPageTab: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const selectMenuHandler = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <div>
      <S.StatusWrap>
        <h2>개설한 챌린지</h2>
        <S.StatusGrid>
          <CompleteInfo />
        </S.StatusGrid>
      </S.StatusWrap>
      <S.StatusWrap>
        <h2>참여중인 챌린지</h2>
        <S.StatusGrid>
          <StatusInfo />
        </S.StatusGrid>
      </S.StatusWrap>
      <S.StatusWrap>
        <h2>찜 한 챌린지</h2>
        <S.StatusGrid>
          <HeartInfo />
        </S.StatusGrid>
      </S.StatusWrap>
    </div>
  );
};
