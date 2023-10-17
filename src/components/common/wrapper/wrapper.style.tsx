import styled from 'styled-components';

export const WrapperBlock = styled.div`
  width: 1400px;
  margin: 0 auto;
  padding: 80px 0 100px;
  min-height: 100vh;
  @media (min-width:370px) {
    width: 360px;
  }

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }
`;
