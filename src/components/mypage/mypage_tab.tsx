import React, { useState } from 'react';
import styled from 'styled-components';
import StatusInfo from './status_info';
import HeartInfo from './heart_info';
import CompleteInfo from './complete_info';
import AuthList from '../common/auth_list/auth_list';

const TabMenu = styled.ul`
  border-bottom: 1px solid #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-bottom: 20px;
  margin-top: 10px;
  justify-content: left;
  width: 100%;

  .submenu {
    display: flex;
    padding: 0 20px 15px;
    font-size: 20px;
    border-radius: 10px 10px 0px 0px;
    text-align: left;
    color: #787878;
    cursor: pointer;
    font-weight: 600;
    justify-content: center;
    width: calc(100% / 2);
  }

  .focused {
    color: #339af0;
    position: relative;
    font-weight: 600;

    &::before {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      background-color: #339af0;
      height: 5px;
      border-radius: 10px;
    }
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: left;
`;

const StatusWrap = styled.div`
  padding-top: 70px;
  h2 {
    font-size: 24px;
    padding-bottom: 23px;
  }
  h3 {
    font-size: 18px;
    font-weight: 400;
    padding-bottom: 10px;
  }
  h4 {
    font-size: 14px;
    font-weight: 400;
  }
`;

const StatusGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
`;

const AuthInfo = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 40px;


  h4{
    font-size:18px;
    font-weight:500;
    padding-bottom:10px;
    text-align:center;
  }
  h3 {
    text-align:center;
    font-size: 31px;
    font-weight: 600;
  }
  }
`;

export const MyPageTab: React.FC = () => {
  // Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한 currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0.
  const [currentTab, clickTab] = useState<number>(0);

  const menuArr = [
    { name: '내 챌린지 현황', content: 'Tab menu ONE' },
    { name: '내 인증 현황', content: 'Tab menu TWO' },
  ];

  const selectMenuHandler = (index: number) => {
    // parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않는다
    // 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신.
    clickTab(index);
  };

  return (
    <div>
      <TabMenu>
        {menuArr.map((el, index) => (
          <li
            className={index === currentTab ? 'submenu focused' : 'submenu'}
            onClick={() => selectMenuHandler(index)}
            key={el.name}
          >
            {el.name}
          </li>
        ))}
      </TabMenu>
      <Desc>
        {currentTab === 0 ? (
          // 상세 설명 내용
          <>
            <StatusWrap>
              <h2>참여중인 챌린지</h2>
              <StatusGrid>
                <StatusInfo />
                <StatusInfo />
                <StatusInfo />
                <StatusInfo />
              </StatusGrid>
            </StatusWrap>
            <StatusWrap>
              <h2>찜 한 챌린지</h2>
              <StatusGrid>
                <HeartInfo />
              </StatusGrid>
            </StatusWrap>
            <StatusWrap>
              <h2>완료한 챌린지</h2>
              <StatusGrid>
                <CompleteInfo />
              </StatusGrid>
            </StatusWrap>
          </>
        ) : (
          // 인증 목록 내용
          <StatusWrap>
            <AuthInfo>
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
            </AuthInfo>
            <AuthList />
          </StatusWrap>
        )}
      </Desc>
    </div>
  );
};
