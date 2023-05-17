import styled from '@emotion/styled';

const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.GREEN_200};
  height: 3.7rem;
  display: flex;
  align-items: center;
`;

const Name = styled.h1`
  color: ${({ theme: { colors } }) => colors.GREEN_900};
  font-size: 1.3rem;
  font-weight: bold;
  margin-left: 1.5rem;
`;

export { Container, Name };
