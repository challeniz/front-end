import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar'; // Import Calendar from react-calendar
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';


const TabMenu = styled.ul`
  border-bottom:1px solid #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-bottom: 60px;
  margin-top: 10px;
  justify-contents:center;

  .submenu {
    display: flex;
    width:calc(100% / 2);
    padding: 0 20px 15px;
    font-size: 20px;
    border-radius: 10px 10px 0px 0px;
    text-align:center;
    color:#787878;
    cursor:pointer;
    font-weight:600;
    justify-content:center;
  }

  .focused {
    color:#339af0;
    position:relative;
    font-weight:600;

    &::before {
      content:'';
      position:absolute;
      bottom:-3px;
      left:0;
      width:100%;
      background-color:#339af0;
      height:5px;
      border-radius:10px;
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
  text-align:left;
  background-color:#fff;
  padding:30px;
  margin-bottom:30px;

  h2{
    font-size:25px;
    padding-bottom:25px;
    font-weight:700;
  }
  li{
    font-size:18px;
    line-height:35px;
    list-style-image: url("data:image/svg+xml;charset=UTF-8,<svg xmlns='http://www.w3.org/2000/svg' height='20' width='20' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2'><polyline points='20 6 9 17 4 12'></polyline></svg>");
    margin-left:20px;
  }
`

const H2Styled = styled.div`
  
`



export const Tab: React.FC = () => {
  // Define onChange, value, and mark here
  const [value, setValue] = useState(new Date()); // Example initial value
  const mark = ["2023-08-15", "2023-08-16"]; // Example mark array

  // Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한 currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0.
  const [currentTab, clickTab] = useState<number>(0);

  const menuArr = [
    { name: '상세 설명', content: 'Tab menu ONE' },
    { name: '인증 목록', content: 'Tab menu TWO' },
  ];

  const selectMenuHandler = (index: number) => {
    // parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않는다
    // 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신.
    clickTab(index);
  };

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
          // 상세 설명 내용
          <>
          <DetailWrap>
            <h2>챌린지를 소개합니다.</h2>
            <ul>
              <li>"오늘날짜"와 1만보이상걸음수가 기록된 스마트워치화면 또는 웹화면을 올려주세요.</li>
              <li>다른 걷기챌린지(주 3일이내)외에 추가로 운동하실분들 환영합니다~</li>
              <li>매일 걷고 인생체력 만드실분들 어서오세요~</li>
            </ul>
          </DetailWrap>
          <DetailWrap>
              {/* ... (이전 코드 생략) */}
              <h2>챌린지 기간</h2>
              <Calendar
                // onChange={setValue}
                value={value}
                minDetail="month"
                maxDetail="month"
                showNeighboringMonth={false}
                className="mx-auto w-full text-sm border-b"
                tileContent={({ date, view }: { date: Date; view: string }) => {
                  let html: JSX.Element[] = [];
                  if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
                    html.push(<div className="dot"></div>);
                  }
                  return <div>{html}</div>;
                }}
              />
            </DetailWrap>
          </>
        ) : (
          // 인증 목록 내용
          <div></div>
        )}
      </Desc>
    </div>
  );
};
