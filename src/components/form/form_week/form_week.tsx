import React, { useState, useEffect } from 'react';
import * as S from './form_week.style';

interface WeekSelectorProps {
  onSelectWeek?: (start: Date | null, end: Date | null) => void;
  selectedDate?: Date | null; // DateSelector에서 선택한 날짜
}

const WeekSelector: React.FC<WeekSelectorProps> = ({
  onSelectWeek,
  selectedDate,
}) => {
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);

  const handleWeekClick = (week: number) => {
    if (selectedWeek === week) {
      setSelectedWeek(null);
      onSelectWeek && onSelectWeek(null, null);
    } else {
      setSelectedWeek(week);
      const startDate = selectedDate
        ? calculateStartDate(selectedDate, week)
        : null;
      const endDate = startDate ? calculateEndDate(startDate, week) : null;
      onSelectWeek && onSelectWeek(startDate, endDate);
    }
  };

  const calculateStartDate = (selectedDate: Date, week: number) => {
    const startDate = new Date(selectedDate);
    startDate.setDate(selectedDate.getDate() + 1); // 선택한 날짜 다음날부터 시작
    startDate.setDate(startDate.getDate() + 7 * (week - 1)); // 선택한 주차에 따라 계산
    return startDate;
  };

  const calculateEndDate = (startDate: Date, week: number) => {
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 7 * week); // 선택한 주차에 따라 계산
    return endDate;
  };

  useEffect(() => {
    // selectedDate가 변경될 때 라벨을 업데이트
    const startDate = selectedDate
      ? calculateStartDate(selectedDate, selectedWeek || 1)
      : null;
    const endDate = startDate
      ? calculateEndDate(startDate, selectedWeek || 1)
      : null;
    onSelectWeek && onSelectWeek(startDate, endDate);
  }, [selectedDate, selectedWeek, onSelectWeek]);

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
      {selectedDate && (
        <S.Label>
          {formatDate(selectedDate)} ~{' '}
          {formatDate(calculateEndDate(selectedDate, selectedWeek || 1))}
        </S.Label>
      )}
    </S.WeekWrap>
  );
};

export default WeekSelector;
