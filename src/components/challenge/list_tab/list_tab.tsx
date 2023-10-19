import React, { useState, useEffect } from 'react';
import * as S from './list_tab.style';
import { Challenge } from '../list_content/list_content';

interface ListTabProps {
  selectedCategory: string;
  handleCategoryClick: (category: string) => void;
  challenges: Challenge[];
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
  challenges,
}) => {
  const countChallengesByCategory = (category: string) => {
    return challenges.filter((challenge) => {
      if (category === '전체') {
        return true; 
      }
      return challenge.category === category;
    }).length;
  };

  
  const [currentCategory, setCurrentCategory] = useState('전체');
  const [challengeCount, setChallengeCount] = useState(challenges.length);

 
  useEffect(() => {
    setCurrentCategory(selectedCategory || '전체');
    setChallengeCount(countChallengesByCategory(selectedCategory || '전체'));
  }, [selectedCategory, challenges]);

  const CurrentTab = currentCategory === '' ? '전체' : currentCategory;

  return (
    <>
      <S.ListTite>
        <h2>{CurrentTab}</h2>
        <p>{challengeCount}개</p>
      </S.ListTite>
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
    </>
  );
};

export default ListTab;
