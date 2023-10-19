import React, { ReactNode } from 'react';
import styled from 'styled-components';

const WhiteBlock = styled.div`
  width: 100%;
  background-color: #fff;
  margin-bottom: 60px;
  @media (max-width:420px) {
  margin-bottom: 30px;
}
`;

interface WhiteProps {
  children: ReactNode;
}

const WhiteBox: React.FC<WhiteProps> = ({ children }) => {
  return <WhiteBlock>{children}</WhiteBlock>;
};

export default WhiteBox;
