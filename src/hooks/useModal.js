import { useSetAtom } from 'jotai';

import { ANIMATION_TIME } from '@/constants/time';
import useClosing from '@/hooks/useClosing';
import { modalAtom } from '@/store';

const useModal = () => {
  const setModal = useSetAtom(modalAtom);

  const setOffModal = () => {
    setModal('off');
  };

  const { isClosing, close } = useClosing(ANIMATION_TIME.MODAL, setOffModal);

  const showFieldModal = () => {
    setModal('field');
  };

  return {
    isClosing,
    close,
    showFieldModal,
  };
};

export default useModal;
