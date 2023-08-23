import React, { useState } from 'react';
import * as S from './detail_tab.style';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import CommentBox from '../../comment/comment/comment';

export const Tab: React.FC = () => {
  const [currentTab, clickTab] = useState<number>(0);

  const menuArr = [
    { name: '상세 설명', content: 'Tab menu ONE' },
    { name: '인증 목록', content: 'Tab menu TWO' },
  ];

  const selectMenuHandler = (index: number) => {
    clickTab(index);
  };

  const event1 = [
    {
      title: '모집기간',
      start: '2023-08-10',
      end: '2023-08-15',
      classNames: 'event1-class',
    },
  ];

  const event2 = [
    {
      title: '진행기간',
      start: '2023-08-15',
      end: '2023-08-29',
      classNames: 'event2-class',
    },
  ];

  return (
    <div>
      <S.TabMenu>
        {menuArr.map((el, index) => (
          <li
            className={index === currentTab ? 'submenu focused' : 'submenu'}
            onClick={() => selectMenuHandler(index)}
            key={el.name}
          >
            {el.name}
          </li>
        ))}
      </S.TabMenu>
      <S.Desc>
        {currentTab === 0 ? (
          <>
            <S.DetailWrap>
              <h2>챌린지를 소개합니다.</h2>
              <ul>
                <li>
                  "오늘날짜"와 1만보이상걸음수가 기록된 스마트워치화면 또는
                  웹화면을 올려주세요.
                </li>
                <li>
                  다른 걷기챌린지(주 3일이내)외에 추가로 운동하실분들
                  환영합니다~
                </li>
                <li>매일 걷고 인생체력 만드실분들 어서오세요~</li>
              </ul>
            </S.DetailWrap>
            <S.DetailWrap>
              <h2>챌린지 기간</h2>
              <S.CalendarWrap>
                <FullCalendar
                  plugins={[dayGridPlugin]}
                  initialView="dayGridMonth"
                  weekends={true}
                  locale="ko"
                  titleFormat={{ year: 'numeric', month: 'long' }}
                  events={event1.concat(event2)}
                />
              </S.CalendarWrap>
              <CommentBox></CommentBox>
            </S.DetailWrap>
          </>
        ) : (
          <div>인증 목록 내용</div>
        )}
      </S.Desc>
    </div>
  );
};
