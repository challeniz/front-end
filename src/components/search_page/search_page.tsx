/* eslint-disable no-template-curly-in-string */
import React, { useState, useEffect, useRef } from 'react';
import * as S from './search_page.style';
import { apiInstance } from '../../utils/api';
import { useLocation, Link, useNavigate } from 'react-router-dom';

export interface Challenge {
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

interface ChallengeBoxProps {
  selectedCategory: string;
  handleCategoryClick: (category: string) => void;
}

const SearchPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [challengeList, setChallengeList] = useState<Challenge[]>([]);
  const [noResults, setNoResults] = useState(false);
  const [searched, setSearched] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const searchBoxRef = useRef<HTMLDivElement>(null);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      return;
    }

    try {
      const response = await apiInstance.get(
        `challenges/list/search?title=${inputValue}`
      );
      const data = response.data;

      const filteredChallenges = data.filter(
        (challenge: Challenge) =>
          challenge.title.includes(inputValue) ||
          challenge.title.toLowerCase().includes(inputValue.toLowerCase())
      );

      setChallengeList(filteredChallenges);
      setNoResults(filteredChallenges.length === 0);
      setSearched(true);

      location.pathname = '/results';
      location.state = { challenges: filteredChallenges };
      navigate('/results', { state: { challenges: filteredChallenges } });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <S.SearchBox>
        <form onSubmit={handleSubmit}>
          <S.SearchBoxInput
            type="text"
            placeholder="찾고 싶은 챌린지를 검색하세요."
            value={inputValue}
            onChange={handleInputChange}
          />
          <S.Button type="submit">
            <S.StyledCiSearch />
          </S.Button>
        </form>
      </S.SearchBox>
    </>
  );
};

export default SearchPage;
