import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import * as S from './index.styles';
import Inputs from './Inputs';

import { requestSignup } from '@/apis/request/auth';
import { CLIENT_MESSAGE } from '@/constants/message';
import { BROWSER_PATH } from '@/constants/path';
import { RULE } from '@/constants/rule';
import useError from '@/hooks/useError';
import useInput from '@/hooks/useInput';
import useSnackbar from '@/hooks/useSnackbar';
import useUser from '@/hooks/useUser';
import { kakaoAccessTokenProvider } from '@/utils/token';

const Signup = () => {
  const { value: email, onChangeValue: changeEmail } = useInput('');
  const { value: nickname, onChangeValue: changeNickname } = useInput('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidNickname, setIsValidNickname] = useState(false);

  const { login } = useUser();
  const handleError = useError();
  const { showSnackbar } = useSnackbar();

  const navigate = useNavigate();

  const signup = e => {
    e.preventDefault();

    if (!isValidEmail || !isValidNickname) {
      alert(CLIENT_MESSAGE.ERROR.INVALID_INPUT);

      return;
    }

    requestSignup({
      accessToken: kakaoAccessTokenProvider.get(),
      email,
      nickname,
    })
      .then(({ accessToken, refreshToken }) => {
        showSnackbar(CLIENT_MESSAGE.GUIDE.SUCCESS_SIGNUP);
        login(accessToken, refreshToken);

        navigate(BROWSER_PATH.BASE);
      })
      .catch(error => {
        alert(handleError(error.response.data.code));
      });
  };

  useEffect(() => {
    if (!kakaoAccessTokenProvider.get()) {
      showSnackbar(CLIENT_MESSAGE.ERROR.EMPTY_ACCESS_TOKEN);
    }
  }, [showSnackbar]);

  useEffect(() => {
    setIsValidEmail(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email),
    );
  }, [email]);

  useEffect(() => {
    setIsValidNickname(
      nickname.length >= RULE.NICKNAME.MIN &&
        nickname.length <= RULE.NICKNAME.MAX,
    );
  }, [nickname]);

  return (
    <S.Container>
      <S.Wrapper>
        <p>
          새로운 회원이시군요! <span>리마이어리</span>에 오신 걸 환영합니다 :)
        </p>
        <p>다음의 정보만 입력해주시면 가입이 완료돼요!</p>
      </S.Wrapper>
      <S.Form onSubmit={signup}>
        <Inputs
          email={email}
          changeEmail={changeEmail}
          isValidEmail={isValidEmail}
          nickname={nickname}
          changeNickname={changeNickname}
          isValidNickname={isValidNickname}
        />
        <S.Button disabled={!isValidEmail || !isValidNickname}>
          회원가입
        </S.Button>
      </S.Form>
    </S.Container>
  );
};

export default Signup;
