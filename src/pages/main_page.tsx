import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from "react-icons/ai";

const Search = styled.div`
text-align: center;
	position: relative;
	top: 30px;
`
const SearchTitle = styled.h1`

font-size: 34px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-bottom: 20px;

`



const MainPage = () => {
  return (
   <Search>
    <SearchTitle>찾고 있는 <span>챌린지</span>가 있다면?</SearchTitle>
    <div className='SearchBox'>
       <input type="text" />
       <AiOutlineSearch/>
    </div>
   </Search>)
};

export default MainPage;
