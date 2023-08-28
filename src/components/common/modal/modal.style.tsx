import styled from 'styled-components';

export const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 어두운 배경 컬러 */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
`;

export const ModalContainer = styled.div`
  /* 모달창 크기 */
  width: 1180px;

  /* 모달창 디자인 */
  background-color: #fff;
  border: 1px solid black;
  border-radius: 8px;
  position: relative;

  button {
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    color: #000;
    background-color: #fff;

    svg {
      width: 1.6em;
      height: 1.6em;
    }
  }
`;

export const ModalBox = styled.div`
  padding: 40px;
  h2 {
    font-size: 32px;
    font-weight: 600;
    padding-bottom: 10px;
  }
  h3 {
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 30px;
    border-bottom: 1px solid #ccc;
  }
`;

export const AuthWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

export const ImgBox = styled.div`
  width: calc(100% / 2.1);
  height: 400px;
  background-color: #d9d9d9;
  border-radius: 15px;
`;

export const TextBox = styled.div`
  width: calc(100% / 2.1);
  height: 400px;
  background-color: #fff;
  border: 1px solid #339af0;
  border-radius: 15px;
  padding: 20px;

  p {
    font-size: 20px;
  }
`;
