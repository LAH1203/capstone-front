import { ThemeProvider } from '@emotion/react';
import { Provider } from 'jotai';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from '@/components/Layout';
import Snackbar from '@/components/Snackbar';
import { BROWSER_PATH } from '@/constants/path';
import Edit from '@/pages/Edit';
import Landing from '@/pages/Landing';
import Main from '@/pages/Main';
import Mypage from '@/pages/Mypage';
import NotFound from '@/pages/NotFound';
import OAuth from '@/pages/OAuth';
import Signup from '@/pages/Signup';
import GlobalStyle from '@/styles/global';
import theme from '@/styles/theme';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('@/mocks/browser');

  worker.start({ onUnhandledRequest: 'bypass' });
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
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
                <Route path={BROWSER_PATH.MYPAGE.BASE} element={<Mypage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </Router>
          <Snackbar />
        </Provider>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
