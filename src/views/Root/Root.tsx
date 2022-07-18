import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'theme/GlobalStyle';
import { theme } from 'theme/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'views/Home/Home';
import Details from 'views/Details/Details';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <MainTemplate>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beer/:beerId" element={<Details />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  </ThemeProvider>
);

export default Root;
