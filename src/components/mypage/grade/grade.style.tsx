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
`;

export const GradeWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 40px 0;
  gap: 50px;

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

    p {
      font-size: 20px;
      padding-top: 15px;
      font-weight: 800;
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
`;

export const GradeInfo = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 40px;
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

  div {
    text-align: center;

    h5 {
      font-size: 17px;
      padding-bottom: 15px;
    }
    p {
      font-size: 23px;
      font-weight: 700;
    }
  }
`;
