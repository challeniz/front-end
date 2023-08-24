import React, { useState } from 'react';
import * as S from './tab_menu.style';
import ListContent from '../list_content/list_content';

export const Tab: React.FC<{ currentTab: number }> = ({
  currentTab: parentCurrentTab,
}) => {
  const [currentTab, setCurrentTab] = useState<number>(parentCurrentTab);

  const menuArr = [
    { name: '전체', content: '전체', category: '' },
    { name: '건강', content: '건강', category: '건강' },
    { name: '취미', content: '취미', category: '취미' },
    { name: '식습관', content: '식습관', category: '식습관' },
    { name: '공부', content: '공부', category: '공부' },
    { name: '환경', content: '환경', category: '환경' },
  ];

  const categoryMap: { [key: string]: number } = {
    '': 0,
    건강: 1,
    취미: 2,
    식습관: 3,
    공부: 4,
    환경: 5,
  };

  const currentCategory = categoryMap[menuArr[currentTab].category];
  console.log(currentCategory);

  const selectMenuHandler = (index: number) => {
    // parameter로 현재 선택한 인덱스 값을 전달하고 해당 인덱스를 업데이트한다
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
        <S.ContentsWrap>
          <ListContent />
        </S.ContentsWrap>
      </S.Desc>
    </div>
  );
};
