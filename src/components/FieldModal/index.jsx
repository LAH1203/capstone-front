import { useAtomValue } from 'jotai';

import * as S from './index.styles';

import Modal from '@/components/Modal';
import { FIELDS } from '@/constants/field';
import useModal from '@/hooks/useModal';
import { modalAtom } from '@/store';

const FieldModal = ({ setField }) => {
  const modalFlag = useAtomValue(modalAtom);
  const { isClosing, close } = useModal();

  const changeField = fieldName => () => {
    setField(fieldName);
    close();
  };

  return (
    <Modal isClosing={isClosing} modalState={modalFlag === 'field'}>
      <S.Box>
        {FIELDS.map(field => (
          <S.Button type="button" onClick={changeField(field)} key={field}>
            {field}
          </S.Button>
        ))}
      </S.Box>
    </Modal>
  );
};

export default FieldModal;
