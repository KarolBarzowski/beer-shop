import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'theme/theme';
import Home from 'views/Home';
import { Container } from '@mui/material';

const Root = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container>
      <Home />
    </Container>
  </ThemeProvider>
);

export default Root;
