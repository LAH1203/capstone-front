import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

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

  return <div>Main</div>;
};

export default Main;
