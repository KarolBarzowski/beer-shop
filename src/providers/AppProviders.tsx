import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'theme/GlobalStyle';
import { theme } from 'theme/theme';
import { Provider } from 'react-redux';
import { store } from 'store';
import BeersProvider from './BeersProvider';

const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>
    <BrowserRouter>
      <BeersProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </BeersProvider>
    </BrowserRouter>
  </Provider>
);

export default AppProviders;
