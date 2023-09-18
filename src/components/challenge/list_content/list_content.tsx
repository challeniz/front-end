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
  const [selectedSort, setSelectedSort] = useState<string>('latest'); // 초기 정렬 방식 설정
  const [filteredChallenges, setFilteredChallenges] = useState<Challenge[]>([]); // filteredChallenges 상태 추가

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedSort(selectedValue); // 선택한 정렬 방식 업데이트
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const sortChallenges = (challenges: Challenge[], category: string) => {
    if (category === 'popularity') {
      return challenges
        .slice()
        .sort((a, b) => b.like_users.length - a.like_users.length);
    } else if (category === 'alphabetical') {
      return challenges.slice().sort((a, b) => a.title.localeCompare(b.title));
    }
    return challenges;
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

  useEffect(() => {
    // 정렬 방식에 따라 데이터를 필터링
    const filtered = sortChallenges(challengeList, selectedSort);
    setFilteredChallenges(filtered);
  }, [selectedSort, challengeList]);

  return (
    <>
      {/* <ListTab selectedCategory={selectedCategory} /> */}

      <select onChange={handleSelectChange} value={selectedSort}>
        <option value="popularity">인기순</option>
        <option value="alphabetical">가나다순</option>
      </select>

      <ChallengeBox
        selectedCategory={selectedCategory}
        handleCategoryClick={handleCategoryClick}
        challenges={challengeList}
        filteredChallenges={filteredChallenges}
      />
    </>
  );
};

export default ListContent;
