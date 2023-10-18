import Slider from 'react-slick';
import styled from 'styled-components';

export const BannerSlide = styled.div`
  overflow: hidden;
  .slick-next {
    right: 50px;

    @media (max-width: 768px) {
      right: 30px;
    }
  }
  .slick-prev {
    left: 50px;
    z-index: 9999;

    @media (max-width: 768px) {
      left: 30px;
    }
  }

  .slick-dots {
    bottom: 0px;
  }
  .slick-list img {
    width: 100vw;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 45px;
    color: #363636;

    @media (max-width: 768px) {
      font-size: 23px;
    }
  }

  .slick-prev,
  .slick-next {
    width: 45px;
    height: 45px;
  }

  .slick-dots li button:before {
    top: -20px;
  }
`;
export const BannerSlider = styled(Slider)`
  display: flex;
`;

export const SlideBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 100%;
  }
`;
