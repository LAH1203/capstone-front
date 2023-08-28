import styled from '@emotion/styled';

const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};
  border-radius: 5px;
  padding: 1rem;
`;

export { Container };
