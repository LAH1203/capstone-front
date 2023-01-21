import { ThemeProvider } from '@emotion/react';
import { Provider } from 'jotai';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { BROWSER_PATH } from '@/constants/path';
import Landing from '@/pages/Landing';
import NotFound from '@/pages/NotFound';
import OAuth from '@/pages/OAuth';
import Signup from '@/pages/Signup';
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
      <Provider>
        <Router>
          <Routes>
            <Route path={BROWSER_PATH.BASE} element={<Landing />} />
            <Route path={BROWSER_PATH.SIGNUP} element={<Signup />} />
            <Route path={BROWSER_PATH.OAUTH} element={<OAuth />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
