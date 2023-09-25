import React, { useEffect, useRef } from 'react';
import * as S from './modal.style';
import { AiOutlineClose } from 'react-icons/ai';

interface ModalBasicProps {
  setModalOpen: (open: boolean) => void;
  challengeData: {
    description: string;
    img: string;
  };
  postDate: string;
  userName?: string;
}

function ModalBasic({
  setModalOpen,
  challengeData,
  postDate,
  userName,
}: ModalBasicProps) {
  // 모달 끄기 (X버튼 onClick 이벤트 핸들러)
  const closeModal = () => {
    setModalOpen(false);
  };

  // 모달 외부 클릭시 끄기 처리
  // Modal 창을 useRef로 취득
  const modalRef = useRef<HTMLDivElement>(null);

  // 이벤트 핸들러 함수
  const handler = (event: MouseEvent | TouchEvent) => {
    // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setModalOpen(false);
    }
  };

  // 이벤트 핸들러 등록
  useEffect(() => {
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
          {/* 오늘의 날짜 표시 */}
          <S.PostDay>
            <span>인증 날짜:</span> {postDate}
          </S.PostDay>
          {/* 사용자 이름 표시 */}
          <S.PostName>
            <span>인증한 챌리니:</span> {userName}
          </S.PostName>
          <S.AuthWrap>
            <S.ImgBox>
              {challengeData.img && (
                <img src={challengeData.img} alt="Challenge Image" />
              )}
            </S.ImgBox>
            <S.TextBox>
              <p>{challengeData.description}</p>
            </S.TextBox>
          </S.AuthWrap>
        </S.ModalBox>
      </S.ModalContainer>
    </S.ModalWrap>
  );
}

export default ModalBasic;
