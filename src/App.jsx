import { ThemeProvider } from '@emotion/react';
import { Provider } from 'jotai';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from '@/components/Layout';
import Snackbar from '@/components/Snackbar';
import { BROWSER_PATH } from '@/constants/path';
import useError from '@/hooks/useError';
import Calendar from '@/pages/Calendar';
import Detail from '@/pages/Detail';
import Edit from '@/pages/Edit';
import Landing from '@/pages/Landing';
import Main from '@/pages/Main';
import Mypage from '@/pages/Mypage';
import New from '@/pages/New';
import NotFound from '@/pages/NotFound';
import OAuth from '@/pages/OAuth';
import Signup from '@/pages/Signup';
import GlobalStyle from '@/styles/global';
import theme from '@/styles/theme';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('@/mocks/browser');

  worker.start({ onUnhandledRequest: 'bypass' });
}

const App = () => {
  const handleError = useError();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
    queryCache: new QueryCache({
      onError: error => {
        alert(handleError(error.response.data.code));
      },
    }),
  });

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
                <Route path={BROWSER_PATH.NEW} element={<New />} />
                <Route path={`${BROWSER_PATH.EDIT}/:id`} element={<Edit />} />
                <Route path={BROWSER_PATH.MYPAGE.BASE} element={<Mypage />} />
                <Route path={BROWSER_PATH.CALENDAR} element={<Calendar />} />
                <Route
                  path={`${BROWSER_PATH.DETAIL}/:id`}
                  element={<Detail />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </Router>
          <Snackbar />
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
