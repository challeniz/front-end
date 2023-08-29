import { CiCalendarDate, CiHeart, CiShare2, CiUser } from 'react-icons/ci';
import styled from 'styled-components';

export const DetailNavs = styled.div`
  &.DetailNavs {
    position: sticky;
    top: 60px;
    width: 28%;
    height: 450px;
    border-radius: 20px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 20%);
    padding: 37px 40px;
    background-color: #fff;
  }

  &.ScrollNavs {
    position: sticky;
    top: 110px;
    width: 28%;
    height: 450px;
    border-radius: 20px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 20%);
    padding: 37px 40px;
    background-color: #fff;
    transitioin: 0.3s;
  }

  h5 {
    font-size: 13px;
    color: #868686;
    font-weight: 400;
    padding-bottom: 50px;
    display: flex;
    align-items: center;

    svg {
      width: 1.5em;
      height: 1.5em;
      padding-right: 4px;
    }
  }
`;
export const DetailTag = styled.a`
  font-size: 16px;
  background-color: #787878;
  margin-right: 5px;
  color: #fff;
  border-radius: 15px;
  padding: 4px 16px;
`;

export const H3Styled = styled.h3`
  font-size: 32px;
  padding: 25px 0 15px;
  font-weight: 600;
`;

export const SubButton = styled.button`
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #339af0;
  border-radius: 10px;
  padding: 10px 13px;
  font-size: 16px;
  font-weight: 600;
  width: calc(100% / 2.1);
`;

export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;
export const ButtonFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledCiShare2 = styled(CiShare2)`
  padding-right: 5px;
  width: 2em;
  height: 2em;
`;

export const StyledCiHeart = styled(CiHeart)`
  padding-right: 5px;
  width: 2em;
  height: 2em;
`;

export const MainButton = styled.button`
  width: 100%;
  background: linear-gradient(90deg, #74c0fc 0%, #228be6 100%);
  padding: 20px 0;
  border-radius: 15px;
  border: 2px solid #fff;
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 23px;
  transition: 0.2s;

  &:hover {
    border: 2px solid #228be6;
    transition: 0.2s;
  }
`;

export const DetailInfo = styled.div`
  border-top: 1px solid #dbdbdb;
  padding-top: 25px;
`;
export const PStyled = styled.p`
  color: #868686;
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 4px;
  display: flex;
  align-items: center;
`;

export const StyledCiCalendar = styled(CiCalendarDate)`
  padding-right: 10px;
  width: 2em;
  height: 2em;
`;

export const StyledCiUser = styled(CiUser)`
  padding-right: 10px;
  width: 2em;
  height: 2em;
`;
