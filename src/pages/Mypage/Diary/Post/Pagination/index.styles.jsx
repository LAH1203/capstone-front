import styled from '@emotion/styled';

const Container = styled.div`
  li {
    list-style: none;
  }
  
  background-color: ${({ theme: { colors } }) => colors.GREEN_100};

  display: flex;
  justify-content: center;

  padding: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  background-color: transparent;
  font-size: 1rem;
  padding: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.GREEN_400};
    transition: background-color 0.5s ease;
  }

  &.selected {
    font-weight: bold;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 0.9rem;
    padding: 0.3rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 0.8rem;
    padding: 0.2rem;

    &:hover {
      background-color: transparent;
    }
  }
`;
export { Container, Button };
