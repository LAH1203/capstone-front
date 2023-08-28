import styled from '@emotion/styled';

const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;

  position: relative;
`;

const WrapperTitle = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    &::after {
      content: '';
      display: block;
      width: 90vw;
      margin: auto;
      margin-top: 3.5rem;
      border-bottom: 2px solid ${({ theme: { colors } }) => colors.GREEN_100};
    }
  }
`;

const Nickname = styled.p`
  color: ${({ theme: { colors } }) => colors.GREEN_500};

  position: absolute;
  top: 1.5rem;
  right: 2rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    top: 4.2rem;
    font-size: 0.9rem;
  }
`;

const WrapperContent = styled.div`
  flex: 1 1 auto;
  width: 90%;

  margin: auto;

  display: grid;
  grid-template-columns: 5fr 2fr;
  grid-gap: 4rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    grid-gap: 2rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: flex;
    flex-direction: column;
  }
`;

const WrapperSide = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;

  > * {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-top: 0rem;
  }
`;
export { Container, WrapperTitle, Nickname, WrapperContent, WrapperSide };
