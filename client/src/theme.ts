// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2', // Adjust the color according to your design
      contrastText: '#fff',
    },
    secondary: {
      main: '#FF4081', // Adjust the color according to your design
      contrastText: '#fff',
    },
  },
  shape: {
    borderRadius: 8, // Adjust the border radius according to your design
  },
});

export default theme;
