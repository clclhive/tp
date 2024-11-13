// src/components/Category.js
// src/components/Category.js

import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

const Category = () => {
  return (
    <Box sx={{ backgroundColor: '#e3eafc', padding: 3, borderRadius: 2, marginBottom: 4 }}>
      <Typography variant="h5" gutterBottom>카테고리</Typography>
      <Grid container spacing={2}>
        {[...Array(4)].map((_, index) => (
          <Grid item xs={3} key={index}>
            <Card>
              <CardContent>
                <Typography align="center">테스트 결과</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Category;
