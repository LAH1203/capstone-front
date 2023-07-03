import { useEffect } from 'react';

import * as S from './index.styles';

import Portal from '@/components/Portal';
import { ANIMATION_TIME } from '@/constants/time';
import useClosing from '@/hooks/useClosing';
import useSnackbar from '@/hooks/useSnackbar';

const Snackbar = () => {
  const { isShowing, message, resetSnackbar } = useSnackbar();
  const { isClosing, close } = useClosing(
    ANIMATION_TIME.SNACKBAR,
    resetSnackbar,
  );

  useEffect(() => {
    if (!isShowing) return;

    const timeout = setTimeout(() => {
      close();
    }, ANIMATION_TIME.SNACKBAR * 6);

    return () => clearTimeout(timeout);
  }, [close, isShowing]);

  return (
    <Portal to="snackbar">
      {isShowing && (
        <S.Container>
          <S.Wrapper className={isClosing ? 'close' : ''}>{message}</S.Wrapper>
        </S.Container>
      )}
    </Portal>
  );
};

export default Snackbar;
