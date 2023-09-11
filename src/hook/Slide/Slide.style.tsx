import styled from 'styled-components';

export const SlideWrap = styled.div`
  position: relative;
`;

export const PageWrap = styled.div`
  position: absolute;
  top: -76px;
  left: 280px;
  z-index: 99;
  display: flex;

  svg {
    cursor: pointer;
    width: 2em;
    height: 2em;
    margin-right: 10px;
    color: #474747;
  }
`;
