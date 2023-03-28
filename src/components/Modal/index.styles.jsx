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

const closeDimmer = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const openModal = keyframes`
  0% {
    transform: translate3d(0, -10%, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const closeModal = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, -10%, 0);
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

  backdrop-filter: saturate(100%) blur(5px);

  ${({ theme: { colors }, animationTime }) => css`
    background: ${colors.BLACK_300};

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
  padding: 5%;

  ${({ theme: { colors, breakpoints }, animationTime }) => css`
    background: ${colors.WHITE_100};
    filter: drop-shadow(0 0 4px ${colors.GRAY_800});

    animation: ${openModal} ${animationTime}ms;

    &.close {
      animation: ${closeModal} ${animationTime}ms;
    }

    @media only screen and (max-width: ${breakpoints.md}px) {
      padding: 8%;
    }
  `}
`;

export { Dimmer, Content };
