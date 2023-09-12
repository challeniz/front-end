import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const noResult = styled.h2`
  padding: 200px 0;
  margin: 0 auto;
  font-size: 30px;
  text-align: center;
`;

export const Search = styled.div`
  text-align: center;
  padding-top: 60px;
`;
export const SearchTitle = styled.h1`
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 70px;
  letter-spacing: -0.5px;
`;
export const SearchTitleColor = styled.span`
  color: #339af0;
`;
export const SearchBox = styled.div`
  box-sizing: border-box;
  font-size: 25px;
  width: 623px;
  margin: 0 auto;
  position: relative;
`;

export const SearchBoxInput = styled.input`
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
export const ContentsWrap = styled.div`
  // display: grid;
  // grid-template-columns: repeat(4, 1fr);
  // grid-column-gap: 40px;
`;

export const StyledCiSearch = styled(FaSearch)`
  cursor: pointer;
  position: absolute;
  bottom: 12px;
  right: 11px;
  width: 1.5em;
  height: 1.5em;
`;

export const ContentsList = styled.div`
  margin: 180px auto;
`;

export const KeywordWrap = styled.div`
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
