import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import addDays from 'date-fns/addDays';
import ReactDatePicker from './calendar';
const StyledDatePicker = styled(DatePicker)`
  width: 406px;
  height: 45px;
  background-color: #f6f6f6;
  border-radius: 5px;
  border: 1px solid #cfcfcf;
  font-size: 16px;
  padding: 0 15px;
`;

const ReactDatePicker2 = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  
  return (
    <StyledDatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      dateFormat="yyyy년MM월dd일"
      onChange={(update) => {
        setDateRange(update);
      }}
      isClearable={true}
      placeholderText="날짜를 선택하세요"
      minDate={new Date()}
    />
  );
};
// endDate={endDate ? addDays(startDate, 4) : null} ->4일범위만설정됨

export default ReactDatePicker2;
