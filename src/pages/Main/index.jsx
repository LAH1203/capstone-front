import { Suspense, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import Content from './Content';
import Skeleton from './Skeleton';

import { BROWSER_PATH } from '@/constants/path';
import useUser from '@/hooks/useUser';

const Main = () => {
  const { isLogin } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate(BROWSER_PATH.LANDING);
    }
  }, [isLogin, navigate]);

  return (
    <Suspense fallback={<Skeleton />}>
      <Content />
    </Suspense>
  );
};

export default Main;
