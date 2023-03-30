import { useAtom } from 'jotai';

import { userAtom } from '@/store';
import { accessTokenProvider, kakaoAccessTokenProvider } from '@/utils/token';

const useUser = () => {
  const [{ isLogin }, setUser] = useAtom(userAtom);

  const login = accessToken => {
    accessTokenProvider.set(accessToken);
    kakaoAccessTokenProvider.remove();
    setUser({ isLogin: true });
  };

  const logout = () => {
    accessTokenProvider.remove();
    kakaoAccessTokenProvider.remove();
    setUser({ isLogin: false });
  };

  return { isLogin, login, logout };
};

export default useUser;
