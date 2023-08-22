import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import Wrapper from '../components/common/wrapper';

const AboutPage = () => {
  return (
    <div>
        <Header />
      <Wrapper>
        <div className='title'></div>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default AboutPage;
