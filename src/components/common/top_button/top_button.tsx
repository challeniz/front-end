import React, { useState, useEffect } from 'react';
import * as S from './top_button.style';
import { AiOutlineArrowUp } from 'react-icons/ai';

function TopButton() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <S.ScrollButton show={showButton} onClick={scrollToTop}>
      <AiOutlineArrowUp />
    </S.ScrollButton>
  );
}

export default TopButton;
