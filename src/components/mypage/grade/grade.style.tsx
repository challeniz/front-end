import styled from 'styled-components';

export const GradeTitle = styled.div`
  padding: 40px;
  margin-bottom: 40px;
  border: 1px solid #d9d9d9;

  h3 {
    font-size: 19px;
    font-weight: 700;
  }

  .title-top {
    padding: 40px 0;
  }

  @media (max-width: 420px) {
    padding: 30px 20px;
  }
`;

export const GradeWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 40px 0;
  gap: 50px;

  @media (max-width: 420px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 20px 0;
  }

  div {
    text-align: center;
    position: relative;

    &:after {
      content: '▶';
      position: absolute;
      left: 108%;
      top: 50%;
      transform: translateY(-50%);
      font-size: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #555;
    }
    &:nth-child(4):after {
      display: none;
    }
    @media (max-width: 420px) {
      &:nth-child(2):after {
        display: none;
      }
    }

    p {
      font-size: 20px;
      padding-top: 15px;
      font-weight: 800;

      @media (max-width: 420px) {
        font-size: 16px;
      }
    }
    .grade1 {
      color: #f06e64;
    }
    .grade2 {
      color: #bc5ed6;
    }
    .grade3 {
      color: #464d87;
    }
    .grade4 {
      color: #00b3ba;
    }
  }
`;

export const Img = styled.img`
  width: 91px;
  height: 91px;
  @media (max-width: 420px) {
    width: 70px;
    height: 70px;
  }
`;

export const GradeInfo = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 40px;

  @media (max-width: 420px) {
    flex-wrap: wrap;
  }
  .gradeBox {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 21px;
    text-align: center;
    line-height: 30px;
    font-weight: 600;
    padding: 30px 0;
    width: calc(100% / 4);

    @media (max-width: 420px) {
      width: calc(100% / 2);
      font-size: 16px;
    }

    span {
      font-size: 19px;
      font-weight: 400;
    }
  }
  .grade1 {
    background-color: #f06e64;
  }
  .grade2 {
    background-color: #bc5ed6;
  }
  .grade3 {
    background-color: #464d87;
  }
  .grade4 {
    background-color: #00b3ba;
  }
`;

export const MyGrade = styled.div`
  background-color: #f2efff;
  border-radius: 20px;
  padding: 40px 0px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 420px) {
    flex-direction: column;
    padding: 20px 0;
  }

  div {
    text-align: center;
    padding: 10px 0;

    h5 {
      font-size: 17px;
      padding-bottom: 15px;
    }
    p {
      font-size: 23px;
      font-weight: 700;
      @media (max-width: 420px) {
        color: #339af0;
        font-size: 19px;
      }
    }
  }
`;
