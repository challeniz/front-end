import React, { useState, useRef, useEffect } from 'react';
import * as S from './main_page.style';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import SlideBnner from '../../components/common/slide/slide';
import Wrapper from '../../components/common/wrapper/wrapper';
import ChallengeBox from '../../components/challenge/challenge_box/challenge_box';
import { apiInstance } from '../../utils/api';
import SearchPage from '../search_page/search_page';
import { ROUTE } from '../../routes';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const SlideRef1 = useRef<HTMLDivElement | null>(null);
  const SlideRef2 = useRef<HTMLDivElement | null>(null);
  const SlideRef3 = useRef<HTMLDivElement | null>(null);
  const [CurrentImg1, setCurrentImg1] = useState(0);
  const [CurrentImg2, setCurrentImg2] = useState(0);
  const [CurrentImg3, setCurrentImg3] = useState(0);
  const IMG_WIDTH = 50;
  const slideRange1 = CurrentImg1 * IMG_WIDTH;
  const slideRange2 = CurrentImg2 * IMG_WIDTH;
  const slideRange3 = CurrentImg3 * IMG_WIDTH;
  const TotalImg = 4;

  useEffect(() => {
    if (SlideRef1.current) {
      SlideRef1.current.style.transition = 'transform 0.5s ease-in-out';
      SlideRef1.current.style.transform = `translateX(-${slideRange1}px)`;
    }
  }, [slideRange1]);

  useEffect(() => {
    if (SlideRef2.current) {
      SlideRef2.current.style.transition = 'transform 0.5s ease-in-out';
      SlideRef2.current.style.transform = `translateX(-${slideRange2}px)`;
    }
  }, [slideRange2]);

  useEffect(() => {
    if (SlideRef3.current) {
      SlideRef3.current.style.transition = 'transform 0.5s ease-in-out';
      SlideRef3.current.style.transform = `translateX(-${slideRange3}px)`;
    }
  }, [slideRange3]);

  const prevSlide = (idx: number) => {
    if (idx === 1) {
      setCurrentImg1((prevIndex) => (prevIndex - 1 + TotalImg) % TotalImg);
    } else if (idx === 2) {
      setCurrentImg2((prevIndex) => (prevIndex - 1 + TotalImg) % TotalImg);
    } else if (idx === 3) {
      setCurrentImg3((prevIndex) => (prevIndex - 1 + TotalImg) % TotalImg);
    }
  };

  const nextSlide = (idx: number) => {
    if (idx === 1) {
      setCurrentImg1((prevIndex) => (prevIndex + 1) % TotalImg);
    } else if (idx === 2) {
      setCurrentImg2((prevIndex) => (prevIndex + 1) % TotalImg);
    } else if (idx === 3) {
      setCurrentImg3((prevIndex) => (prevIndex + 1) % TotalImg);
    }
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <S.BackWhite>
      <Header />
      <SlideBnner />
      <Wrapper>
        <S.ContentsList>
          <S.ProgressList>
            <li>
              <h2>🗓️ 진행중인 챌린지</h2>
            </li>
            <li onClick={() => prevSlide(1)}>
              <S.StyledSlideCircleLeft />
            </li>
            <li onClick={() => nextSlide(1)}>
              <S.StyledSlideCircleRight />
            </li>
            <li>
              <h3>전체보기</h3>
            </li>
          </S.ProgressList>
          <S.ContentsWrap ref={SlideRef1}>
            <ChallengeBox
              selectedCategory={selectedCategory} // 선택된 카테고리 전달
              handleCategoryClick={handleCategoryClick} // 카테고리 클릭 핸들러 전달
            />
          </S.ContentsWrap>
        </S.ContentsList>
        <S.PopularList>
          <S.ProgressList>
            <li>
              <h2>
                <S.PopularListSpan>🔥HOT!</S.PopularListSpan> 인기 챌린지
              </h2>
            </li>
            <li onClick={() => prevSlide(2)}>
              <S.StyledSlideCircleLeft />
            </li>
            <li onClick={() => nextSlide(2)}>
              <S.StyledSlideCircleRight />
            </li>
            <li>
              <Link to={ROUTE.LISTPAGE.link}>
                <h3>전체보기</h3>
              </Link>
            </li>
          </S.ProgressList>
          <S.ContentsWrap ref={SlideRef2}></S.ContentsWrap>
        </S.PopularList>

        <S.NewList>
          <S.ProgressList>
            <li>
              <h2>
                <S.NewListSpan>⭐️NEW!</S.NewListSpan> 신규 챌린지
              </h2>
            </li>
            <li onClick={() => prevSlide(3)}>
              <S.StyledSlideCircleLeft />
            </li>
            <li onClick={() => nextSlide(3)}>
              <S.StyledSlideCircleRight />
            </li>
            <li>
              <h3>전체보기</h3>
            </li>
          </S.ProgressList>
          <S.ContentsWrap ref={SlideRef3}></S.ContentsWrap>
        </S.NewList>
      </Wrapper>
      <Footer />
    </S.BackWhite>
  );
};

export default MainPage;
