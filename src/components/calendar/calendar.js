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

const ReactDatePicker = ({ joinningDate, setDate }) => {
  return (
    <StyledDatePicker
      selectsRange={true}
      startDate={joinningDate[0]}
      endDate={joinningDate[1]}
      dateFormat="yyyy년MM월dd일"
      onChange={(update) => {
        const startDate = new Date(update);
        let endDate = new Date(update);
        endDate = new Date(endDate.setDate(endDate.getDate() + 4));

        console.log('update', update);
        console.log('endDate', endDate);

        setDate((prev) => ({
          ...prev,
          joinningDate: [startDate, endDate],
        }));
      }}
      isClearable={true}
      placeholderText="날짜를 선택하세요"
      minDate={new Date()} // Set the minimum date
    />
  );
};

export default ReactDatePicker;