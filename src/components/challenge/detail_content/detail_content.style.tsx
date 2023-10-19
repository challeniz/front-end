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
    margin-bottom: 10px;
  }
`;

export const MobileInfo = styled.div`
  display: none;

  @media (max-width: 420px) {
    display: block;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 30px;

    h4 {
      font-weight: 500;
      font-size: 14px;
      padding-bottom: 20px;
    }

    h3 {
      font-size: 20px;
      font-weight: 600;
      width: 310px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-bottom: 40px;
    }
    div {
      display: flex;
      justify-content: space-between;

      button {
        cursor: pointer;
        width: calc(100% / 2.05);
        background-color: #fff;
        border: 1px solid #339af0;
        border-radius: 10px;
        padding: 10px;
        font-weight: 500;
        color: #000;
      }
    }

    button {
      background-color: #339af0;
      border-radius: 10px;
      color: #fff;
      font-size: 17px;
      font-weight: 500;
      width: 100%;
      margin-top: 10px;
      padding: 15px;
    }
  }
`;
