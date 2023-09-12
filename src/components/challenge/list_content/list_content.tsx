// list_content.tsx
import React, { useState, useEffect } from 'react';
import * as S from './list_content.style';
import { BsCalendarRange } from 'react-icons/bs';
import { apiInstance } from '../../../utils/api';
import { ROUTE } from '../../../routes';
import { Link } from 'react-router-dom';
import ListTab from '../list_tab/list_tab';
import ChallengeBox from '../challenge_box/challenge_box';

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
    setSelectedCategory(category);
    let sortedChallenges: Challenge[] = [];
  
    if (category === 'popular') {
      sortedChallenges = challengeList.slice().sort((a, b) => b.like_users.length - a.like_users.length);
    } else if (category === 'latest') {
      sortedChallenges = challengeList.slice().sort((a, b) => new Date(b.start_date).getTime() - new Date(a.start_date).getTime());
    }
  
    setSortedChallenges(sortedChallenges);
  };

  const [sortedChallenges, setSortedChallenges] = useState<Challenge[]>([]);
  
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
          }));

          setChallengeList(challenges);
          setSortedChallenges(challenges); 
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
console.log(setSortedChallenges(challengeList))
  return (
    <>
      <ListTab selectedCategory={selectedCategory} />
      <ul>
        <li onClick={() => handleCategoryClick('latest')}>최신순</li>
        <li onClick={() => handleCategoryClick('popular')}>인기순</li>
      </ul>
    {sortedChallenges&& (
  <ChallengeBox
    selectedCategory={selectedCategory}
    handleCategoryClick={handleCategoryClick}
    challenges={challengeList} 
  />
)}
    </>
  );
} 

export default ListContent;
