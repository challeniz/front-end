import styled from 'styled-components';

export const StatusWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
`;

export const InfoFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 15px;

  h3:hover {
    text-decoration: underline;
  }
`;

export const ImgWrap = styled.div`
  width: 300px;
  height: 126px;
  border-radius: 23px;
  margin-bottom: 14px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;
  }
`;

export const InfoWrap = styled.div`
  // display: flex;
  // width: 300px;
  // flex-direction: column;
`;

export const ButtonAuth = styled.div`
  border-radius: 10px;
  border: 1px solid #339af0;
  width: 100%;
  font-size: 18px;
  text-align: center;
  padding: 16px 0;
  cursor: pointer;

  &:hover {
    background-color: #339af0;
    color: #fff;
  }
`;
