import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const StyledDatePicker = styled(DatePicker)`
  width: 406px;
  height: 45px;
  background-color: #f6f6f6;
  border-radius: 5px;
  border: 1px solid #cfcfcf;
  font-size: 16px;
  padding: 0 15px;
`;

const ReactDatePicker2 = ({ startDate, setDate }) => {
  return (
    <StyledDatePicker
      selectsRange={true}
      startDate={startDate[0]}
      endDate={startDate[1]}
      dateFormat="yyyy년MM월dd일"
      onChange={(update) => {
        setDate((prev) => ({
          ...prev,
          startDate: update,
        }));
      }}
      isClearable={false}
      placeholderText="날짜를 선택하세요"
      minDate={new Date()}
    />
  );
};
// endDate={endDate ? addDays(startDate, 4) : null} ->4일범위만설정됨

export default ReactDatePicker2;
