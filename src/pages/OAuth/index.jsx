import { useSearchParams, useNavigate } from 'react-router-dom';

import { requestLogin } from '@/apis/request/auth';
import { ERROR_MESSAGE } from '@/constants/message';
import { BROWSER_PATH } from '@/constants/path';

const OAuth = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  const navigate = useNavigate();

  if (code) {
    requestLogin(code)
      .then(response => {
        if (response.new) {
          navigate(BROWSER_PATH.SIGNUP);

          return;
        }

        navigate(BROWSER_PATH.BASE);
      })
      .catch(() => {
        alert(ERROR_MESSAGE.AUTH_001);

        navigate(BROWSER_PATH.BASE);
      });
  }

  return <>카카오 로그인 중...</>;
};

export default OAuth;
