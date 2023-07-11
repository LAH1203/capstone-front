import { Suspense } from 'react';

import Error from './Error';
import * as S from './index.styles';
import Loading from './Loading';

import ErrorBoundary from '@/components/ErrorBoundary';
import Header from '@/components/Header';

const Layout = ({ children }) => {
  return (
    <S.Container>
      <Header />
      <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading />}>
          <main>{children}</main>
        </Suspense>
      </ErrorBoundary>
    </S.Container>
  );
};

export default Layout;
