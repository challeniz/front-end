import styled from 'styled-components';

export const DetailContents = styled.div`
  width: 67%;

  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const H2Styled = styled.h2`
  font-size: 35px;
  padding-bottom: 12px;
  font-weight: 700;
`;
export const H4Styled = styled.h4`
  font-size: 15px;
  font-weight: 500;
  padding-bottom: 25px;
`;

export const ImgStyledWrapper = styled.div`
  width: 100%;
  height: 450px;
  background-color: #d9d9d9;
  border-radius: 25px;
  margin-bottom: 55px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 420px) {
    height: 210px;
  }
`;

export const MobileInfo = styled.div``;
