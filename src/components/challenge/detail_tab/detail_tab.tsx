import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import CommentBox from '../../comment/comment';
const TabMenu = styled.ul`
  border-bottom: 1px solid #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-bottom: 60px;
  margin-top: 10px;
  justify-contents: center;

  .submenu {
    display: flex;
    width: calc(100% / 2);
    padding: 0 20px 15px;
    font-size: 20px;
    border-radius: 10px 10px 0px 0px;
    text-align: center;
    color: #787878;
    cursor: pointer;
    font-weight: 600;
    justify-content: center;
  }

  .focused {
    color: #339af0;
    position: relative;
    font-weight: 600;

    &::before {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      background-color: #339af0;
      height: 5px;
      border-radius: 10px;
    }
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: center;
`;

const DetailWrap = styled.div`
  text-align: left;
  background-color: #fff;
  padding: 30px;
  margin-bottom: 30px;
  border-radius: 10px;

  h2 {
    font-size: 25px;
    padding-bottom: 25px;
    font-weight: 700;
  }
  li {
    font-size: 18px;
    line-height: 35px;
    list-style-image: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2'><polyline points='20 6 9 17 4 12'></polyline></svg>");
    margin-left: 20px;
  }
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

  .event1-class {
    background: rgba(255, 246, 40, 0.43);
    border: none;

    .fc-event-title {
      color: #000;
    }
  }
`;

const H2Styled = styled.div``;

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
      <TabMenu>
        {menuArr.map((el, index) => (
          <li
            className={index === currentTab ? 'submenu focused' : 'submenu'}
            onClick={() => selectMenuHandler(index)}
            key={el.name}
          >
            {el.name}
          </li>
        ))}
      </TabMenu>
      <Desc>
        {currentTab === 0 ? (
          <>
            <DetailWrap>
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
            </DetailWrap>
            <DetailWrap>
              <h2>챌린지 기간</h2>
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
              <CommentBox></CommentBox>
            </DetailWrap>
          </>
        ) : (
          <div>인증 목록 내용</div>
        )}
      </Desc>
    </div>
  );
};
