import styled from 'styled-components';

export const PageBox = styled.div`
  width: 100%;
  height: 299px;
  border-radius: 15px;
  background-color: #ebf2ff;
  display: flex;
  padding: 37px 86px;
  align-items: center;

  a {
    margin-left: auto;

    @media (max-width: 420px) {
      margin-left: inherit;
      width: 100%;
    }
  }

  @media (max-width: 420px) {
    padding: 20px;
    flex-direction: column;
    height: auto;
  }
`;

export const AvatarWrapper = styled.div`
  width: 226px;
  height: 226px;
  margin-right: 86px;

  @media (max-width: 420px) {
    width: 140px;
    height: 140px;
    margin-right: 0px;
  }
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const PageTxt = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  li:nth-child(1) {
    margin-bottom: 25px;
    font-weight: 400;
    font-size: 33px;
    letter-spacing: 3px;

    span {
      font-size: 36px;
      font-weight: 700;
    }

    @media (max-width: 420px) {
      font-size: 20px;
      margin-bottom: 0px;
    }
  }

  li:nth-child(2) {
    font-size: 27px;

    span {
      font-size: 27px;
      font-weight: 700;
      letter-spacing: 4px;
    }

    @media (max-width: 420px) {
      font-size: 20px;
    }
  }
`;

export const PageBtn = styled.button`
  border-radius: 15px;
  background-color: #339af0;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  margin-left: auto;
  padding: 20px 50px;

  @media (max-width: 420px) {
    margin-left: inherit;
    width: 100%;
    margin-top: 20px;
  }
`;

export const InputStyled = styled.input`
  display: none;
`;
