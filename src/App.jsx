import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { BROWSER_PATH } from '@/constants/path';
import Main from '@/pages/Main';
import OAuth from '@/pages/OAuth';
import GlobalStyle from '@/styles/global';
import theme from '@/styles/theme';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('@/mocks/browser');

  worker.start();
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path={BROWSER_PATH.BASE} element={<Main />} />
          <Route path={BROWSER_PATH.OAUTH} element={<OAuth />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
