// src/components/Calendar.js

import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

const Calendar = ({ selectedDate, setSelectedDate }) => {
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar date={selectedDate} onChange={handleDateChange} />
    </LocalizationProvider>
  );
};

export default Calendar;
