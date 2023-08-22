import React, { useState } from 'react';
import styled from 'styled-components';
import ModalBasic from './modal';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import HeartImg from '../../assets/image/heart_red.png';

const AuthWrap = styled.div`
  padding: 30px 0 100px;
`;

const AuthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`;

const ImgWrap = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  height: 310px;
  cursor: pointer;
`;

const CalendarWrap = styled.div`
  width: 100%;
  height: 310px;

  .fc {
    width: 100%;
    height: 100%;
  }
  .fc .fc-toolbar.fc-header-toolbar {
    margin-bottom: 0px;
  }
  .fc .fc-toolbar-title {
    font-size: 15px;
  }
  .fc .fc-button {
    font-size: 14px;
    padding: 4px 10px;
  }
  .fc .fc-view-harness {
    font-size: 11px;
  }
  .fc-event-main img {
    width: 30px;
    height: 30px;
  }
  .fc-h-event {
    background-color: #f9f518;
    border: 1px solid #f9f518;
    display: block;
    height: 15px;
  }
  .fc-daygrid-event {
    border-radius: 10px;
  }
  .event1-class {
    /* 스타일 커스터마이징 */
  }
  .event2-class {
    background-image: url(${HeartImg});
    background-size: cover;
    border: none;
    width: 43px;
    height: 43px;
    background-color: transparent;
    position: absolute;
    top: -21px;
    left: 0px;
  }
`;

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
      <AuthWrap>
        <h2>만보 걷기 챌린지</h2>
        <AuthGrid>
          <CalendarWrap>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              weekends={true}
              locale="ko"
              titleFormat={{ year: 'numeric', month: 'long' }}
              events={event1.concat(event2)}
            />
          </CalendarWrap>
          <ImgWrap onClick={showModal}></ImgWrap>
          <ImgWrap onClick={showModal}></ImgWrap>
          <ImgWrap onClick={showModal}></ImgWrap>
          {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
        </AuthGrid>
      </AuthWrap>
      <AuthWrap>
        <h2>영어 단어 하루에 100개 외우기</h2>
        <AuthGrid>
          <CalendarWrap>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              weekends={true}
              locale="ko"
              titleFormat={{ year: 'numeric', month: 'long' }}
              events={event1.concat(event2)}
            />
          </CalendarWrap>
          <ImgWrap onClick={showModal}></ImgWrap>
          <ImgWrap onClick={showModal}></ImgWrap>
          <ImgWrap onClick={showModal}></ImgWrap>
          {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
        </AuthGrid>
      </AuthWrap>
    </>
  );
};

export default AuthList;
