// NewSlide 컴포넌트의 수정된 코드
import React, { useState, useEffect, useCallback } from 'react';
import ChallengeBox from '../../components/challenge/challenge_box_main/challenge_box_main';
import { apiInstance } from '../../utils/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai';
import * as S from './Slide.style';
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper';
// Swiper 타입을 가져옵니다.
import { Swiper as SwiperType } from 'swiper';

export interface ChallengeBoxProps {
  selectedCategory: string;
  handleCategoryClick: (category: string) => void;
}

const NewSlide = () => {
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
      const orderByDateChallenge = response.data.orderByDateChallenge;
      setChallenges(orderByDateChallenge);
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

  const handlePrevNew = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.slidePrev();
    }
  }, []);

  const handleNextNew = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.slideNext();
    }
  }, []);

  return (
    <S.SlideWrap>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={4}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: '.prevNew', // 클래스 이름 수정
          nextEl: '.nextNew', // 클래스 이름 수정
        }}
        onSwiper={(swiper) => {
          sliderRef.current = swiper;
        }}
        preventInteractionOnTransition={true}
      >
        {slides}
      </Swiper>
      <S.PageWrap>
        <div className="prevNew" onClick={handlePrevNew}>
          <AiOutlineLeftCircle />
        </div>
        <div className="nextNew" onClick={handleNextNew}>
          <AiOutlineRightCircle />
        </div>
      </S.PageWrap>
    </S.SlideWrap>
  );
};

export default NewSlide;
