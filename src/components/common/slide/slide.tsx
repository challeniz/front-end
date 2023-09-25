import React from 'react';
import * as S from './slide.style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import { ROUTE } from '../../../routes';
import banner1 from '../../../assets/image/banner.jpg';
import banner2 from '../../../assets/image/banner_2.jpg';
import banner3 from '../../../assets/image/banner_3.jpg';

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

  const navigate = useNavigate();

  const handleImageClick = () => {
    const url = `/challenges?category=${encodeURIComponent('공부')}`;
    navigate(url);
  };

  return (
    <div style={{ position: 'relative' }}>
      <S.BannerSlide>
        <S.BannerSlider {...settings}>
          <S.SlideBox onClick={handleImageClick}>
            <img src={banner1} alt="banner" />
          </S.SlideBox>

          <S.SlideBox>
            <Link to={ROUTE.LISTPAGE.link}>
              <img src={banner2} alt="banner" />
            </Link>
          </S.SlideBox>
          <S.SlideBox>
            <Link to={ROUTE.NEWPAGE.link}>
              <img src={banner3} alt="banner" />
            </Link>
          </S.SlideBox>
        </S.BannerSlider>
      </S.BannerSlide>
    </div>
  );
};

export default SlideBnner;
