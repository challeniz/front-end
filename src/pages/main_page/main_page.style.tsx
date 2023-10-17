import { CiCircleChevLeft, CiCircleChevRight, CiSearch } from 'react-icons/ci';
import styled from 'styled-components';
import Slider from 'react-slick';
export const PopularList = styled.div`
  margin-bottom: 180px;

  @media (max-width: 420px) {
    margin-bottom: 60px;
  }
`;
export const ContentsWrap = styled.div`
  // display: grid;
  // grid-column-gap: 40px;
  // grid-row-gap: 50px;
`;
export const NewList = styled.div`
  margin-bottom: 180px;

  @media (max-width: 420px) {
    margin-bottom: 60px;
  }
`;
export const ContentsList = styled.div`
  margin: 40px auto 180px;

  @media (max-width: 420px) {
    margin: 30px auto 60px;
  }
`;

export const ProgressList = styled.ul`
  display: flex;
  margin-bottom: 45px;
  font-size: 20px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
  }

  li {
    margin: 0 8px;
  }

  li:nth-child(1) {
    font-size: 30px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
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

export const BackWhite = styled.div`
  background-color: #fff !important;
`;
