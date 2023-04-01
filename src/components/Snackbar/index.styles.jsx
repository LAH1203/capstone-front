import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import { ANIMATION_TIME } from '@/constants/time';

const show = keyframes`
  from {
    transform: translate3d(0, 2rem, 0);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

const close = keyframes`
  from {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  to {
    transform: translate3d(0, 2rem, 0);
    opacity: 0;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 4rem;

  z-index: 2147483647;

  width: 100%;
  height: 2.7rem;

  font-size: 0.9rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80%;
  max-width: 30rem;
  height: 100%;
  line-height: 1.2rem;

  border-radius: 4px;
  padding: 0.3rem 1rem;

  animation: ${show} ${ANIMATION_TIME.SNACKBAR}ms forwards;

  &.close {
    animation: ${close} ${ANIMATION_TIME.SNACKBAR}ms;
  }

  ${({ theme: { colors } }) => `
    background: ${colors.GREEN_400};
    color: ${colors.INPUT_BACKGROUND};
  `}
`;

export { Container, Wrapper };
