import React, { useState, useRef, useEffect } from 'react';
import * as S from './main_page.style';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import SlideBnner from '../../components/common/slide/slide';
import Wrapper from '../../components/common/wrapper/wrapper';
import ChallengeBox, {
  Challenge,
} from '../../components/challenge/challenge_box_main/challenge_box_main';
import { apiInstance } from '../../utils/api';
import SearchPage from '../../components/search_page/search_page';
import { ROUTE } from '../../routes';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import Slider from 'react-slick';

export interface ChallengeBoxProps {
  selectedCategory: string;
  handleCategoryClick: (category: string) => void;
  challenges: [];
}

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [ongoingChallenge, setOngoingChallenge] = useState();
  const [usersChallenge, setUsersChallenge] = useState();
  const [dateChallenge, setDateChallenge] = useState();
  const [inputValue, setInputValue] = useState('');
  const [challengeList, setChallengeList] = useState();
  const [noResults, setNoResults] = useState(false);
  const [searched, setSearched] = useState(false);
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  // 필터링
  const fetchChallenges = async () => {
    try {
      const response = await apiInstance.get('/challenges');
      const ongoingChallenge = response.data.ongoingChallenge;
      setOngoingChallenge(ongoingChallenge);
      console.log(ongoingChallenge);
      const orderByUsersChallenge = response.data.orderByUsersChallenge;
      setUsersChallenge(orderByUsersChallenge);
      console.log(orderByUsersChallenge);
      const orderByDateChallenge = response.data.orderByDateChallenge;
      setDateChallenge(orderByDateChallenge);
      console.log(orderByDateChallenge);
    } catch (error) {
      console.error('Error fetching challenges:', error);
    }
  };
  console.log('메인', inputValue);
  useEffect(() => {
    fetchChallenges();
  }, []);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0px',
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <S.BackWhite>
      <Header />
      <SlideBnner />
      <SearchPage />
      <Wrapper>
        <S.ContentsList>
          <S.ProgressList>
            <li>
              <h2>🗓️ 모집/진행중인 챌린지</h2>
            </li>
            <li>
              <Link to={ROUTE.LISTPAGE.link}>
                <h3>전체보기</h3>
              </Link>
            </li>
          </S.ProgressList>

          <S.ContentsWrap>
            <Slider {...sliderSettings}>
              <ChallengeBox
                selectedCategory={selectedCategory}
                handleCategoryClick={handleCategoryClick}
                challenges={ongoingChallenge}
              />
            </Slider>
          </S.ContentsWrap>
        </S.ContentsList>
        <S.PopularList>
          <S.ProgressList>
            <li>
              <h2>
                <S.PopularListSpan>🔥HOT!</S.PopularListSpan> 인기 챌린지
              </h2>
            </li>
            <li>
              <Link to={ROUTE.LISTPAGE.link}>
                <h3>전체보기</h3>
              </Link>
            </li>
          </S.ProgressList>
          <S.ContentsWrap>
            <Slider {...sliderSettings}>
              <ChallengeBox
                selectedCategory={selectedCategory}
                handleCategoryClick={handleCategoryClick}
                challenges={usersChallenge}
              />
            </Slider>
          </S.ContentsWrap>
        </S.PopularList>
        <S.NewList>
          <S.ProgressList>
            <li>
              <h2>
                <S.NewListSpan>⭐️NEW!</S.NewListSpan> 신규 챌린지
              </h2>
            </li>
            <li>
              <Link to={ROUTE.LISTPAGE.link}>
                <h3>전체보기</h3>
              </Link>
            </li>
          </S.ProgressList>
          <S.ContentsWrap>
            <Slider {...sliderSettings}>
              <ChallengeBox
                selectedCategory={selectedCategory}
                handleCategoryClick={handleCategoryClick}
                challenges={dateChallenge}
              />
            </Slider>
          </S.ContentsWrap>
        </S.NewList>
      </Wrapper>
      <Footer />
    </S.BackWhite>
  );
};

export default MainPage;
