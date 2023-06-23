import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.GREEN_200};
`;

const Button = styled.button`
  background-color: transparent;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 1rem 5vw;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};
    transition: background-color 0.5s ease;
  }

  &.selected {
    border-bottom: 3px solid ${({ theme: { colors } }) => colors.RED_500};
    margin-bottom: -1px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    font-size: 1rem;
    padding: 1rem 4vw;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 1rem 3vw;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 0.9rem;
    padding: 1rem 2vw;

    &.selected {
      border-bottom: 2px solid ${({ theme: { colors } }) => colors.RED_500};
      margin-bottom: -1px;
    }
  }
`;

const WrapperDisplay = styled.div`
  display: flex;

  button {
    border: 3px solid ${({ theme: { colors } }) => colors.GREEN_500};
    background-color: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};
    color: ${({ theme: { colors } }) => colors.GREEN_500};
    font-size: 1.1rem;
    padding: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button.selected {
    background-color: ${({ theme: { colors } }) => colors.GREEN_500};
    color: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};
  }

  button:first-of-type {
    border-right: none;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    button {
      font-size: 1rem;
      padding: 0.1rem;
    }
  }
`;
export { Container, WrapperDisplay, Button };
