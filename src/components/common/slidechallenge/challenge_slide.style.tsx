import styled from 'styled-components';
export const ContentWrap = styled.div`
  text-align: left;
`;

export const ContentsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 50px;
`;

export const ImgStyled = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 20px;
  background-color: #d9d9d9;
  overflow: hidden;
  margin: 0 auto;
  border: 1px solid #eeeeee;

  &.thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;