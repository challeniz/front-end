import React, { useState, useEffect } from 'react';
import ChallengeBox from '../components/challenge/challenge_box_main/challenge_box_main';
import { apiInstance } from '../utils/api';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper';

export interface ChallengeBoxProps {
  selectedCategory: string;
  handleCategoryClick: (category: string) => void;
}

const NewSlide = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [challenges, setChallenges] = useState([]); // 슬라이드에 사용할 Challenge 배열

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

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }} // Enable pagination dots
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides}
    </Swiper>
  );
};

export default NewSlide;
