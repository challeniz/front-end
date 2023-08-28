import React, { ReactNode } from 'react';
import styled from 'styled-components';

const WhiteContentsBlock = styled.div`
  padding: 35px 40px;
  line-height:30px;
  color:#545454;
`

interface WhiteContentsProps {
  children: ReactNode;
}

const WhiteBoxContents: React.FC<WhiteContentsProps> = ({ children }) => {
  return <WhiteContentsBlock>{children}</WhiteContentsBlock>
};

export default WhiteBoxContents;