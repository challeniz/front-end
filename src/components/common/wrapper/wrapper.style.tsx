import styled from 'styled-components';

export const WrapperBlock = styled.div`
  width: 1400px;
  margin: 0 auto;
  padding: 80px 0 100px;
  min-height: 100vh;

  @media (max-width: 1600px) {
    width: 100%;
    padding: 80px 40px 100px;
  }

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`;
