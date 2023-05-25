import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { RxPerson, RxPencil1 } from 'react-icons/rx';
import { SlHome } from 'react-icons/sl';
import { Link } from 'react-router-dom';

import * as S from './index.styles';

import { requestLogout } from '@/apis/request/auth';
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
          <SlHome />
        </S.Button>
      </a>
      {isLogin ? (
        <S.Wrapper>
          <Link to={BROWSER_PATH.EDIT}>
            <S.Button type="button">
              <RxPencil1 />
            </S.Button>
          </Link>
          <Link to={BROWSER_PATH.MYPAGE.BASE}>
            <S.Button type="button">
              <RxPerson />
            </S.Button>
          </Link>
          <S.Button type="button" onClick={confirmLogout}>
            <AiOutlineLogout />
          </S.Button>
        </S.Wrapper>
      ) : (
        <a href={getKakaoAuthUri(KAKAO_REDIRECT_URI)}>
          <S.Button type="button">
            <AiOutlineLogin />
          </S.Button>
        </a>
      )}
    </S.Container>
  );
};

export default Desktop;
