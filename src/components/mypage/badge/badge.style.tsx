import styled from 'styled-components';

export const BadgeTitle = styled.div`
  background-color: #f2efff;
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 40px;

  h3 {
    font-size: 19px;
    font-weight: 700;
  }
`;

export const BadgeWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px 0;
  gap: 50px;

  div {
    text-align: center;

    p {
      font-size: 18px;
      padding-top: 15px;
      font-weight: 700;
    }

    h5 {
      padding-top: 10px;
      font-weight: 400;
      font-size: 17px;
    }

    img {
      filter: grayscale(1);
    }
    .on {
      filter: inherit !important;
    }
  }
`;

export const Img = styled.img`
  width: 91px;
  height: 91px;
`;
