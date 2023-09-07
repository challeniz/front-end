import React from 'react';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import Wrapper from '../../components/common/wrapper/wrapper';

const AboutPage = () => {
  return (
    <div>
      <Header />
      <Wrapper>{/* <div className="title"></div> */}</Wrapper>
      <Footer />
    </div>
  );
};

export default AboutPage;
