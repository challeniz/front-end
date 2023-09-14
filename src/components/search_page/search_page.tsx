/* eslint-disable no-template-curly-in-string */
import React, { useState, useEffect } from 'react';
import * as S from './search_page.style';
import { apiInstance } from '../../utils/api';
import ChallengeBox from '../../components/challenge/challenge_box/challenge_box';
import Wrapper from '../../components/common/wrapper/wrapper';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';

export interface Challenge {
  like: boolean;
  title: string;
  start_date: string;
  end_date: string;
  tag: string[];
  id: string;
  category: string;
  mainImg: string; 
  like_users:string햐
}

interface ChallengeBoxProps {
  selectedCategory: string;
  handleCategoryClick: (category: string) => void;
}

const SearchPage = () => {
  const [inputValue, setInputValue] = useState('');
  const[challengeList, setChallengeList] = useState<Challenge[]>([])
  const [noResults, setNoResults] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      return;
    }

    try {
     
      const response = await apiInstance.get(`challenges/list/search?title=${inputValue}`);
      const data = response.data;

      const filteredChallenges = data.filter(
        (challenge: Challenge) =>
          challenge.title.includes(inputValue) ||
          challenge.title.toLowerCase().includes(inputValue.toLowerCase())
      );

      setChallengeList(filteredChallenges);
      setNoResults(filteredChallenges.length === 0);
      setSearched(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      {/* <Header />*/}
    
        <S.Search>
          <S.SearchTitle>
            찾고 있는 <S.SearchTitleColor>챌린지</S.SearchTitleColor>를
            검색해보세요!
          </S.SearchTitle>
          <S.SearchBox>
            <form onSubmit={handleSubmit}>
              <S.SearchBoxInput
                type="text"
                placeholder="찾고 싶은 챌린지 이름을 검색하세요."
                value={inputValue}
                onChange={handleInputChange}
              />
              <button type="submit">
                <S.StyledCiSearch />
              </button>
            </form>
          </S.SearchBox>
          <S.SearchBox>
            <S.KeywordWrap>
              <h5>추천 키워드</h5>
              <p>#걷기</p>
              <p>#물마시기</p>
              <p>#영어공부</p>
              <p>#운동</p>
            </S.KeywordWrap>
          </S.SearchBox>
        </S.Search>
  <Wrapper> 
        {searched &&
          (noResults ? (
            <S.noResult>일치하는 챌린지가 없습니다</S.noResult>
          ) : (
            
            <ChallengeBox
              selectedCategory={''}
              handleCategoryClick={() => {}}
              filteredChallenges={challengeList} 
            />
          ))}
    </Wrapper>
       {/*  <Footer /> */}
    </>
  );
};

export default SearchPage;