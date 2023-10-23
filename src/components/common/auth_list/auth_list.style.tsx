import styled from 'styled-components';
import HeartImg from '../../../assets/image/heart_red.png';

export const AuthWrap = styled.div`
  padding: 0px 0 100px;
`;

export const AuthGrid = styled.div`
display: flex;
grid-template-columns: repeat(4, 1fr);
grid-column-gap: 10px;
grid-row-gap: 20px;
flex-wrap: wrap;

`;

export const ImgWrap = styled.div`
  background-color: #d9d9d9;
  width: calc(100% /4.2);
  height: 210px;
  cursor: pointer;
`;

export const CalendarWrap = styled.div`
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
