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

  padding: 0 5%;
  box-sizing: border-box;

  background: ${({ theme: { colors } }) => colors.BLACK_300};
  backdrop-filter: saturate(100%) blur(5px);

  ${({ animationTime }) => css`
    animation: ${openDimmer} ${animationTime}ms;

    &.close {
      animation: ${closeDimmer} ${animationTime}ms;
    }
  `}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 95%;
  max-width: 21rem;

  border-radius: 16px;
  padding: 10%;

  ${({ theme: { colors } }) => `
    background: ${colors.WHITE_100};
    filter: drop-shadow(0 0 4px ${colors.GRAY_800});
  `}

  ${({ animationTime }) => css`
    animation: ${openModal} ${animationTime}ms;

    &.close {
      animation: ${closeModal} ${animationTime}ms;
    }
  `}
`;

export { Dimmer, Content };
