import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const openAnimation = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
`;

const closeAnimation = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(100%, 0, 0);
  }
`;

const Dimmer = styled.div`
  display: flex;
  justify-content: flex-end;

  position: fixed;
  z-index: 999;
  top: 38px;
  right: 0;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.3);
`;

const Slider = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 50%;

  padding: 1rem 0.5rem;
  box-sizing: border-box;

  background: ${({ theme: { colors } }) => colors.GREEN_500};

  ${({ animationTime }) => css`
    animation: ${openAnimation} ${animationTime}ms;
    &.close {
      animation: ${closeAnimation} ${animationTime}ms;
    }
  `}
`;

const Button = styled.button`
  background: none;

  padding: 0;
`;

const ArrowButton = styled(Button)`
  width: 2.8rem;

  color: white;
  font-size: 2rem;

  svg {
    width: 60%;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  li {
    width: 100%;
  }
`;

const MenuButton = styled(Button)`
  width: 100%;

  color: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};

  font-size: 1.2rem;
`;

export { Dimmer, Slider, ArrowButton, List, MenuButton };
