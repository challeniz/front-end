import React, { useState } from 'react';
import * as S from './form_date.style';
import { BsCalendarWeek } from 'react-icons/bs';

interface DateSelectorProps {
  onSelectDateRange?: (startDate: Date, endDate: Date) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ onSelectDateRange }) => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [recruStartDate, setRecruStartDate] = useState<Date | null>(null);
  const [recruEndDate, setRecruEndDate] = useState<Date | null>(null);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);

    // 시작 날짜 설정
    const start = new Date(date);
    start.setHours(0, 0, 0, 0);
    setRecruStartDate(start);

    // 종료 날짜 설정 (선택한 날짜의 다음 주 일요일)
    const end = new Date(date);
    end.setDate(end.getDate() + (7 - end.getDay()));
    end.setHours(23, 59, 59, 999); // 일요일의 마지막 시각으로 설정
    setRecruEndDate(end);

    // 콜백 함수로 선택된 날짜 범위 전달
    onSelectDateRange && onSelectDateRange(start, end);
  };

  const formatDate = (date: Date) => {
    const monthNames = [
      '1월',
      '2월',
      '3월',
      '4월',
      '5월',
      '6월',
      '7월',
      '8월',
      '9월',
      '10월',
      '11월',
      '12월',
    ];
    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const dayOfWeek = dayNames[date.getDay()];
    return `${month} ${day}일 (${dayOfWeek})`;
  };

  const dateButtons = [];

  for (let i = 0; i < 5; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const isSelected =
      selectedDate && selectedDate.toDateString() === date.toDateString();

    dateButtons.push(
      <S.Button
        key={i}
        onClick={() => handleDateClick(date)}
        className={isSelected ? 'selected' : ''}
      >
        {formatDate(date)}
      </S.Button>
    );
  }

  return (
    <S.DateWrap>
      <div>{dateButtons}</div>
      {recruStartDate && recruEndDate && (
        <S.Label>
          <BsCalendarWeek /> {formatDate(recruStartDate)} ~{' '}
          {formatDate(recruEndDate)}
        </S.Label>
      )}
    </S.DateWrap>
  );
};

export default DateSelector;
