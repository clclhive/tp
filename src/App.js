// src/App.js

import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import PatientSearch from './components/PatientSearch';
import Calendar from './components/Calendar';
import Category from './components/Category';
import dayjs from 'dayjs';
import { mockPatientData } from './api/mockData';

function App() {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [patientsOnSelectedDate, setPatientsOnSelectedDate] = useState([]);

  // 달력에서 날짜 선택 시 해당 날짜와 일치하는 검사일을 가진 환자 필터링
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    const patients = mockPatientData.filter((patient) =>
      dayjs(patient.recentCheckup).isSame(newDate, 'day')
    );
    setPatientsOnSelectedDate(patients);
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f0f4ff', minHeight: '100vh' }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
        <Typography variant="h4">SNUH</Typography>
        <Typography>박규동 의사 Logout</Typography>
      </Box>

      {/* Patient Search */}
      <PatientSearch />

      {/* Category */}
      <Category />

      {/* Schedule */}
      <Box sx={{ backgroundColor: '#e3eafc', padding: 3, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>오늘의 일정</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Calendar */}
          <Box sx={{ width: '60%' }}>
            <Calendar selectedDate={selectedDate} setSelectedDate={handleDateChange} />
          </Box>

          {/* Patient List on Selected Date */}
          <Box sx={{ width: '35%' }}>
            <Typography>선택된 날짜의 환자 목록</Typography>
            {patientsOnSelectedDate.length > 0 ? (
              patientsOnSelectedDate.map((patient) => (
                <Box
                  key={patient.code}
                  sx={{ display: 'flex', justifyContent: 'space-between', padding: 1, borderBottom: '1px solid #ccc' }}
                >
                  <Typography>코드: {patient.code}</Typography>
                  <Typography>이름: {patient.name}</Typography>
                </Box>
              ))
            ) : (
              <Typography>선택된 날짜에 검사한 환자가 없습니다.</Typography>
            )}
          </Box>
        </Box>
      </Box>

      {/* Today's Schedule */}
      <Box sx={{ backgroundColor: '#e3eafc', padding: 3, borderRadius: 2, marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>오늘의 일정</Typography>
        <Typography>A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.</Typography>
        {[...Array(4)].map((_, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 1, borderBottom: '1px solid #ccc' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ width: 24, height: 24, backgroundColor: '#3f51b5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', marginRight: 2 }}>
                A
              </Box>
              <Typography>List item</Typography>
            </Box>
            <Typography>100+</Typography>
          </Box>
        ))}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
          <Typography sx={{ marginRight: 2 }}>Action 2</Typography>
          <Typography>Action 1</Typography>
        </Box>
      </Box>

      {/* Footer */}
      <Box sx={{ marginTop: 4, textAlign: 'center', fontSize: '0.8rem', color: '#666' }}>
        Logged-in Healthcare Provider: Dr. Smith Last Update: 10:30 AM
      </Box>
    </Box>
  );
}

export default App;
