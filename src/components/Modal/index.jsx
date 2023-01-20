import * as S from './index.styles';

import Portal from '@/components/Portal';
import { ANIMATION_TIME } from '@/constants/time';
import useModal from '@/hooks/useModal';

const Modal = ({ isClosing, modalState, children }) => {
  const { isClosing: isClosingState, close } = useModal();

  const preventBubbling = e => {
    e.stopPropagation();
  };

  return (
    <Portal to="modal">
      {modalState && (
        <S.Dimmer
          onClick={close}
          className={isClosing || isClosingState ? 'close' : ''}
          animationTime={ANIMATION_TIME.MODAL}
        >
          <S.Content
            onClick={preventBubbling}
            className={isClosing || isClosingState ? 'close' : ''}
            animationTime={ANIMATION_TIME.MODAL}
          >
            {children}
          </S.Content>
        </S.Dimmer>
      )}
    </Portal>
  );
};

export default Modal;
