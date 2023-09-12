import React from 'react';
import * as S from './list_tab.style';
import { Link, useLocation } from 'react-router-dom'; // useLocation 추가
import { ROUTE } from '../../../routes';

interface ListTabProps {
  selectedCategory: string;
}

const menuArr = [
  { name: '전체', content: '전체', category: '' },
  { name: '건강', content: '건강', category: '건강' },
  { name: '취미', content: '취미', category: '취미' },
  { name: '식습관', content: '식습관', category: '식습관' },
  { name: '공부', content: '공부', category: '공부' },
  { name: '환경', content: '환경', category: '환경' },
];

const ListTab: React.FC<ListTabProps> = ({ selectedCategory }) => {
  const location = useLocation();

  // URL 파라미터에서 category 값을 가져오기
  const currentCategory = new URLSearchParams(location.search).get('category');

  return (
    <S.TabMenu>
      {menuArr.map((menu, index) => (
        <li
          key={index}
          className={
            currentCategory === menu.category ? 'submenu focused' : 'submenu'
          }
        >
          <Link
            to={
              menu.category
                ? `${ROUTE.LISTPAGE.link}?category=${menu.category}`
                : ROUTE.LISTPAGE.link
            }
          >
            {menu.name}
          </Link>
        </li>
      ))}
     

    </S.TabMenu>
  );
};

export default ListTab;
