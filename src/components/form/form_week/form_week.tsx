import React, { useState, useEffect } from 'react';
import * as S from './form_week.style';
import { BsCalendarWeek } from 'react-icons/bs';

interface WeekSelectorProps {
  onSelectWeek?: (startDate: Date | null, endDate: Date | null) => void;
  selectedDate?: Date | null;
  recruEndDate?: Date | null;
}

const WeekSelector: React.FC<WeekSelectorProps> = ({
  onSelectWeek,
  selectedDate,
  recruEndDate,
}) => {
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleWeekClick = (week: number) => {
    if (selectedWeek === week) {
      setSelectedWeek(null);
      setStartDate(null);
      setEndDate(null);
      onSelectWeek && onSelectWeek(null, null);
    } else {
      setSelectedWeek(week);

      if (recruEndDate) {
        const calculatedStartDate = new Date(recruEndDate);
        calculatedStartDate.setDate(calculatedStartDate.getDate() + 1); // 시작날짜 설정

        const calculatedEndDate = new Date(calculatedStartDate);
        calculatedEndDate.setDate(calculatedEndDate.getDate() + 7 * week); // 선택한 주차에 따라 계산
        setStartDate(calculatedStartDate);
        setEndDate(calculatedEndDate);
        onSelectWeek && onSelectWeek(calculatedStartDate, calculatedEndDate);
      } else {
        // 모집일 데이터가 없을 때 알림창 표시
        alert('모집 시작일을 선택하세요');
        setSelectedWeek(null);
      }
    }
  };

  useEffect(() => {
    if (selectedDate && recruEndDate && selectedWeek !== null) {
      const calculatedStartDate = new Date(recruEndDate);
      calculatedStartDate.setDate(calculatedStartDate.getDate() + 1); // 시작날짜 설정

      const calculatedEndDate = new Date(calculatedStartDate);
      calculatedEndDate.setDate(calculatedEndDate.getDate() + 7 * selectedWeek); // 선택한 주차에 따라 계산
      setStartDate(calculatedStartDate);
      setEndDate(calculatedEndDate);
    }
  }, [selectedDate, recruEndDate, selectedWeek]);

  const formatDate = (date: Date) => {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];
    return `${month}월 ${day}일 (${dayOfWeek})`;
  };

  const weeks = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <S.WeekWrap>
      {weeks.map((week) => (
        <S.Button
          key={week}
          onClick={() => handleWeekClick(week)}
          className={selectedWeek === week ? 'selected' : ''}
        >
          {week}주
        </S.Button>
      ))}
      {startDate && endDate && (
        <S.Label>
          <BsCalendarWeek /> {formatDate(startDate)} ~ {formatDate(endDate)}
        </S.Label>
      )}
    </S.WeekWrap>
  );
};

export default WeekSelector;
