import { CiCircleChevLeft, CiCircleChevRight, CiSearch } from 'react-icons/ci';
import styled from 'styled-components';

export const PopularList = styled.div`
  margin-bottom: 180px;
`;
export const ContentsWrap = styled.div`
  // display: grid;
  // grid-column-gap: 40px;
  // grid-row-gap: 50px;
`;
export const NewList = styled.div`
  margin-bottom: 180px;
`;
export const ContentsList = styled.div`
  margin: 40px auto 180px;
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
  display: none;
  &:hover {
    color: #339af0;
  }
`;

export const StyledSlideCircleLeft = styled(CiCircleChevLeft)`
  width: 1.7em;
  height: 1.7em;
  display: none;
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
