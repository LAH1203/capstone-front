import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ReactContentEditable from 'react-contenteditable';

const Container = styled.div`
  display: flex;
  gap: 0.25rem;

  width: 100%;

  border-top: 2px solid ${({ dragOver }) => (dragOver ? 'black' : 'white')};

  &:hover .block-button {
    opacity: 1;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 1.7rem;

  opacity: 0;
  transition: all 0.2s ease-in;

  &.h1 {
    height: 2.3rem;
  }
  &.h2 {
    height: 2.15rem;
  }
  &.h3 {
    height: 2rem;
  }
  &.h4 {
    height: 1.85rem;
  }

  .add {
    cursor: pointer;
  }

  .drag {
    cursor: grab;
  }
`;

const Image = styled.img`
  width: 40%;

  ${({ theme: { breakpoints } }) => css`
    @media screen and (min-width: ${breakpoints.md +
      1}px) and (max-width: ${breakpoints.lg}px) {
      width: 60%;
    }

    @media screen and (min-width: ${breakpoints.sm +
      1}px) and (max-width: ${breakpoints.md}px) {
      width: 70%;
    }

    @media screen and (max-width: ${breakpoints.sm}px) {
      width: 80%;
    }
  `}
`;

const ContentEditable = styled(ReactContentEditable)`
  width: 93%;
  height: fit-content;

  word-break: break-all;
  outline: none;
  font-size: 1rem;
  line-height: 1.7rem;

  cursor: text;

  &:empty:before {
    content: attr(placeholder);
    opacity: 0.3;
  }

  &.h1 {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2.3rem;
  }
  &.h2 {
    font-size: 1.45rem;
    font-weight: 700;
    line-height: 2.15rem;
  }
  &.h3 {
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 2rem;
  }
  &.h4 {
    font-size: 1.15rem;
    font-weight: 700;
    line-height: 1.85rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 85%;
  }
`;

export { Container, ButtonWrapper, Image, ContentEditable };
