import React from 'react';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';

import ListContent from '../../components/challenge/list_content/list_content';
import Wrapper from '../../components/common/wrapper/wrapper';

const ListPage = () => {


  return (
    <>
      <Header />
      <Wrapper>
        <ListContent />
      </Wrapper>
      <Footer />
    </>
  );
};

export default ListPage;
