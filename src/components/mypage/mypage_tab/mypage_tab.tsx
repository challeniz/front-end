import React, { useState, useEffect } from 'react';
import * as S from './mypage_tab.style';
import StatusInfo from '../status_info/status_info';
import HeartInfo from '../heart_info/heart_info';
import CompleteInfo from '../complete_info/complete_info';
import { apiInstance } from '../../../utils/api';

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
      <S.Desc>
        {currentTab === 0 ? (
          // 상세 설명 내용
          <>
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
              <h2>완료한 챌린지</h2>
              <S.StatusGrid>
                <CompleteInfo />
              </S.StatusGrid>
            </S.StatusWrap>
          </>
        ) : (
          // 인증 목록 내용
          <S.StatusWrap>
            <S.AuthInfo>
              <div>
                <h4>모은 스탬프</h4>
                <h3>8개</h3>
              </div>
              <div>
                <h4>내 등급</h4>
                <h3>신입 챌리니</h3>
              </div>
              <div>
                <h4>다음 등급까지 남은 스탬프</h4>
                <h3>22개</h3>
              </div>
            </S.AuthInfo>
            {/* <AuthList /> */}
          </S.StatusWrap>
        )}
      </S.Desc>
    </div>
  );
};
