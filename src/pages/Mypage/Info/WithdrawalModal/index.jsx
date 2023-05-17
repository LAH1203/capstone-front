import { useState } from 'react';
import * as S from './index.styles';
import Portal from '@/components/Portal';

const WithdrawalModal = ({ withdraw }) => {
  const [isModal, setIsModal] = useState(false);

  const handleModal = isModal => () => {
    setIsModal(isModal);
  };

  return (
    <S.Container>
      <S.MainButton onClick={handleModal(true)}>회원 탈퇴</S.MainButton>
      <Portal to="modal">
        {isModal && (
          <S.Dimmer>
            <S.ModalWrapper>
              <p>정말로 회원 탈퇴 하시겠어요?</p>
              <p>탈퇴하시면, 다시 복구하실 수가 없어요!</p>
              <S.ButtonWrapper>
                <S.WithdrawButton type="button" onClick={withdraw}>탈퇴하기</S.WithdrawButton>
                <S.CancelButton type="button" onClick={handleModal(false)}>
                  취소하기
                </S.CancelButton>
              </S.ButtonWrapper>
            </S.ModalWrapper>
          </S.Dimmer>
        )}
      </Portal>
    </S.Container>
  );
};

export default WithdrawalModal;
