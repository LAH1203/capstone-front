import * as S from './index.styles';

import homeSVG from '@/assets/home.svg';
import loginSVG from '@/assets/login.svg';
import logoutSVG from '@/assets/logout.svg';
import userSVG from '@/assets/user.svg';
import writeSVG from '@/assets/write.svg';
import { CLIENT_MESSAGE } from '@/constants/message';
import { BROWSER_PATH, KAKAO_REDIRECT_URI } from '@/constants/path';
import useSnackbar from '@/hooks/useSnackbar';
import useUser from '@/hooks/useUser';
import { getKakaoAuthUri } from '@/utils/kakao';

const Desktop = () => {
  const { isLogin, logout } = useUser();
  const { showSnackbar } = useSnackbar();

  const confirmLogout = () => {
    if (!window.confirm(CLIENT_MESSAGE.GUIDE.CONFIRM_LOGOUT)) return;

    logout();
    showSnackbar(CLIENT_MESSAGE.GUIDE.SUCCESS_LOGOUT);
  };

  return (
    <S.Container>
      <S.Button type="button">
        <a href={BROWSER_PATH.BASE}>
          <img src={homeSVG} alt="홈 버튼" />
        </a>
      </S.Button>
      {isLogin ? (
        <S.Wrapper>
          <S.Button type="button">
            <img src={writeSVG} alt="일기 작성 버튼" />
          </S.Button>
          <S.Button type="button">
            <img src={userSVG} alt="사용자 버튼" />
          </S.Button>
          <S.Button type="button" onClick={confirmLogout}>
            <img src={logoutSVG} alt="로그아웃 버튼" />
          </S.Button>
        </S.Wrapper>
      ) : (
        <S.Button type="button">
          <a href={getKakaoAuthUri(KAKAO_REDIRECT_URI)}>
            <img src={loginSVG} alt="로그인 버튼" />
          </a>
        </S.Button>
      )}
    </S.Container>
  );
};

export default Desktop;
