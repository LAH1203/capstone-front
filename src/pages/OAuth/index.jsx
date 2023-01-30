import { useEffect } from 'react';

import { useSearchParams, useNavigate } from 'react-router-dom';

import { requestLogin } from '@/apis/request/auth';
import { GUIDE_MESSAGE } from '@/constants/message';
import { BROWSER_PATH } from '@/constants/path';
import useError from '@/hooks/useError';
import useSnackbar from '@/hooks/useSnackbar';
import { accessTokenProvider } from '@/utils/token';

const OAuth = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  const handleError = useError();
  const { showSnackbar } = useSnackbar();

  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      requestLogin(code)
        .then(({ new: newUser, accessToken }) => {
          accessTokenProvider.set(accessToken);

          if (newUser) {
            showSnackbar(GUIDE_MESSAGE.NEW_USER);
            navigate(BROWSER_PATH.SIGNUP);

            return;
          }

          showSnackbar(GUIDE_MESSAGE.SUCCESS_LOGIN);
          navigate(BROWSER_PATH.BASE);
        })
        .catch(error => {
          alert(handleError(error.code));

          navigate(BROWSER_PATH.BASE);
        });
    }
  }, [code, handleError, navigate, showSnackbar]);

  return <>카카오 로그인 중...</>;
};

export default OAuth;
