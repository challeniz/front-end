import styled from 'styled-components';

export const StyleWrapper = styled.div`
  h1 {
    font-size: 38px;
    padding-bottom: 30px;

    @media (max-width: 420px) {
      font-size: 23px;
      padding-top: 30px;
    }
  }
`;
