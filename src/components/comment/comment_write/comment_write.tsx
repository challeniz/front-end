import React, { useEffect, useRef, useState } from 'react';
import * as S from './comment_write.style';
import { AiOutlineClose } from 'react-icons/ai';
import { ImStarFull } from 'react-icons/im';
import {
  FormButton,
  FormCancelButton,
  FormSubmitButton,
} from '../../form/form_button/form_button';
import { apiInstance } from '../../../utils/api';
import { useParams } from 'react-router-dom';

interface ModalBasicProps {
  setModalOpen: (open: boolean) => void;
  star?: number; // star를 props로 받음
  description?: string; // description을 props로 받음
  onSubmit: (star: number, description: string) => void; // onSubmit을 추가
}

interface Challenge {
  id: string;
}

function ModalBasic({
  setModalOpen,
  star,
  description,
  onSubmit,
}: ModalBasicProps) {
  const { id } = useParams();
  const [challengeList, setChallengeList] = useState<Challenge[]>([]);
  console.log('id:', id); // id 값을 로그로 출력
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

  const [localDescription, setLocalDescription] = useState<string>(
    description || ''
  );
  const handleStarClick = (index: number) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  const sendReview = async () => {
    try {
      const score = star || 0; // star 값이 없으면 0으로 설정
      const response = await apiInstance.post(`/review/${id}`, {
        star,
        description: localDescription,
      });

      if (response.status === 201) {
        alert('리뷰가 정상적으로 등록되었습니다.');
        onSubmit(score, localDescription); // onSubmit 콜백 함수 호출
      } else {
        console.error('리뷰 전송 중 오류가 발생했습니다.');
        // 오류 처리 코드 추가
      }
    } catch (error) {
      console.error('오류 발생:', error);
      // 오류 처리 코드 추가
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiInstance.get(`/challenges/${id}`);
        const data = response.data;

        if (data.length > 0) {
          const challenges = data.map((challenge: any) => ({
            id: challenge._id,
          }));

          setChallengeList(challenges);
        }
      } catch (error) {
        console.error('데이터 불러오기 오류:', error);
      }
    };

    fetchData();
  }, [id]);

  console.log('챌린지 id:', id); // 챌린지 id 값을 로그로 출력

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
            <S.Textarea
              value={localDescription}
              onChange={(e) => setLocalDescription(e.target.value)}
            ></S.Textarea>

            <FormButton>
              <FormSubmitButton onClick={sendReview}>등록하기</FormSubmitButton>
            </FormButton>
          </S.AuthWrap>
        </S.ModalBox>
      </S.ModalContainer>
    </S.ModalWrap>
  );
}

export default ModalBasic;
