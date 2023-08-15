import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../components/common/wrapper';


const JoinPage = () => {
  return (
    <Wrapper>
      <JoinText>회원가입</JoinText>
    </Wrapper>
  )
};

export default JoinPage;

const JoinText = styled.p`
  font-size: 35px;
  font-weight: 700;

`