import styled from 'styled-components';

export const ScrollButton = styled.button<{ show: boolean }>`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: fixed;
  bottom: 93px;
  right: 22px;
  z-index: 99;
  background-color: #339af0;
  color: #fff;
  border: 1px solid #339af0;
  padding: 12px 16px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 25px;
  box-shadow: 2px 1px 8px 1px rgba(0, 0, 0, 0.3);
  transition: 0.3s;

  svg {
    transition: 0.3s;
  }

  &:hover {
    svg {
      transform: translateY(-4px);
      transition: 0.3s;
    }
  }
`;
