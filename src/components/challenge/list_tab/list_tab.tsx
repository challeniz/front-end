import React from 'react';
import * as S from './list_tab.style';

interface ListTabProps {
  selectedCategory: string; // ListContent 컴포넌트에서 전달된 선택된 카테고리
  handleCategoryClick: (category: string) => void; // ListContent 컴포넌트로부터 전달된 함수
}

const menuArr = [
  { name: '전체', content: '전체', category: '' },
  { name: '건강', content: '건강', category: '건강' },
  { name: '취미', content: '취미', category: '취미' },
  { name: '식습관', content: '식습관', category: '식습관' },
  { name: '공부', content: '공부', category: '공부' },
  { name: '환경', content: '환경', category: '환경' },
];

const ListTab: React.FC<ListTabProps> = ({
  selectedCategory,
  handleCategoryClick,
}) => {
  return (
    <S.TabMenu>
      {menuArr.map((menu, index) => (
        <li
          key={index}
          className={
            selectedCategory === menu.category ? 'submenu focused' : 'submenu'
          }
          onClick={() => handleCategoryClick(menu.category)}
        >
          {menu.name}
        </li>
      ))}
    </S.TabMenu>
  );
};

export default ListTab;
