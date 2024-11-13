// src/components/PatientSearch.js

import React, { useState } from 'react';
import { Box, Typography, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { mockPatientData } from '../api/mockData';

const PatientSearch = () => {
  const [searchCode, setSearchCode] = useState('');
  const [patientInfo, setPatientInfo] = useState(null);

  const handleSearch = () => {
    const patient = mockPatientData.find((p) => p.code === searchCode);
    setPatientInfo(patient);
  };

  return (
    <Box sx={{ backgroundColor: '#e3eafc', padding: 3, borderRadius: 2, marginBottom: 4 }}>
      <Typography variant="h5" gutterBottom>환자 검색</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          fullWidth
          placeholder="환자의 코드를 입력하세요"
          value={searchCode}
          onChange={(e) => setSearchCode(e.target.value)}
        />
        <IconButton onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </Box>
      {patientInfo && (
        <Box sx={{ marginTop: 2, padding: 2, backgroundColor: '#fff', borderRadius: 1 }}>
          <Typography>이름: {patientInfo.name}</Typography>
          <Typography>나이: {patientInfo.age}</Typography>
          <Typography>진단명: {patientInfo.diagnosis}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default PatientSearch;
