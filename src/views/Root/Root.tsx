import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'theme/GlobalStyle';
import { theme } from 'theme/theme';
import Home from 'views/Home/Home';
import { Container } from './Root.styles';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Container>
      <Home />
    </Container>
  </ThemeProvider>
);

export default Root;
