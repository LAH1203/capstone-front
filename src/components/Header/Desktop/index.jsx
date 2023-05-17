import { Link } from 'react-router-dom';

import * as S from './index.styles';

import { requestLogout } from '@/apis/request/auth';
import homeSVG from '@/assets/home.svg';
import loginSVG from '@/assets/login.svg';
import logoutSVG from '@/assets/logout.svg';
import userSVG from '@/assets/user.svg';
import writeSVG from '@/assets/write.svg';
import { CLIENT_MESSAGE } from '@/constants/message';
import { BROWSER_PATH, KAKAO_REDIRECT_URI } from '@/constants/path';
import useError from '@/hooks/useError';
import useSnackbar from '@/hooks/useSnackbar';
import useUser from '@/hooks/useUser';
import { getKakaoAuthUri } from '@/utils/kakao';

const Desktop = () => {
  const { isLogin, logout } = useUser();
  const { showSnackbar } = useSnackbar();
  const handleError = useError();

  const confirmLogout = () => {
    if (!window.confirm(CLIENT_MESSAGE.GUIDE.CONFIRM_LOGOUT)) return;

    requestLogout()
      .then(() => {
        logout();
        showSnackbar(CLIENT_MESSAGE.GUIDE.SUCCESS_LOGOUT);
      })
      .catch(error => {
        alert(handleError(error.code));
      });
  };

  return (
    <S.Container>
      <a href={BROWSER_PATH.BASE}>
        <S.Button type="button">
          <img src={homeSVG} alt="홈 버튼" />
        </S.Button>
      </a>
      {isLogin ? (
        <S.Wrapper>
          <Link to={BROWSER_PATH.EDIT}>
            <S.Button type="button">
              <img src={writeSVG} alt="일기 작성 버튼" />
            </S.Button>
          </Link>
          <Link to={BROWSER_PATH.MYPAGE.BASE}>
            <S.Button type="button">
              <img src={userSVG} alt="사용자 버튼" />
            </S.Button>
          </Link>
          <S.Button type="button" onClick={confirmLogout}>
            <img src={logoutSVG} alt="로그아웃 버튼" />
          </S.Button>
        </S.Wrapper>
      ) : (
        <a href={getKakaoAuthUri(KAKAO_REDIRECT_URI)}>
          <S.Button type="button">
            <img src={loginSVG} alt="로그인 버튼" />
          </S.Button>
        </a>
      )}
    </S.Container>
  );
};

export default Desktop;
