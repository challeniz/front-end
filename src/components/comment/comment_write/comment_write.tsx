import React, { useEffect, useRef, useState } from 'react';
import * as S from './comment_write.style';
import { AiOutlineClose } from 'react-icons/ai';
import { ImStarFull } from 'react-icons/im';
import {
  FormButton,
  FormCancelButton,
  FormSubmitButton,
} from '../../form/form_button/form_button';

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

  const [clicked, setClicked] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleStarClick = (index: number) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  useEffect(() => {
    sendReview();
  }, [clicked]);

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
    // 실제로 사용할 때 주석 처리를 해제하고 요청을 보내세요.
    // fetch('http://52.78.63.175:8000/movie', {
    //   method: 'POST',
    //   headers: {
    //     Authorization: 'e7f59ef4b4900fe5aa839fcbe7c5ceb7',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     movie_id: 1,
    //     star: score,
    //   }),
    // });
  };

  const handleChallengeSubmit = async () => {};

  return (
    <S.ModalWrap>
      <S.ModalContainer ref={modalRef}>
        <S.CloseButton onClick={closeModal}>
          <AiOutlineClose />
        </S.CloseButton>
        <S.ModalBox>
          <S.AuthWrap>
            <h2>후기 작성하기</h2>
            <S.Stars>
              {clicked.map((isClicked, idx) => (
                <ImStarFull
                  key={idx}
                  size={50}
                  onClick={() => handleStarClick(idx)}
                  className={isClicked ? 'yellowStar' : ''}
                />
              ))}
            </S.Stars>
            <S.Textarea></S.Textarea>
            <FormButton>
              <FormCancelButton>취소하기</FormCancelButton>
              <FormSubmitButton onClick={handleChallengeSubmit}>
                등록하기
              </FormSubmitButton>
            </FormButton>
          </S.AuthWrap>
        </S.ModalBox>
      </S.ModalContainer>
    </S.ModalWrap>
  );
}

export default ModalBasic;
