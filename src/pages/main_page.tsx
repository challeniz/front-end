import React, {useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ListContent from '../components/challenge/list_content';
import banner4 from '../assets/image/banner_4.png';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import SlideBnner from '../components/common/slide';
import Wrapper from '../components/common/wrapper';
import { CiSearch, CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";



const MainPage = () => {
  const SlideRef = useRef<HTMLDivElement | null>(null);
  const [CurrentImg, setCurrentImg] = useState(0);
  const IMG_WIDTH = 50;
  const slideRange = CurrentImg * IMG_WIDTH;
  const TotalImg = 4;

  useEffect(() => {
    if (SlideRef.current) {
      SlideRef.current.style.transition = 'transform 0.5s ease-in-out';
      SlideRef.current.style.transform = `translateX(-${slideRange}px)`;
    }
  }, [slideRange]); 

  const prevSlide = () => {
    setCurrentImg(prevIndex => (prevIndex - 1 + TotalImg) % TotalImg);
  };

  const nextSlide = () => {
    setCurrentImg(prevIndex => (prevIndex + 1) % TotalImg);
  };


  const KeywordWrap = styled.div`
    display:flex;
    margin-top:20px;
    align-items:center;

    h5 {
      font-size:18px;
      color:#fff;
      background-color:#339af0;
      border-radius:20px;
      margin-right:15px;
      padding:8px 12px;
      font-weight:600;
    }
    p {
      font-size: 17px;
      padding: 0 8px;

    }
  `


  return (
  <div>
     <Header />
     <SlideBnner />
     <Wrapper>
     <Search>
      <SearchTitle>찾고 있는 <SearchTitleColor>챌린지</SearchTitleColor>를 검색해보세요!</SearchTitle>
      <SearchBox >
         <SearchBoxInput type="text" placeholder='#만보걷기' />
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
          <li><h2>진행중인 챌린지</h2></li>
          <li onClick={prevSlide}><StyledSlideCircleLeft/></li>
           <li onClick={nextSlide}><StyledSlideCircleRight /></li>
          <li><h3>전체보기</h3></li>
          </ProgressList>
          <ContentsWrap ref={SlideRef}>
          <ListContent  />
          <ListContent />
          <ListContent />
          <ListContent />
        </ContentsWrap>
     </ContentsList>
   
     <PopularList>
        <ProgressList>
          <li><h2><PopularListSpan>HOT!</PopularListSpan> 인기 챌린지</h2></li>
          <li onClick={prevSlide}><StyledSlideCircleLeft /></li>
           <li onClick={nextSlide}><StyledSlideCircleRight /></li>
          <li><h3>전체보기</h3></li>
          </ProgressList>
          <ContentsWrap ref={SlideRef}>
          <ListContent />
          <ListContent />
          <ListContent />
          <ListContent />
        </ContentsWrap>
     </PopularList>

     <NewList>
        <ProgressList>
          <li><h2><NewListSpan>NEW!</NewListSpan> 인기 챌린지</h2></li>
          <li onClick={prevSlide}><StyledSlideCircleLeft /></li>
           <li onClick={nextSlide}><StyledSlideCircleRight /></li>
          <li><h3>전체보기</h3></li>
          </ProgressList>
          <ContentsWrap ref={SlideRef}>
          <ListContent />
          <ListContent />
          <ListContent />
          <ListContent />
        </ContentsWrap>
     </NewList>
     </Wrapper>

    <BottomBannerr>
      <BottomInner>
      <img src={banner4} alt="banner"  />
       <BannerTxt>
          <h3>찾고 있는 챌린지가 없나요?</h3>
          <a>챌린지 만들기<StyledStyledSlideCircleRight /></a> 
       </BannerTxt>    
       
      </BottomInner>
    </BottomBannerr>

    <Footer />
 
  </div>
  
   
   )
};




const Search = styled.div`
text-align: center;
	position: relative;
	top: 5rem;
  
`
const SearchTitle = styled.h1`

font-size: 34px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-bottom: 40px;

`
const SearchTitleColor = styled.span`
color: #339AF0;

`
 const SearchBox = styled.div`
 position:relative;
 box-sizing: border-box;
 font-size:25px;
 width:623px;
 margin:0 auto;
 `

 const SearchBoxInput = styled.input `

 width: 100%;
 border: none;
 border-bottom: 1px solid #030303;
 background-color: transparent;
 font-size:25px;
 padding: 10px;

 &:focus-visible {
  outline: none;
 }
 `
 const ContentsWrap = styled.div`
 display:grid;
 grid-template-columns: repeat(4, 1fr);
`

const StyledCiSearch = styled(CiSearch)`
cursor:pointer;
position: absolute;
bottom: 12px;
right: 11px;
width: 1.5em;
height: 1.5em;

`


const ContentsList = styled.div `
position: relative;
top: 16rem;
left: 4rem;
overflow: hidden;
`

const PopularList= styled.div `
position: relative;
top: 30rem;
left: 4rem;
`

const NewList= styled.div `
position: relative;
top: 44rem;
left: 4rem;
`

const ProgressList = styled.ul`
display: flex;
margin-bottom: 30px;
font-size: 20px;


li {
  margin: 0 8px;
}



li:nth-child(1){
  font-size: 30px;


}

li:nth-child(2),
li:nth-child(3) {
  text-align: center;
  cursor: pointer;

  &:hover{

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

 &:hover{
  text-decoration:underline;
 }


}
`
const StyledSlideCircleRight = styled(CiCircleChevRight)`
width: 1.7em;
height: 1.7em;

&:hover {
  color:#339af0;
}

`
const StyledSlideCircleLeft = styled(CiCircleChevLeft)`
width: 1.7em;
height: 1.7em;
&:hover {
  color:#339af0;
}
`



const PopularListSpan = styled.span`

  color: #00DAA6;

`
const NewListSpan = styled.span`

color: #24FF00;

`

const BottomBannerr = styled.div`
  position: relative;
	top: 54rem;


`

const BottomInner = styled.div`
  
img{
  box-sizing: border-box;
  vertical-align: bottom;

  width: 100vw;
  max-width: 100%;
}


`
const BannerTxt = styled.div`

  position: absolute;
  top: 50%;
  left: 50%;
  align-items: center;
  transform: translate(-50%, -50%);
  text-align:center;

  h3{
    font-size: 40px;
    letter-spacing: 4px;
    margin-bottom: 40px;
    font-weight:600;
   }

   a{
    cursor:pointer;
    font-size: 28px;
    text-align: center;
    letter-spacing: 4px;
    padding:8px 15px;
    font-weight:500;
    border-radius:20px;
    display:flex;
    justify-content:center;
    line-height:30px;
    align-items:center;
    svg {
      transition:.2s;
    }
    &:hover {
      text-decoration:underline;
    }
    &:hover svg {
      transform:translateX(8px);
      transition:.2s;
    }
     }
     
`
 const StyledStyledSlideCircleRight = styled(StyledSlideCircleRight)`
     width:1.5em;
     height:1.5em;
     padding-left:4px;
 `

const BannerLine = styled.div`
font-size: 30px;
	position: absolute;
	top: 68%;
	left: 64%;

	
`





export default MainPage;
