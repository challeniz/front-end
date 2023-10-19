import React, { useState, useEffect } from 'react';
import * as S from './search_page.style';
import ChallengeBox from '../challenge/challenge_box/challenge_box';
import Wrapper from '../common/wrapper/wrapper';
import Header from '../common/header/header';
import Footer from '../common/footer/footer';
import { useLocation } from 'react-router-dom';

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
const SearchResult = () => {
  const location = useLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const challenges =
    location.state && location.state.challenges
      ? location.state.challenges
      : [];

  const [noResults, setNoResults] = useState(false);
  const [searched, setSearched] = useState(true);

  useEffect(() => {
    setNoResults(challenges.length === 0);
  }, [challenges]);
  return (
    <>
      <Header />
      <Wrapper>
        {searched &&
          (noResults ? (
            <S.noResult>일치하는 챌린지가 없습니다</S.noResult>
          ) : (
            <ChallengeBox
              selectedCategory=""
              handleCategoryClick={() => {}}
              challenges={challenges}
            />
          ))}
      </Wrapper>
      <Footer />
    </>
  );
};

export default SearchResult;
