import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { AiOutlineLeft } from 'react-icons/ai';

import banner1 from '../../assets/image/banner.png';
import banner2 from '../../assets/image/banner_2.png';
import banner3 from '../../assets/image/banner_3.png';

const SlideBnner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0px',
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 9000,
  };

  return (
    <div style={{ position: 'relative' }}>
      <BannerSlide>
        <BannerSlider {...settings}>
          <SlideBox>
            <img src={banner1} alt="banner" />
          </SlideBox>
          <SlideBox>
            <img src={banner2} alt="banner" />
          </SlideBox>
          <SlideBox>
            <img src={banner3} alt="banner" />
          </SlideBox>
        </BannerSlider>
      </BannerSlide>
    </div>
  );
};

const BannerSlide = styled.div`
  overflow: hidden;
  .slick-next {
    right: 50px;
  }
  .slick-prev {
    left: 50px;
    z-index: 9999;
  }

  .slick-dots {
    bottom: 0px;
  }
  .slick-list {
    //얘로 크기조정 했음
    width: 110vw;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 45px;
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
const BannerSlider = styled(Slider)`
  display: flex;
`;
// const SlideInner = styled.div`
//   display: flex;
// `;

const SlideBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }
`;

export default SlideBnner;
