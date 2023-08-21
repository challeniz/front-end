import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

interface ModalBasicProps {
  setModalOpen: (open: boolean) => void;
}

const ModalWrap = styled.div`
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

const ModalContainer = styled.div`
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

const ModalBox = styled.div`
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

const AuthWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const ImgBox = styled.div`
  width: calc(100% / 2.1);
  height: 400px;
  background-color: #d9d9d9;
  border-radius: 15px;
`;

const TextBox = styled.div`
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

function ModalBasic({ setModalOpen }: ModalBasicProps) {
  // 모달 끄기 (X버튼 onClick 이벤트 핸들러)
  const closeModal = () => {
    setModalOpen(false);
  };

  // 모달 외부 클릭시 끄기 처리
  // Modal 창을 useRef로 취득
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (event: MouseEvent | TouchEvent) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setModalOpen(false);
      }
    };

    // 이벤트 핸들러 등록
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler); // 모바일 대응

    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler); // 모바일 대응
    };
  }, [setModalOpen]);

  return (
    <ModalWrap>
      <ModalContainer ref={modalRef}>
        <button onClick={closeModal}>
          <AiOutlineClose />
        </button>
        <ModalBox>
          <h2>2023.08.21 (금)</h2>
          <h3>만보 걷기 챌린지</h3>
          <AuthWrap>
            <ImgBox></ImgBox>
            <TextBox>
              <p>오늘도 만보 걸었다!!</p>
            </TextBox>
          </AuthWrap>
        </ModalBox>
      </ModalContainer>
    </ModalWrap>
  );
}

export default ModalBasic;
