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
  mainImg: string;
  like_users: string;
}

const ListContent = () => {
  const [challengeList, setChallengeList] = useState<Challenge[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);
    console.log(selectedValue); // 이 줄을 추가하여 선택한 값을 콘솔에 출력합니다.
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };
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
        }
      } catch (error) {
        console.error('데이터 불러오기 오류:', error);
      }
    };

    fetchData();
  }, []);

  const sortChallenges = (challenges: Challenge[], category: string) => {
    if (category === 'popularity') {
      return challenges
        .slice()
        .sort((a, b) => b.like_users.length - a.like_users.length);
    } else if (category === 'latest') {
      return challenges
        .slice()
        .sort(
          (a, b) =>
            new Date(b.start_date).getTime() - new Date(a.start_date).getTime()
        );
    }
    return challenges;
  };

  const sortedChallenges = sortChallenges(challengeList, selectedCategory);
  console.log('데이터확인', sortedChallenges);
  console.log('selectedCategory:', selectedCategory);

  return (
    <>
      <ListTab selectedCategory={selectedCategory} />

      <select onChange={handleSelectChange}>
        <option value="latest">최신순</option>
        <option value="popularity">인기순</option>
      </select>

      <ChallengeBox
        selectedCategory={selectedCategory}
        handleCategoryClick={handleCategoryClick}
        challenges={challengeList}
        filteredChallenges={challengeList}
      />
    </>
  );
};

export default ListContent;
