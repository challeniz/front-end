import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import addDays from 'date-fns/addDays';

const StyledDatePicker = styled(DatePicker)`
  width: 406px;
  height: 45px;
  background-color: #f6f6f6;
  border-radius: 5px;
  border: 1px solid #cfcfcf;
  font-size: 16px;
  padding: 0 15px;
`;

const ReactDatePicker = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <StyledDatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate ? addDays(startDate, 4) : null}
      dateFormat="yyyy년MM월dd일"
      onChange={(update) => {
        setDateRange(update);
      }}
      isClearable={true}
      placeholderText="날짜를 선택하세요"
      minDate={new Date()} // Set the minimum date
    />
  );
};

const ReactDatePicker2 = ({ endDate }) => { // Receive endDate as a prop
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate2] = dateRange;

  return (
    <StyledDatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate2}
      dateFormat="yyyy년MM월dd일"
      onChange={(update) => {
        setDateRange(update);
      }}
      isClearable={true}
      placeholderText="날짜를 선택하세요"
      minDate={endDate} // Set the minDate using the received endDate prop
    />
  );
};

export { ReactDatePicker, ReactDatePicker2 };