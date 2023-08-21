import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineArrowUp } from 'react-icons/ai';

const ScrollButton = styled.button<{ show: boolean }>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: fixed;
  bottom: 37px;
  right: 43px;
  z-index: 99;
  background-color: #339af0;
  color: #fff;
  border: 1px solid #339af0;
  padding: 14px 18px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 25px;

  svg {
    transition: 0.3s;
  }

  &:hover {
    svg {
      transform: translateY(-4px);
      transition: 0.3s;
    }
  }
`;

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
    <ScrollButton show={showButton} onClick={scrollToTop}>
      <AiOutlineArrowUp />
    </ScrollButton>
  );
}

export default TopButton;
