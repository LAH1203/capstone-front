import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const showBtn = keyframes`
  0%, 100% {
    opacity: 0;
  }
  30%, 60% {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  line-height: 1.7rem;
  gap: 0.25rem;
  font-size: 1.125rem;
  border-top: 2px solid ${({ dragOver }) => (dragOver ? 'black' : 'white')};

  .content-editable {
    height: fit-content;
    width: 93%;
    cursor: text;
    word-break: break-all;
    outline: none;
  }

  .content-editable:empty:before {
    content: attr(placeholder);
    opacity: 0.3;
  }

  &:hover .block-button {
    opacity: 1;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    line-height: 1.1rem;
    font-size: 0.9rem;

    .content-editable {
      width: 85%;
    }
  }
`;

const BlockButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.7rem;
  animation: ${showBtn} 2s;
  opacity: 0;
  transition: all 0.2s ease-in;

  .add {
    cursor: pointer;
  }

  .drag {
    cursor: grab;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    height: 1.1rem;
    font-size: 1rem;
  }
`;

const Image = styled.img`
  width: 40%;

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.md + 1}px) and (max-width: ${({ theme }) =>
      theme.breakpoints.lg}px) {
    width: 60%;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.sm + 1}px) and (max-width: ${({ theme }) =>
      theme.breakpoints.md}px) {
    width: 70%;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 90%;
  }
`;

export { Container, BlockButtonWrap, Image };
