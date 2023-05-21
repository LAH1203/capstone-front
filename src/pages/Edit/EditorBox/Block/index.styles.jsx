import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const showBtn = keyframes`
  0%, 100%{
    opacity: 0;
  }
  30%, 60%{
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
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
  @media screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.sm}px) {
    font-size: 0.725rem;
    .content-editable {
      width: 85%;
    }
    .block-button {
      font-size: 0.625rem;
    }
  }
`;

const BlockButtonWrap = styled.div`
  animation: ${showBtn} 2s;
  opacity: 0;
  transition: all 0.2s ease-in;

  .add {
    cursor: pointer;
  }

  .drag {
    cursor: grab;
  }
`;
export { Container, BlockButtonWrap };
