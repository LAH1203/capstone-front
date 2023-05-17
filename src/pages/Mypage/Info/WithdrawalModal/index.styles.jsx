import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: end;
  margin-top: 10rem;
`;

const MainButton = styled.button`
  width: 6rem;
  padding: 0.7rem 1rem;
  border-radius: 5px;
  background-color: ${({ theme: { colors } }) => colors.GREEN_50};
  color: ${({ theme: { colors } }) => colors.RED_200};

  transition: background-color, color 0.4s ease-in-out;
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.RED_200};
    color: ${({ theme: { colors } }) => colors.GREEN_50};
  }
`;

const Dimmer = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: ${({ theme: { colors } }) => colors.GREEN_900_OP_40};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const blowUp = keyframes`
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
`;

const ModalWrapper = styled.div`
  width: 30rem;
  height: 20rem;
  background-color: ${({ theme: { colors } }) => colors.GREEN_700};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${blowUp} 0.1s;

  & > p:nth-of-type(1) {
    color: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};
    font-weight: 800;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  & > p:nth-of-type(2) {
    color: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};
    font-size: 1.1rem;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;

  & button {
    padding: 0.8rem 2rem;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    transition: all 0.5s ease-out;
  }
`;

const CancelButton = styled.button`
  background-color: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};
  color: ${({ theme: { colors } }) => colors.GREEN_900};

  &:hover {
    filter: brightness(0.8);
  }
`;
const WithdrawButton = styled.button`
  background-color: ${({ theme: { colors } }) => colors.GREEN_800};
  color: ${({ theme: { colors } }) => colors.GREEN_600};
  margin-right: 4rem;

  &:hover {
    filter: brightness(1.2);
  }
`;
export {
  Container,
  MainButton,
  Dimmer,
  ModalWrapper,
  ButtonWrapper,
  CancelButton,
  WithdrawButton,
};
