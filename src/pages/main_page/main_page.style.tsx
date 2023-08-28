import { CiCircleChevLeft, CiCircleChevRight, CiSearch } from 'react-icons/ci';
import styled from 'styled-components';
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

export const StyledCiSearch = styled(CiSearch)`
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

export const PopularList = styled.div`
  margin-bottom: 180px;
`;

export const NewList = styled.div`
  margin-bottom: 180px;
`;

export const ProgressList = styled.ul`
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
export const StyledSlideCircleRight = styled(CiCircleChevRight)`
  width: 1.7em;
  height: 1.7em;

  &:hover {
    color: #339af0;
  }
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
export const StyledSlideCircleLeft = styled(CiCircleChevLeft)`
  width: 1.7em;
  height: 1.7em;
  &:hover {
    color: #339af0;
  }
`;

export const PopularListSpan = styled.span`
  color: #ff003d;
`;
export const NewListSpan = styled.span`
  color: #ffe500;
`;

// export const BottomBannerr = styled.div``;

// export const BottomInner = styled.div`
//   img {
//     box-sizing: border-box;
//     vertical-align: bottom;

//     width: 100vw;
//     max-width: 100%;
//   }
// `;

// export const StyledStyledSlideCircleRight = styled(StyledSlideCircleRight)`
//   width: 1.5em;
//   height: 1.5em;
//   padding-left: 4px;
// `;

// export const BannerLine = styled.div`
//   font-size: 30px;
//   position: absolute;
//   top: 68%;
//   left: 64%;
// `;

export const BackWhite = styled.div`
  background-color: #fff !important;
`;
