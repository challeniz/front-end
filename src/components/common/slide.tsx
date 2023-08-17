import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

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
`;
const BannerSlider = styled(Slider) `
display: flex;
`
// const SlideInner = styled.div`
//   display: flex;
// `;

const SlideBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;



export default SlideBnner;
