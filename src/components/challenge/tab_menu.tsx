import React, { useState } from 'react';
import styled from 'styled-components';
import ListContent from './list_content';


const TabMenu = styled.ul`
  border-bottom:1px solid #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-bottom: 60px;
  margin-top: 10px;
  justify-contents:center;

  .submenu {
    display: flex;
    padding: 0 20px 15px;
    font-size: 20px;
    border-radius: 10px 10px 0px 0px;
    text-align:center;
    color:#787878;
    cursor:pointer;
    font-weight:600;
  }

  .focused {
    color:#339af0;
    position:relative;
    font-weight:600;

    &::before {
      content:'';
      position:absolute;
      bottom:-3px;
      left:0;
      width:100%;
      background-color:#339af0;
      height:5px;
      border-radius:10px;
    }
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: center;
`;

const ContentsWrap = styled.div`
  display:grid;
  grid-template-columns: repeat(4, 1fr);
`

export const Tab: React.FC = () => {
  // Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한 currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0.
  const [currentTab, clickTab] = useState<number>(0);

  const menuArr = [
    { name: '전체', content: 'Tab menu ONE' },
    { name: '건강', content: 'Tab menu TWO' },
    { name: '습관', content: 'Tab menu THREE' },
    { name: '취미', content: 'Tab menu FOUR' },
    { name: '공부', content: 'Tab menu FIVE' },
    { name: '기타', content: 'Tab menu SIX' },
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
        <ContentsWrap>
          <ListContent />
          <ListContent />
          <ListContent />
          <ListContent />
        </ContentsWrap>
      </Desc>
    </div>
  );
};
