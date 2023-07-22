import { useAtom } from 'jotai';

import { modalAtom } from '@/store';

const useModal = () => {
  const [modalState, setModalState] = useAtom(modalAtom);

  const showModal = type => () => {
    setModalState(type);
  };

  const setOffModal = () => {
    setModalState('off');
  };

  return { modalState, showModal, setOffModal };
};

export default useModal;
