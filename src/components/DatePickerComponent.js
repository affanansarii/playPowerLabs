import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (date) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  return (
    <DatePicker 
      selected={selectedDate}
      onChange={handleChange}
      dateFormat="yyyy/MM/dd"
    />
  );
};

export default DatePickerComponent;