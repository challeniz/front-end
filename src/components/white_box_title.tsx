import React, { ReactNode } from 'react';
import styled from 'styled-components';

const WhiteTitleBlock = styled.div`
  padding:35px 40px;
  border-bottom:1px solid #d9d9d9;

  h2 {
    font-weight:700;
    font-size: 20px;
  }
`

interface WhiteTitleProps {
  children: ReactNode;
}

const WhiteBoxTitle: React.FC<WhiteTitleProps> = ({ children }) => {
  return (
    <WhiteTitleBlock>
      <h2>{children}</h2>
    </WhiteTitleBlock>
  )
};

export default WhiteBoxTitle;