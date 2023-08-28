import React, { useEffect, useRef } from 'react';
import * as S from './modal.style';
import { AiOutlineClose } from 'react-icons/ai';

interface ModalBasicProps {
  setModalOpen: (open: boolean) => void;
}

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
    <S.ModalWrap>
      <S.ModalContainer ref={modalRef}>
        <button onClick={closeModal}>
          <AiOutlineClose />
        </button>
        <S.ModalBox>
          <h2>2023.08.21 (금)</h2>
          <h3>만보 걷기 챌린지</h3>
          <S.AuthWrap>
            <S.ImgBox></S.ImgBox>
            <S.TextBox>
              <p>오늘도 만보 걸었다!!</p>
            </S.TextBox>
          </S.AuthWrap>
        </S.ModalBox>
      </S.ModalContainer>
    </S.ModalWrap>
  );
}

export default ModalBasic;
