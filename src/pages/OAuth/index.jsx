import { useEffect } from 'react';

import { useSearchParams, useNavigate } from 'react-router-dom';

import { requestLogin } from '@/apis/request/auth';
import { BROWSER_PATH } from '@/constants/path';
import useError from '@/hooks/useError';
import { accessTokenProvider } from '@/utils/token';

const OAuth = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  const handleError = useError();

  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      requestLogin(code)
        .then(({ new: newUser, accessToken }) => {
          accessTokenProvider.set(accessToken);

          navigate(newUser ? BROWSER_PATH.SIGNUP : BROWSER_PATH.BASE);
        })
        .catch(error => {
          alert(handleError(error.code));

          navigate(BROWSER_PATH.BASE);
        });
    }
  }, [code, handleError, navigate]);

  return <>카카오 로그인 중...</>;
};

export default OAuth;
