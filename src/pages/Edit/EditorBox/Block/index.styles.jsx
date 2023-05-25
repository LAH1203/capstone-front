import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  gap: 0.25rem;

  width: 100%;

  border-top: 1px dashed
    ${({ theme: { colors }, isDragOver }) =>
      isDragOver ? colors.GREEN_900_OP_40 : colors.INPUT_BACKGROUND};

  transition: all 0.3s ease-in-out;

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

export { Container, ButtonWrapper };
