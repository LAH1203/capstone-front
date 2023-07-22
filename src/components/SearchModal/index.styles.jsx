import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const openDimmer = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const openModal = keyframes`
  0% {
    transform: scale3d(0.5, 0.5, 0.5);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
`;

const closeDimmer = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const closeModal = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  to {
    transform: scale3d(0.5, 0.5, 0.5);
  }
`;

const Dimmer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;

  z-index: 2147483646;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: saturate(100%) blur(5px);

  ${({ animationTime }) => css`
    animation: ${openDimmer} ${animationTime}ms;

    &.close {
      animation: ${closeDimmer} ${animationTime}ms;
    }
  `}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  width: 95%;
  max-width: 50rem;
  height: 70vh;

  border-radius: 12px;
  padding: 5%;

  background: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};

  ${({ animationTime }) => css`
    animation: ${openModal} ${animationTime}ms;

    &.close {
      animation: ${closeModal} ${animationTime}ms;
    }
  `}
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 100%;

  input {
    width: 80%;

    font-size: 1rem;
  }
`;

export { Dimmer, Container, InputContainer };
