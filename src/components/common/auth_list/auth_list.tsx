import React, { useState } from 'react';
import * as S from './auth_list.style';
import ModalBasic from '../modal/modal';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

interface AuthListProps {}

const AuthList: React.FC<AuthListProps> = () => {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  // 시작 날짜와 끝 날짜
  const event1 = [
    {
      start: '2023-08-01',
      end: '2023-08-14',
      classNames: ['event1-class'], // 클래스 이름 할당
    },
  ];

  const event2 = [
    {
      start: '2023-08-07',
      end: '2023-08-10',
      classNames: ['event2-class'], // 클래스 이름 할당
    },
  ];

  return (
    <>
      <S.AuthWrap>
        {/* <h2>만보 걷기 챌린지</h2> */}
        <S.AuthGrid>
          {/* <S.CalendarWrap>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              weekends={true}
              locale="ko"
              titleFormat={{ year: 'numeric', month: 'long' }}
              events={event1.concat(event2)}
            />
          </S.CalendarWrap> */}
          <S.ImgWrap onClick={showModal}></S.ImgWrap>
          <S.ImgWrap onClick={showModal}></S.ImgWrap>
          <S.ImgWrap onClick={showModal}></S.ImgWrap>
          {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
        </S.AuthGrid>
      </S.AuthWrap>
    </>
  );
};

export default AuthList;
