import { useEffect } from 'react';

import { useSearchParams, useNavigate } from 'react-router-dom';

import { requestLogin } from '@/apis/request/auth';
import { CLIENT_MESSAGE } from '@/constants/message';
import { BROWSER_PATH } from '@/constants/path';
import useError from '@/hooks/useError';
import useSnackbar from '@/hooks/useSnackbar';
import useUser from '@/hooks/useUser';
import { kakaoAccessTokenProvider } from '@/utils/token';

const OAuth = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  const handleError = useError();
  const { showSnackbar } = useSnackbar();
  const { login } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    console.log(code);
    if (code) {
      requestLogin(code)
        .then(({ new: newUser, accessToken, refreshToken }) => {
          kakaoAccessTokenProvider.set(accessToken);

          if (newUser) {
            showSnackbar(CLIENT_MESSAGE.GUIDE.NEW_USER);
            navigate(BROWSER_PATH.SIGNUP);

            return;
          }

          login(accessToken, refreshToken);
          showSnackbar(CLIENT_MESSAGE.GUIDE.SUCCESS_LOGIN);
          navigate(BROWSER_PATH.BASE);
        })
        .catch(error => {
          alert(handleError(error.code));

          navigate(BROWSER_PATH.BASE);
        });
    }
  }, [code, handleError, navigate, showSnackbar, login]);

  return <>카카오 로그인 중...</>;
};

export default OAuth;
