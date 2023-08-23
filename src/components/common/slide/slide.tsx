import React from 'react';
import * as S from './slide.style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { AiOutlineLeft } from 'react-icons/ai';

import banner1 from '../../../assets/image/banner.png';
import banner2 from '../../../assets/image/banner_2.png';
import banner3 from '../../../assets/image/banner_3.png';

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
      <S.BannerSlide>
        <S.BannerSlider {...settings}>
          <S.SlideBox>
            <img src={banner1} alt="banner" />
          </S.SlideBox>
          <S.SlideBox>
            <img src={banner2} alt="banner" />
          </S.SlideBox>
          <S.SlideBox>
            <img src={banner3} alt="banner" />
          </S.SlideBox>
        </S.BannerSlider>
      </S.BannerSlide>
    </div>
  );
};

export default SlideBnner;
