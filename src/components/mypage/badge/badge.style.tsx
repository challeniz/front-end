import styled from 'styled-components';

export const BadgeWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-top: 20px;
  gap: 50px;

  div {
    text-align: center;

    p {
      font-size: 20px;
      padding-top: 15px;
    }
  }
`;

export const Img = styled.img`
  width: 120px;
`;
