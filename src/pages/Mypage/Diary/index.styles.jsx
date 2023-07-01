import styled from '@emotion/styled';

const Container = styled.div`
  width: 80vw;
  height: 100%;
  margin: auto;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
    width: 90vw;
  }
`;

const Wrapper = styled.div`
  flex: 1 1 auto;
`;

export { Container, Wrapper };
