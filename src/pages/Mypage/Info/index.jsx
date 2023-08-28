import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import * as S from './index.styles';
import Inputs from './Inputs';
import WithdrawalModal from './WithdrawalModal';

import {
  requestUpdateEmail,
  requestUpdateNickname,
  requestWithdrawal,
} from '@/apis/request/auth';
import { CLIENT_MESSAGE } from '@/constants/message';
import { BROWSER_PATH } from '@/constants/path';
import { RULE } from '@/constants/rule';
import useError from '@/hooks/useError';
import useInput from '@/hooks/useInput';
import useSnackbar from '@/hooks/useSnackbar';
import useUser from '@/hooks/useUser';

const Info = () => {
  const { info, requestAndSetUserInfo } = useUser();
  const {
    value: email,
    onChangeValue: changeEmail,
    dangerouslySetValue: dangerouslySetEmail,
  } = useInput(info.email);
  const {
    value: nickname,
    onChangeValue: changeNickname,
    dangerouslySetValue: dangerouslySetNickname,
  } = useInput(info.nickname);

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidNickname, setIsValidNickname] = useState(false);
  const handleError = useError();
  const { logout } = useUser();
  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();

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

  const handleSubmitEmail = e => {
    e.preventDefault();

    if (!isValidEmail) {
      alert(CLIENT_MESSAGE.ERROR.INVALID_INPUT);
      return;
    }

    requestUpdateEmail({ email })
      .then(({ email }) => {
        requestAndSetUserInfo().catch(error =>
          alert(handleError(error.response.data.code)),
        );
        showSnackbar(CLIENT_MESSAGE.GUIDE.SUCCESS_UPDATE_EMAIL);
        dangerouslySetEmail(email);
      })
      .catch(error => {
        alert(handleError(error.response.data.code));
      });
  };

  const handleSubmitNickname = e => {
    e.preventDefault();

    if (!isValidNickname) {
      alert(CLIENT_MESSAGE.ERROR.INVALID_INPUT);
      return;
    }

    requestUpdateNickname({ nickname })
      .then(({ nickname }) => {
        requestAndSetUserInfo().catch(error =>
          alert(handleError(error.response.data.code)),
        );
        showSnackbar(CLIENT_MESSAGE.GUIDE.SUCCESS_UPDATE_NICKNAME);
        dangerouslySetNickname(nickname);
      })
      .catch(error => {
        alert(handleError(error.response.data.code));
      });
  };

  const handleWithdraw = e => {
    e.preventDefault();

    requestWithdrawal()
      .then(() => {
        logout();
        showSnackbar(CLIENT_MESSAGE.GUIDE.SUCCESS_WITHDRAWAL);

        navigate(BROWSER_PATH.BASE);
      })
      .catch(error => {
        alert(handleError(error.response.data.code));
      });
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>프로필 수정</S.Title>
        <Inputs
          email={email}
          changeEmail={changeEmail}
          isValidEmail={isValidEmail}
          nickname={nickname}
          changeNickname={changeNickname}
          isValidNickname={isValidNickname}
          submitEmail={handleSubmitEmail}
          submitNickname={handleSubmitNickname}
        />
      </S.Wrapper>
      <WithdrawalModal withdraw={handleWithdraw} />
    </S.Container>
  );
};

export default Info;
