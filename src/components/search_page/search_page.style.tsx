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
  font-size: 18px;
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
  font-size: 16px;
  position: relative;
`;

export const SearchBoxInput = styled.input`
  width: 270px;
  height: 40px;
  padding: 8px;
  background-color: transparent;
  font-size: 14px;
  border: 1px solid #bfbfbf;
  background: var(--system-materials-sml-thick, rgba(250, 250, 250, 0.93));
  transition: opacity 0.3s;
  padding: 0 15px;
  border-radius: 5px;

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
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  color: #555;
  width: 1.2em;
  height: 1.2em;
`;

export const Button = styled.button`
  background-color: transparent;
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
