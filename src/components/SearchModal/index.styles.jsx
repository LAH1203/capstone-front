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

const List = styled.ul`
  display: flex;
  flex-direction: column;

  width: 90%;

  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme: { colors } }) => colors.GREEN_200};
    border-radius: 4px;
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  box-sizing: border-box;

  width: 100%;
  padding: 2rem 1rem;

  cursor: pointer;

  transition: transform 0.5s;

  &:not(:last-child) {
    border-bottom: 0.5px solid ${({ theme: { colors } }) => colors.GREEN_400};
  }
  &:hover {
    transform: scale3d(1.01, 1.01, 1.01);
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p:first-of-type {
    font-size: 1.2rem;
  }
  p:last-of-type {
    color: ${({ theme: { colors } }) => colors.GREEN_500};
    font-weight: 600;
  }
`;

const Content = styled.p`
  width: 100%;
  line-height: 1.1rem;

  display: -webkit-box;

  overflow: hidden;
  text-overflow: ellipsis;

  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const HashtagWrapper = styled.div`
  display: flex;
  gap: 1rem;

  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Hashtag = styled.span`
  background: ${({ theme: { colors } }) => colors.GREEN_200};
  color: white;

  border-radius: 1rem;
  padding: 0.3rem 0.5rem;

  font-size: 0.9rem;
  white-space: nowrap;
`;

export {
  Dimmer,
  Container,
  InputContainer,
  List,
  Item,
  Title,
  Content,
  HashtagWrapper,
  Hashtag,
};
