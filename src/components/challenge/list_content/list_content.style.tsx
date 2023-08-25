import styled from 'styled-components';
import HeartButton from '../heart/heart';

export const ListWrap = styled.div`
  height: 100vh;
`;

export const TabMenu = styled.ul`
  border-bottom: 1px solid #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-bottom: 60px;
  margin-top: 10px;
  justify-contents: center;

  .submenu {
    display: flex;
    padding: 0 25px 15px;
    font-size: 20px;
    border-radius: 10px 10px 0px 0px;
    text-align: center;
    color: #787878;
    cursor: pointer;
    font-weight: 600;
  }

  .focused {
    color: #339af0;
    position: relative;
    font-weight: 600;

    &::before {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      background-color: #339af0;
      height: 5px;
      border-radius: 10px;
    }
  }

  & div.desc {
    text-align: center;
  }
`;

export const CategoryTab = styled.div`
  display: flex;
  margin-bottom: 20px;

  span {
    cursor: pointer;
    margin-right: 10px;
    &.active {
      font-weight: bold;
    }
  }
`;

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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledHeartButton = styled(HeartButton)`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
`;

export const TabWrap = styled.div`
  margin: 20px 0;
`;

export const TabStyled = styled.a`
  background-color: #d9d9d9;
  border-radius: 10px;
  padding: 4px 15px;
  font-size: 13px;
  margin-right: 5px;
`;

export const H3Styled = styled.h3`
  font-size: 25px;
  padding-bottom: 20px;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  letter-spacing: -0.8px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const H4Styled = styled.h4`
  font-size: 15px;
  font-weight: 400;
  color: #686868;
  display: flex;
  align-items: center;

  svg {
    width: 1.2em;
    height: 1.2em;
    padding-right: 5px;
  }
`;
