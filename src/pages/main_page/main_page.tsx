import React, { useState, useEffect } from 'react';
import * as S from './main_page.style';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import SlideBnner from '../../components/common/slide/slide';
import Wrapper from '../../components/common/wrapper/wrapper';
import ChallengeBox from '../../components/challenge/challenge_box_main/challenge_box_main';
import { apiInstance } from '../../utils/api';
import { ROUTE } from '../../routes';
import { Link } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation';

export interface ChallengeBoxProps {
  selectedCategory: string;
  handleCategoryClick: (category: string) => void;
  challenges: [];
}

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [ongoingChallenge, setOngoingChallenge] = useState([]);
  const [usersChallenge, setUsersChallenge] = useState([]);
  const [dateChallenge, setDateChallenge] = useState([]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  // 필터링
  const fetchChallenges = async () => {
    try {
      const response = await apiInstance.get('/challenges');
      const data = response.data;
      setOngoingChallenge(data.ongoingChallenge);
      setUsersChallenge(data.orderByUsersChallenge);
      setDateChallenge(data.orderByDateChallenge);
    } catch (error) {
      console.error('Error fetching challenges:', error);
    }
  };

  useEffect(() => {
    fetchChallenges();
  }, []);

  // ChallengeBoxes 배열 정의
  const ChallengeBoxes = ongoingChallenge; // ongoingChallenge 또는 다른 데이터에 맞게 수정

  return (
    <S.BackWhite>
      <Header />
      <SlideBnner />
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
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {ChallengeBoxes.map((challenge, index) => (
                <SwiperSlide key={index}>
                  <ChallengeBox
                    selectedCategory={selectedCategory}
                    handleCategoryClick={handleCategoryClick}
                    challenges={[challenge]}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </S.ContentsWrap>
        </S.ContentsList>
        {/* 다른 챌린지 섹션들에 대한 코드 */}
      </Wrapper>
      <Footer />
    </S.BackWhite>
  );
};

export default MainPage;
