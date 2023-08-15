import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import banner1 from '../../assets/image/banner.png';
import banner2 from '../../assets/image/banner_2.png';
import banner3 from '../../assets/image/banner_3.png';

import { AiOutlineLeft, AiOutlineRight} from "react-icons/ai";
const SlideBnner = () => {
  const SlideRef = useRef<HTMLDivElement | null>(null); 
  const [CurrentImg, setCurrentImg] = useState(0);
  const IMG_WIDTH = '100vw'; 
  const slideRange = CurrentImg * 100; 
  const TotalImg = 3;

  useEffect(() => {
    if (SlideRef.current) { 
      SlideRef.current.style.transition = 'all 0.5s ease-in-out';
      SlideRef.current.style.transform = `translateX(-${slideRange}%)`;
    }
  }, [CurrentImg]);

  const prevSlide = () => {
  setCurrentImg(prevIndex => {
    return(prevIndex - 1 + TotalImg) % TotalImg;
  });
}

const nextSlide = () => {
  setCurrentImg(prevIndex => {
  
    return (prevIndex + 1) % TotalImg;
  });
};


  return (
    <div>
      <BannerSlide>
        <SlideInner ref={SlideRef}>
          <SlideBox style={{ width: IMG_WIDTH }}>
            <img src={banner1} alt="banner" />
          </SlideBox>
          <SlideBox style={{ width: IMG_WIDTH }}>
            <img src={banner2} alt="banner" />
          </SlideBox>
          <SlideBox style={{ width: IMG_WIDTH }}>
            <img src={banner3} alt="banner" />
          </SlideBox>
        </SlideInner>
      </BannerSlide>
      <SlideBtnLeft onClick={prevSlide}><AiOutlineLeft/></SlideBtnLeft>
      <SlideBtnRight onClick={nextSlide}><AiOutlineRight /></SlideBtnRight>
    </div>
  );
};

const BannerSlide = styled.div`
  overflow: hidden;
`;

const SlideInner = styled.div`
  display: flex;
`;

const SlideBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SlideBtnLeft = styled.button`
position: absolute;
top: 50%;
left: 20px;
transform: translateY(-50%);
background-color: transparent;
color: #000;
border: none;
font-size: 20px;
text-align: center;

&:hover {
  background-color: rgba(51, 154, 240, 0.22);
  color: #FFF;
  border-radius: 50%;
  text-align: center;

}


`
const SlideBtnRight = styled.button`
position: absolute;
top: 50%;
right: 50px;
transform: translateY(-50%) translateX(100%);
background-color: transparent;
color: #000;
border: none;
font-size: 20px;

&:hover {
  background-color: rgba(51, 154, 240, 0.22);
  color: #FFF;
  border-radius: 50%;
  text-align: center;
}

`



export default SlideBnner;
