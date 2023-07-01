import styled from '@emotion/styled';

const Container = styled.ul`
  display: flex;
  border-bottom: 2px solid ${({ theme: { colors } }) => colors.GREEN_200};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.GREEN_200};
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: ${({ theme: colors }) => colors.GREEN_900};
  padding: 0.5rem 1.5rem;
  font-size: 1.2rem;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.GREEN_50};
    transition: background-color 0.5s ease;
  }

  &.selected {
    border-bottom: 3px solid ${({ theme: { colors } }) => colors.GREEN_900};
    margin-bottom: -2px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 1rem;

    &.selected {
      border-bottom: 2px solid ${({ theme: { colors } }) => colors.GREEN_900};
      margin-bottom: -1px;
    }
  }
`;

export { Container, Button };
