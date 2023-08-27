import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './detail_tab.style';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import CommentBox from '../../comment/commentbox/comment';
import { apiInstance } from '../../../utils/api';
import moment from 'moment';

export const Tab: React.FC = () => {
  const { id } = useParams();
  const [currentTab, clickTab] = useState<number>(0);

  const menuArr = [
    { name: '상세 설명', content: 'Tab menu ONE' },
    { name: '인증 목록', content: 'Tab menu TWO' },
  ];

  const selectMenuHandler = (index: number) => {
    clickTab(index);
  };

  // 챌린지 데이터 호출
  const [challengeInfo, setChallengeInfo] = useState({
    description: '',
    start_date: '',
    end_date: '',
    recru_open_date: '',
    recru_end_date: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiInstance.get(`/challenges/${id}`);
        const data = response.data;

        if (data) {
          setChallengeInfo({
            description: data.description,
            start_date: data.start_date,
            end_date: data.end_date,
            recru_open_date: data.recru_open_date,
            recru_end_date: data.recru_end_date,
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  // Moment.js를 사용하여 날짜 데이터 변환
  const recruOpenDate = moment(challengeInfo.recru_open_date).toDate();
  const recruEndDate = moment(challengeInfo.recru_end_date).toDate();
  const startDate = moment(challengeInfo.start_date).toDate();
  const endDate = moment(challengeInfo.end_date).toDate();

  const event1 = [
    {
      title: '모집기간',
      start: recruOpenDate,
      end: recruEndDate,
      classNames: 'event1-class',
    },
  ];

  const event2 = [
    {
      title: '진행기간',
      start: startDate,
      end: endDate,
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
                <li>{challengeInfo.description}</li>
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
            </S.DetailWrap>
            <S.DetailWrap>
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
