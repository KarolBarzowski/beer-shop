import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      default: '#f2f7fa'
    }
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: {
      fontSize: 34,
      fontWeight: 500
    }
  }
});