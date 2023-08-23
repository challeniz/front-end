import React, { useState } from 'react';
import * as S from './tab_menu.style';
import ListContent from '../list_content/list_content';
import challengeData from '../../../data/data.json';

export const Tab: React.FC<{ currentTab: number }> = ({
  currentTab: parentCurrentTab,
}) => {
  // Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한 currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0.
  const [currentTab, clickTab] = useState<number>(parentCurrentTab);

  const menuArr = [
    { name: '전체', content: '전체', category: '' },
    { name: '건강', content: '건강', category: '건강' },
    { name: '취미', content: '취미', category: '취미' },
    { name: '식습관', content: '식습관', category: '식습관' },
    { name: '공부', content: '공부', category: '공부' },
    { name: '환경', content: '환경', category: '환경' },
  ];

  // 클릭된 탭의 인덱스에 해당하는 카테고리 정보를 가져옴
  const currentCategory = menuArr[currentTab].category;

  const selectMenuHandler = (index: number) => {
    // parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않는다
    // 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신.
    clickTab(index);
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
        <S.ContentsWrap>
          {challengeData
            .filter(
              (challenge) =>
                currentCategory === '' || challenge.category === currentCategory
            )
            .map((challenge) => (
              <ListContent key={challenge.title} challenge={challenge} />
            ))}
        </S.ContentsWrap>
      </S.Desc>
    </div>
  );
};
