import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import * as S from './index.styles';
import Inputs from './Inputs';
import { validateUserData } from './validate';

import { requestSignup } from '@/apis/request/auth';
import Button from '@/components/Button';
import FieldModal from '@/components/FieldModal';
import { CLIENT_MESSAGE } from '@/constants/message';
import { BROWSER_PATH } from '@/constants/path';
import useError from '@/hooks/useError';
import useInput from '@/hooks/useInput';
import useSnackbar from '@/hooks/useSnackbar';
import { accessTokenProvider } from '@/utils/token';

const Signup = () => {
  const [nickname, changeNickname] = useInput('');
  const [work, setWork] = useState(false);
  const [field, setField] = useState('');
  const [income, changeIncome] = useInput(0);

  const handleError = useError();
  const { showSnackbar } = useSnackbar();

  const navigate = useNavigate();

  const signup = e => {
    e.preventDefault();

    const { valid, message } = validateUserData({ nickname, field, income });

    if (!valid) {
      alert(message);

      return;
    }

    requestSignup({ nickname, work, field, income })
      .then(accessToken => {
        showSnackbar(CLIENT_MESSAGE.GUIDE.SUCCESS_SIGNUP);
        accessTokenProvider.set(accessToken);

        navigate(BROWSER_PATH.BASE);
      })
      .catch(error => {
        alert(handleError(error.code));
      });
  };

  const toggleWork = () => {
    setWork(prev => !prev);
  };

  useEffect(() => {
    if (!accessTokenProvider.get()) {
      showSnackbar(CLIENT_MESSAGE.ERROR.EMPTY_ACCESS_TOKEN);
    }
  }, [showSnackbar]);

  return (
    <S.Container>
      <S.Form onSubmit={signup}>
        <div>다음의 정보를 입력하시면 이제의 완벽한 회원이 되실 수 있어요!</div>
        <Inputs
          nickname={nickname}
          changeNickname={changeNickname}
          work={work}
          toggleWork={toggleWork}
          field={field}
          income={income}
          changeIncome={changeIncome}
        />
        <Button size="wide">회원가입</Button>
      </S.Form>
      <FieldModal setField={setField} />
    </S.Container>
  );
};

export default Signup;
