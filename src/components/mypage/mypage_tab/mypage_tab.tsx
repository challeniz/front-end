import React, { useState, useEffect } from 'react';
import * as S from './mypage_tab.style';
import StatusInfo from '../status_info/status_info';
import HeartInfo from '../heart_info/heart_info';
import CompleteInfo from '../complete_info/complete_info';
import { apiInstance } from '../../../utils/api';
import AuthList from '../../common/auth_list/auth_list';
import Badge from '../badge/badge';
import MypageCheck from '../mypage_check/mypage_check';

const menuArr = [
  { name: '내 챌린지 현황', content: 'Tab menu ONE' },
  { name: '내 등급・배지', content: 'Tab menu TWO' },
  { name: '내 인증 현황', content: 'Tab menu TWO' },
];

export const MyPageTab: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const selectMenuHandler = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <div>
      <S.TabMenu>
        {menuArr.map((el, index) => (
          <li
            className={index === currentTab ? 'submenu focused' : 'submenu'}
            onClick={() => selectMenuHandler(index)}
            key={el.name}
          >
            {el.name}
          </li>
        ))}
      </S.TabMenu>

      {currentTab === 0 && (
        <S.Wrap>
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
          <S.StatusWrap>
            <h2>완료된 챌린지</h2>
            <S.StatusGrid>
              <CompleteInfo />
            </S.StatusGrid>
          </S.StatusWrap>
        </S.Wrap>
      )}

      {currentTab === 1 && (
        <>
          <S.StatusWrap>
            <h2>현재 등급</h2>
            <S.StatusGrid>
              <StatusInfo />
            </S.StatusGrid>
          </S.StatusWrap>
          <S.StatusWrap>
            <h2>획득한 배지</h2>
            <S.StatusGrid>
              <Badge />
            </S.StatusGrid>
          </S.StatusWrap>
        </>
      )}
      {currentTab === 2 && (
        <>
          <MypageCheck />
        </>
      )}
    </div>
  );
};
