import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  flex: 1 1 auto;
  width: 70%;
  margin-top: 5rem;
`;

const Title = styled.h1`
  color: ${({ theme: { colors } }) => colors.GREEN_900};
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 3rem;
`;

export { Container, Wrapper, Title };
