// ModalBasic 컴포넌트
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './modal.style';
import { AiOutlineClose } from 'react-icons/ai';
import { apiInstance } from '../../../utils/api';

interface ModalBasicProps {
  setModalOpen: (open: boolean) => void;
}

interface Challenge {
  description: string;
  img: string;
}

function ModalBasic({ setModalOpen }: ModalBasicProps) {
  // 모달 끄기 (X버튼 onClick 이벤트 핸들러)
  const closeModal = () => {
    setModalOpen(false);
  };

  // 모달 외부 클릭시 끄기 처리
  // Modal 창을 useRef로 취득
  const modalRef = useRef<HTMLDivElement>(null);

  // challengeData 상태를 이곳으로 이동
  const [challengeData, setChallengeData] = useState({
    description: '',
    img: '',
  });

  const { id } = useParams();

  // challengeList 상태를 이곳으로 이동
  const [challengeList, setChallengeList] = useState<Challenge[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiInstance.get(`/posts/challenges/${id}`);
        const data = response.data;
        console.log('인증하기', data[0]);
        if (data.length > 0) {
          const challenges = data.map((challenge: any) => ({
            img: challenge.img, // 이미지 URL을 사용
            description: challenge.description,
            title: challenge.title,
          }));
          setChallengeList(challenges);
        }
      } catch (error) {
        console.error('데이터 가져오기 오류:', error);
      }
    };

    fetchData();
  }, [id]);

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
          {challengeList.map((challenge, index) => (
            <S.AuthWrap key={index}>
              <S.ImgBox>
                {challenge.img && (
                  <img src={challenge.img} alt="Challenge Image" />
                )}
              </S.ImgBox>
              <S.TextBox>
                <p>{challenge.description}</p>
              </S.TextBox>
            </S.AuthWrap>
          ))}
        </S.ModalBox>
      </S.ModalContainer>
    </S.ModalWrap>
  );
}

export default ModalBasic;
