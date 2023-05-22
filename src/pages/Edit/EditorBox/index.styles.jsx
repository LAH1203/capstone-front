import styled from '@emotion/styled';

const Container = styled.div`
  background: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};

  border: 0.5px solid ${({ theme: { colors } }) => colors.GREEN_500};
  border-radius: 10px;

  width: 100%;
  min-height: 40rem;
`;

const Blocks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.725rem;

  margin-left: 0.725rem;
  margin-top: 0.75rem;
  margin-right: 1.25rem;
`;

export { Container, Blocks };
