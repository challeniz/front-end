import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import SlideBnner from '../components/common/slide';
import Wrapper from '../components/common/wrapper';
import { CiSearch, CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';

const MainPage = () => {
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

  const BackWhite = styled.div`
    background-color: #fff !important;
  `;

  return (
    <BackWhite>
      <Header />
      <SlideBnner />
      <Wrapper>
        <Search>
          <SearchTitle>
            찾고 있는 <SearchTitleColor>챌린지</SearchTitleColor>를
            검색해보세요!
          </SearchTitle>
          <SearchBox>
            <SearchBoxInput type="text" placeholder="#만보걷기" />
            <StyledCiSearch />
          </SearchBox>
          <SearchBox>
            <KeywordWrap>
              <h5>추천 키워드</h5>
              <p>#걷기</p>
              <p>#물마시기</p>
              <p>#영어공부</p>
              <p>#운동</p>
            </KeywordWrap>
          </SearchBox>
        </Search>

        <ContentsList>
          <ProgressList>
            <li>
              <h2>🗓️ 진행중인 챌린지</h2>
            </li>
            <li onClick={() => prevSlide(1)}>
              <StyledSlideCircleLeft />
            </li>
            <li onClick={() => nextSlide(1)}>
              <StyledSlideCircleRight />
            </li>
            <li>
              <h3>전체보기</h3>
            </li>
          </ProgressList>
          <ContentsWrap ref={SlideRef1}></ContentsWrap>
        </ContentsList>

        <PopularList>
          <ProgressList>
            <li>
              <h2>
                <PopularListSpan>🔥HOT!</PopularListSpan> 인기 챌린지
              </h2>
            </li>
            <li onClick={() => prevSlide(2)}>
              <StyledSlideCircleLeft />
            </li>
            <li onClick={() => nextSlide(2)}>
              <StyledSlideCircleRight />
            </li>
            <li>
              <h3>전체보기</h3>
            </li>
          </ProgressList>
          <ContentsWrap ref={SlideRef2}></ContentsWrap>
        </PopularList>

        <NewList>
          <ProgressList>
            <li>
              <h2>
                <NewListSpan>⭐️NEW!</NewListSpan> 신규 챌린지
              </h2>
            </li>
            <li onClick={() => prevSlide(3)}>
              <StyledSlideCircleLeft />
            </li>
            <li onClick={() => nextSlide(3)}>
              <StyledSlideCircleRight />
            </li>
            <li>
              <h3>전체보기</h3>
            </li>
          </ProgressList>
          <ContentsWrap ref={SlideRef3}></ContentsWrap>
        </NewList>
      </Wrapper>
      <Footer />
    </BackWhite>
  );
};

const Search = styled.div`
  text-align: center;
  padding-top: 60px;
`;
const SearchTitle = styled.h1`
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 70px;
  letter-spacing: -0.5px;
`;
const SearchTitleColor = styled.span`
  color: #339af0;
`;
const SearchBox = styled.div`
  box-sizing: border-box;
  font-size: 25px;
  width: 623px;
  margin: 0 auto;
  position: relative;
`;

const SearchBoxInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #030303;
  background-color: transparent;
  font-size: 25px;
  padding: 10px;

  &:focus-visible {
    outline: none;
  }
`;
const ContentsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
`;

const StyledCiSearch = styled(CiSearch)`
  cursor: pointer;
  position: absolute;
  bottom: 12px;
  right: 11px;
  width: 1.5em;
  height: 1.5em;
`;

const ContentsList = styled.div`
  margin: 180px auto;
`;

const PopularList = styled.div`
  margin-bottom: 180px;
`;

const NewList = styled.div`
  margin-bottom: 180px;
`;

const ProgressList = styled.ul`
  display: flex;
  margin-bottom: 45px;
  font-size: 20px;
  align-items: center;

  li {
    margin: 0 8px;
  }

  li:nth-child(1) {
    font-size: 30px;
  }

  li:nth-child(2),
  li:nth-child(3) {
    text-align: center;
    cursor: pointer;

    &:hover {
    }
  }

  li:nth-child(3) {
    margin-left: 2px;
  }

  li:nth-child(4) {
    margin-left: auto;
    cursor: pointer;

    h3 {
      font-size: 16px;
      font-weight: 400;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;
const StyledSlideCircleRight = styled(CiCircleChevRight)`
  width: 1.7em;
  height: 1.7em;

  &:hover {
    color: #339af0;
  }
`;

const KeywordWrap = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;

  h5 {
    font-size: 15px;
    color: #fff;
    background-color: #339af0;
    border-radius: 20px;
    margin-right: 15px;
    padding: 8px 12px;
    font-weight: 500;
  }
  p {
    font-size: 20px;
    padding: 0 10px;
    color: #515151;
  }
`;
const StyledSlideCircleLeft = styled(CiCircleChevLeft)`
  width: 1.7em;
  height: 1.7em;
  &:hover {
    color: #339af0;
  }
`;

const PopularListSpan = styled.span`
  color: #ff003d;
`;
const NewListSpan = styled.span`
  color: #ffe500;
`;

// const BottomBannerr = styled.div``;

// const BottomInner = styled.div`
//   img {
//     box-sizing: border-box;
//     vertical-align: bottom;

//     width: 100vw;
//     max-width: 100%;
//   }
// `;

// const StyledStyledSlideCircleRight = styled(StyledSlideCircleRight)`
//   width: 1.5em;
//   height: 1.5em;
//   padding-left: 4px;
// `;

// const BannerLine = styled.div`
//   font-size: 30px;
//   position: absolute;
//   top: 68%;
//   left: 64%;
// `;

export default MainPage;
