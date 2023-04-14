import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;

  height: 100vh;

  main {
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    width: 100%;
    height: 100%;

    background: ${({ theme: { colors } }) => colors.BACKGROUND};
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: column;
  }
`;

export { Container };
