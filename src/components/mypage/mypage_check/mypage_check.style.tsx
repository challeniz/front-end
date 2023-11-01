import styled from 'styled-components';
import HeartImg from '../../../assets/image/heart_red.png';
import FullCalendar from '@fullcalendar/react';

export const AuthWrap = styled.div`
  padding: 0px 0 100px;
`;

export const AuthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  width: 100%;
  padding: 20px;
`;

export const ImgWrap = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  height: 210px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const MypageH1 = styled.h1`
  font-size: 28px;
  padding: 10px 0 10px 0px;
`;
export const FullCalendarDisplay = styled.div`
  display: flex;
  margin-left: 20px;
  justify-content: center;
  align-items: center;
`;

export const FullCalendarDiv = styled.div`
  width: 400px;
  font-size: 10px;

  .fc-daygrid-block-event {
    display: none;
  }
  .fc {
    width: 100%;
    height: 100%;
  }
  .fc-event-time,
  .fc-event-title {
    display: none;
  }
  .fc-daygrid-event-dot {
    margin-left: auto;
    margin-right: auto;
  }
  .fc-daygrid-day-number {
    margin-left: auto;
    margin-right: auto;
  }
`;
