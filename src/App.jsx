import { ThemeProvider } from '@emotion/react';
import { Provider } from 'jotai';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from '@/components/Layout';
import Snackbar from '@/components/Snackbar';
import { BROWSER_PATH } from '@/constants/path';
import Edit from '@/pages/Edit';
import Landing from '@/pages/Landing';
import Main from '@/pages/Main';
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
          <Layout>
            <Routes>
              <Route path={BROWSER_PATH.BASE} element={<Main />} />
              <Route path={BROWSER_PATH.LANDING} element={<Landing />} />
              <Route path={BROWSER_PATH.SIGNUP} element={<Signup />} />
              <Route path={BROWSER_PATH.OAUTH} element={<OAuth />} />
              <Route path={BROWSER_PATH.EDIT} element={<Edit />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
        <Snackbar />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
