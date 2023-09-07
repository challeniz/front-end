import React, { useState } from 'react';
import * as S from './form_date.style';
import { BsCalendarWeek } from 'react-icons/bs';

interface DateSelectorProps {
  onSelectDate?: (date: Date) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ onSelectDate }) => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date | null>(today);

  const handleDateClick = (date: Date) => {
    if (selectedDate === date) {
      setSelectedDate(null);
    } else {
      setSelectedDate(date);
      onSelectDate && onSelectDate(date);
      console.log('Selected date:', date); // 라벨에 들어간 날짜를 출력
    }
  };

  const RecruEndDate = (startDate: Date) => {
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + (7 - startDate.getDay()));
    return endDate;
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
    const recruitmentEndDate = isSelected ? RecruEndDate(date) : null;

    dateButtons.push(
      <S.Button
        key={i}
        onClick={() => handleDateClick(date)}
        className={isSelected ? 'selected' : ''}
      >
        {formatDate(date)}
      </S.Button>
    );

    if (recruitmentEndDate) {
      onSelectDate && onSelectDate(recruitmentEndDate);
    }
  }

  return (
    <S.DateWrap>
      <div>{dateButtons}</div>
      {selectedDate && (
        <S.Label>
          <BsCalendarWeek /> {formatDate(selectedDate)} ~{' '}
          {formatDate(RecruEndDate(selectedDate))}
        </S.Label>
      )}
    </S.DateWrap>
  );
};

export default DateSelector;
