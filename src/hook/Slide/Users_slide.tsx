import React, { useState, useEffect, useCallback } from 'react';
import ChallengeBox from '../../components/challenge/challenge_box_main/challenge_box_main';
import { apiInstance } from '../../utils/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';
import * as S from './Slide.style';

import 'swiper/css';
import 'swiper/css/pagination';

import SwiperCore, { Navigation } from 'swiper';

// Swiper 타입을 가져옵니다.
import { Swiper as SwiperType } from 'swiper';

SwiperCore.use([Navigation]);

export interface ChallengeBoxProps {
  selectedCategory: string;
  handleCategoryClick: (category: string) => void;
}

const MainSlide = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [challenges, setChallenges] = useState([]); // 슬라이드에 사용할 Challenge 배열
  const sliderRef = React.useRef<SwiperType | null>(null); // Swiper 타입으로 ref를 선언

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  // 필터링
  const fetchChallenges = async () => {
    try {
      const response = await apiInstance.get('/challenges');
      const orderByUsersChallenge = response.data.orderByUsersChallenge;
      setChallenges(orderByUsersChallenge); // 슬라이드에 사용할 Challenge 배열 설정
    } catch (error) {
      console.error('Error fetching challenges:', error);
    }
  };

  useEffect(() => {
    fetchChallenges();
  }, []);

  const slides = challenges.map((challenge, index) => (
    <SwiperSlide key={index}>
      <ChallengeBox
        selectedCategory={selectedCategory}
        handleCategoryClick={handleCategoryClick}
        challenge={challenge}
      />
    </SwiperSlide>
  ));

  const handlePrevUser = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.slidePrev();
    }
  }, []);

  const handleNextUser = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.slideNext();
    }
  }, []);

  let slidesPerView = 4;

  if (window.innerWidth <= 768) {
    slidesPerView = 2;
  } else if (window.innerWidth <= 1024) {
    slidesPerView = 3;
  }

  let spaceBetween = 50;

  if (window.innerWidth <= 768) {
    spaceBetween = 10;
  } else if (window.innerWidth <= 1024) {
    spaceBetween = 20;
  }

  return (
    <S.SlideWrap>
      <Swiper
        modules={[Navigation]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: '.prevUsers',
          nextEl: '.nextUsers',
        }}
        onSwiper={(swiper) => {
          sliderRef.current = swiper;
        }}
        preventInteractionOnTransition={true}
      >
        {slides}
      </Swiper>
      <S.PageWrap>
        <div className="prevUsers" onClick={handlePrevUser}>
          <AiOutlineLeftCircle />
        </div>
        <div className="nextUsers" onClick={handleNextUser}>
          <AiOutlineRightCircle />
        </div>
      </S.PageWrap>
    </S.SlideWrap>
  );
};

export default MainSlide;
