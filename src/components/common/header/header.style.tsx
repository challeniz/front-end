import { FaUserCircle } from 'react-icons/fa';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0px;
  padding: 0px 80px;
  cursor: pointer;
  height: 90px;
  box-sizing: border-box;
  border-bottom: 1px solid #e6e6e6;
  z-index: 99999;

  &.original_header {
    background-color: #fff;
    transition: 0.3s;
  }

  &.change_header {
    background-color: #fff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
    transition: 0.3s;
  }

  @media (max-width: 930px) {
    padding: 0 40px;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Logo = styled.div`
  width: 180px;
`;

export const LogoImg = styled.img`
  width: 100%;
`;

export const HeaderNav = styled.nav`
  height: 100%;
  width: 50%;
  cursor: pointer;
`;

export const NavList = styled.ul`
  display: flex;
  height: 100%;
  padding-left: 50px;
`;

export const NavItem = styled.li`
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  padding: 10px 20px;
  font-weight: 500;
  margin: 0 10px;
  transition: background-color 0.2s;
  position: relative;
  display: flex;
  height: 100%;
  font-size: 18px;

  &:hover {
    // color: #339af0;
    ul {
      visibility: visible;
    }
  }
`;

export const LoginBox = styled.div`
  display: inline-flex;
  margin-left: auto;
  justify-content: flex-end;
  text-align: center;
  cursor: pointer;
  height: 100%;
`;

export const LoginList = styled.ul`
  display: flex;
  height: 100%;
`;

export const LoginItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  font-weight: 600;
  position: relative;
  width: 135px;
  height: 100%;

  &:hover {
    ul {
      visibility: visible;
    }
  }
`;

export const StyledCiUser = styled(FaUserCircle)`
  width: 2em;
  height: 2em;
  }
`;

export const SubMenu = styled.ul`
  visibility: hidden;
  position: absolute;
  background-color: #fff;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  padding: 20px 30px;
  width: 100%;
  top: 89px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
`;

export const InnerLi = styled.li`
  line-height: 35px;
  font-size: 17px;
  display: flex;
  align-items: center;

  svg {
    width: 1.4em;
    height: 1.4em;
    padding-right: 9px;
  }

  &:hover {
    text-decoration: underline;
    color: #339af0;
  }
`;
