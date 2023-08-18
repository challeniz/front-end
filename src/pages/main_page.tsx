import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ListContent from '../components/challenge/list_content';
import banner4 from '../assets/image/banner_4.png';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import SlideBnner from '../components/common/slide';
import Wrapper from '../components/common/wrapper';
import {
  AiOutlineSearch,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineSwapRight,
} from 'react-icons/ai';

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

 
  return (
    <div>
      <Header />
      <SlideBnner />
      <Wrapper>
        <Search>
          <SearchTitle>
            찾고 있는 <SearchTitleColor>챌린지</SearchTitleColor>가 있다면?
          </SearchTitle>
          <SearchBox>
            <SearchBoxInput type="text" />
            <AiOutlineSearch />
          </SearchBox>
        </Search>

        <ContentsList>
          <ProgressList>
            <li>
              <h2>진행중인 챌린지</h2>
            </li>
            <li   onClick={() => prevSlide(1)}>
              <AiOutlineLeft />
            </li>
            <li   onClick={() => nextSlide(1)}>
              <AiOutlineRight />
            </li>
            <li>
              <h3>전체보기</h3>
            </li>
          </ProgressList>
          <ContentsWrap ref={SlideRef1}>
            <ListContent />
            <ListContent />
            <ListContent />
            <ListContent />
          </ContentsWrap>
        </ContentsList>

        <PopularList>
          <ProgressList>
            <li>
              <h2>
                <PopularListSpan>HOT!</PopularListSpan> 인기 챌린지
              </h2>
            </li>
            <li  onClick={() => prevSlide(2)}>
              <AiOutlineLeft />
            </li>
            <li onClick={() => nextSlide(2)}>
              <AiOutlineRight />
            </li>
            <li>
              <h3>전체보기</h3>
            </li>
          </ProgressList>
          <ContentsWrap ref={SlideRef2}>
            <ListContent />
            <ListContent />
            <ListContent />
            <ListContent />
          </ContentsWrap>
        </PopularList>

        <NewList>
          <ProgressList>
            <li>
              <h2>
                <NewListSpan>NEW!</NewListSpan> 인기 챌린지
              </h2>
            </li>
            <li   onClick={() => prevSlide(3)}>
              <AiOutlineLeft />
            </li>
            <li onClick={() => nextSlide(3)}>
              <AiOutlineRight />
            </li>
            <li>
              <h3>전체보기</h3>
            </li>
          </ProgressList>
          <ContentsWrap ref={SlideRef3}>
            <ListContent />
            <ListContent />
            <ListContent />
            <ListContent />
          </ContentsWrap>
        </NewList>
      </Wrapper>

      <BottomBannerr>
        <BottomInner>
          <img src={banner4} alt="banner" />
          <BannerTxt>
            <h3>찾고 있는 챌린지가 없나요?</h3>
            <p>
              챌린지 만들기{' '}
              <BannerLine>
                <AiOutlineSwapRight />
              </BannerLine>
            </p>
          </BannerTxt>
        </BottomInner>
      </BottomBannerr>

      <Footer />
    </div>
  );
};

const Search = styled.div`
  text-align: center;
  position: relative;
  top: 5rem;
`;
const SearchTitle = styled.h1`
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 40px;
`;
const SearchTitleColor = styled.span`
  color: #339af0;
`;
const SearchBox = styled.div`
  box-sizing: border-box;
  font-size: 25px;
`;

const SearchBoxInput = styled.input`
  width: 623px;
  border: none;
  border-bottom: 1px solid #030303;
  background-color: transparent;
`;
const ContentsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
const ContentsList = styled.div`
  position: relative;
  top: 16rem;
  left: 4rem;
  overflow: hidden;
`;



const PopularList= styled.div `
position: relative;
top: 30rem;
left: 4rem;
overflow: hidden;
`

const NewList= styled.div `
position: relative;
top: 44rem;
left: 4rem;
overflow: hidden;
`

const ProgressList = styled.ul`
  display: flex;
  margin-bottom: 30px;
  font-size: 20px;

  li {
    margin: 0 8px;
  }

  li:nth-child(1) {
    font-size: 30px;
  }

  li:nth-child(2),
  li:nth-child(3) {
    border-radius: 100%;
    border: 1px solid rgb(199, 199, 199);
    color: rgb(199, 199, 199);
    width: 24px;
    height: 24px;
    text-align: center;
    cursor: pointer;

    &:hover {
      border: 1px solid #339af0;
      background-color: #339af0;
      color: #fff;
    }
  }

  li:nth-child(3) {
    margin-left: 2px;
  }

  li:nth-child(4) {
    float: right;
    right: 4rem;
    position: absolute;
    cursor: pointer;

    &:hover {
      border-bottom: 4px solid #339af0;
    }
  }
`;
const PopularListSpan = styled.span`
  color: #00daa6;
`;
const NewListSpan = styled.span`
  color: #24ff00;
`;

const BottomBannerr = styled.div`
  position: relative;
  top: 54rem;
`;

const BottomInner = styled.div`
  img {
    box-sizing: border-box;
    vertical-align: bottom;

    width: 100vw;
    max-width: 100%;
  }
`;
const BannerTxt = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  align-items: center;

  h3 {
    font-size: 40px;
    letter-spacing: 4px;
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
    text-align: center;
    letter-spacing: 4px;
    &:hover {
      font-weight: 600;
      font-size: 22px;
    }
  }
`;

const BannerLine = styled.div`
  font-size: 30px;
  position: absolute;
  top: 68%;
  left: 64%;
`;

export default MainPage;
