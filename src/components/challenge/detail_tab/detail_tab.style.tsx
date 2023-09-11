import styled from 'styled-components';

export const H2Styled = styled.div``;

export const TabMenu = styled.ul`
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

export const Desc = styled.div`
  text-align: center;
`;

export const DetailWrap = styled.div`
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
    line-height: 28px;
    white-space: pre-line;
  }
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
  .fc-event-time {
    display: none;
  }
  .fc-h-event .fc-event-title {
    font-size: 13px;
    font-weight: 500;
  }
  .fc-daygrid-block-event .fc-event-time,
  .fc-daygrid-block-event .fc-event-title {
    padding: 3px 10px;
  }
  .event1-class {
    background: rgb(255 249 0);
    border: none;

    .fc-event-title {
      font-size: 13px;
      font-weight: 500;
      color: #000;
    }
  }
`;
