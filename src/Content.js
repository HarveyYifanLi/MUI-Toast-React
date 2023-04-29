import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ToastSnackBar from './components/ToastSnackBar';
import ToastDisplayArea from './components/ToastDisplayArea';
import { useStore } from 'react-redux'

export default function Content() {
  const store = useStore();

  return (
    <Box sx={{marginTop: 3}}>
      <Typography variant="h4">Liked Form Submissions</Typography>

      <Typography variant="body1" sx={{fontStyle: 'italic', marginTop: 1}} component={'span'}>
        <ToastDisplayArea />
      </Typography>

      <ToastSnackBar />
    </Box>
  );
}
