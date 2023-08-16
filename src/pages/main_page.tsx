import React from 'react';
import styled from 'styled-components';
import ListContent from '../components/challenge/list_content';
import banner4 from '../assets/image/banner_4.png';
import { AiOutlineSearch, AiOutlineLeft, AiOutlineRight, AiOutlineSwapRight} from "react-icons/ai";
import Header from '../components/common/header';
import Footer from '../components/common/footer';


const MainPage = () => {
  return (
  <div>
    <Header />
     <Search>
      <SearchTitle>찾고 있는 <SearchTitleColor>챌린지</SearchTitleColor>가 있다면?</SearchTitle>
      <SearchBox >
         <SearchBoxInput type="text" />
         <AiOutlineSearch/>
      </SearchBox>
     </Search>
     
      <ContentsList>
        <ProgressList>
          <li><h2>진행중인 챌린지</h2></li>
          <li><AiOutlineLeft/></li> <li><AiOutlineRight/></li>
          <li><h3>전체보기</h3></li>
          </ProgressList>
          <ContentsWrap>
          <ListContent />
          <ListContent />
          <ListContent />
          <ListContent />
        </ContentsWrap>
     </ContentsList>

     <PopularList>
        <ProgressList>
          <li><h2><PopularListSpan>HOT!</PopularListSpan> 인기 챌린지</h2></li>
          <li><AiOutlineLeft/></li> <li><AiOutlineRight/></li>
          <li><h3>전체보기</h3></li>
          </ProgressList>
          <ContentsWrap>
          <ListContent />
          <ListContent />
          <ListContent />
          <ListContent />
        </ContentsWrap>
     </PopularList>

     <NewList>
        <ProgressList>
          <li><h2><NewListSpan>NEW!</NewListSpan> 인기 챌린지</h2></li>
          <li><AiOutlineLeft/></li> <li><AiOutlineRight/></li>
          <li><h3>전체보기</h3></li>
          </ProgressList>
          <ContentsWrap>
          <ListContent />
          <ListContent />
          <ListContent />
          <ListContent />
        </ContentsWrap>
     </NewList>
 

    <BottomBannerr>
      <BottomInner>
      <img src={banner4} alt="banner"  />
       <BannerTxt>
          <h3>찾고 있는 챌린지가 없나요?</h3>
          <p>챌린지 만들기 <BannerLine><AiOutlineSwapRight/></BannerLine></p> 
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
 box-sizing: border-box;
 `

 const SearchBoxInput = styled.input `
 width: 623px;
 border: none;
 border-bottom: 1px solid #030303;
 background-color: transparent;
 `
 const ContentsWrap = styled.div`
 display:grid;
 grid-template-columns: repeat(4, 1fr);
`
const ContentsList = styled.div `
position: relative;
top: 16rem;
left: 4rem;
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
  border-radius: 100%;
  border: 1px solid rgb(199, 199, 199);
  color: rgb(199, 199, 199);
  width: 24px;
  height: 24px;
  text-align: center;
  cursor: pointer;

  &:hover{
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

 &:hover{
  border-bottom: 4px solid #339af0;
 }


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
  left: 30%;
  align-items: center;

  h3{
    font-size: 40px;
    letter-spacing: 4px;
    margin-bottom: 20px;

 
   }

   p{
    font-size: 20px;
    text-align: center;
    letter-spacing: 4px;
    &:hover{
      font-weight: 600;
      font-size: 22px;
     }



     }

    
     
`

const BannerLine = styled.div`
font-size: 30px;
	position: absolute;
	top: 68%;
	left: 64%;

	
`



export default MainPage;
