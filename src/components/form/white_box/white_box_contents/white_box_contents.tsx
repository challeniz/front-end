import React, { ReactNode } from 'react';
import styled from 'styled-components';

const WhiteContentsBlock = styled.div`
  padding: 35px 40px;
  line-height:30px;
  color:#545454;
    @media (max-width: 420px) {
   padding: 25px 30px;
  }
`

interface WhiteContentsProps {
  children: ReactNode;
}

const WhiteBoxContents: React.FC<WhiteContentsProps> = ({ children }) => {
  return <WhiteContentsBlock>{children}</WhiteContentsBlock>
};

export default WhiteBoxContents;