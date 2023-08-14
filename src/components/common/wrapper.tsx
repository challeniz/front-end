import React, { ReactNode } from 'react';
import styled from 'styled-components';

const WrapperBlock = styled.div`
  width: 1400px;
  margin: 60px auto;
`;

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <WrapperBlock>{children}</WrapperBlock>;
};

export default Wrapper;
