import styled from '@emotion/styled';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 70%;
  margin-top: 5rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 90%;
    margin-top: 3rem;
  }
`;

const Title = styled.h1`
  color: ${({ theme: { colors } }) => colors.GREEN_900};
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 3rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 1.2rem;
  }
`;

export { Container, Wrapper, Title };
