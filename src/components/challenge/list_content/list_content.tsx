import React, { useState, useEffect } from 'react';
import * as S from './list_content.style';
import { BsCalendarRange } from 'react-icons/bs';
import { apiInstance } from '../../../utils/api';
import { ROUTE } from '../../../routes';
import { Link } from 'react-router-dom';
import ListTab from '../list_tab/list_tab';
import ChallengeBox , { sortedChallenges }from '../challenge_box/challenge_box';

interface Challenge {
  like: boolean;
  title: string;
  start_date: string;
  end_date: string;
  tag: string[];
  id: string;
  category: string;
  like_users: string;
  mainImg: string;
}

const ListContent = () => {
  const [challengeList, setChallengeList] = useState<Challenge[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleCategoryClick = (category: string) => {
    console.log(`Clicked category: ${category}`);
    setSelectedCategory(category);
    console.log(`Selected category: ${category}`);
  };
  console.log(sortedChallenges(selectedCategory, challengeList));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiInstance.get('/challenges/list');
        const data = response.data;

        if (data.length > 0) {
          const challenges = data.map((challenge: any) => ({
            like: false,
            title: challenge.title,
            start_date: new Date(challenge.start_date).toLocaleDateString(),
            end_date: new Date(challenge.end_date).toLocaleDateString(),
            tag: challenge.tag,
            id: challenge._id,
            category: challenge.category,
            like_users: challenge.like_users,
            mainImg: challenge.mainImg,
          }));

          setChallengeList(challenges);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); console.log(sortedChallenges)
  console.log('latest')
  return (
    <>
      <ListTab selectedCategory={selectedCategory} />
      <ul>
        <li onClick={() => handleCategoryClick('latest')}>최신순</li>
        <li onClick={() => handleCategoryClick('popular')}>인기순</li>
      </ul>
      <ChallengeBox
        selectedCategory={selectedCategory}
        handleCategoryClick={handleCategoryClick}
        challenges={sortedChallenges(selectedCategory, challengeList)}
      />

    </>
  );
}

export default ListContent;
