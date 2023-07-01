import styled from '@emotion/styled';

const Container = styled.ul`
  &.grid {
    width: 100%;
    padding: 1rem 0;

    overflow-x: auto;

    display: grid;
    grid-template-columns: repeat(5, 12rem);
    justify-content: center;
    column-gap: 3rem;
    row-gap: 2rem;

    &::-webkit-scrollbar {
      background-color: ${({ theme: { colors } }) => colors.GREEN_50};
      height: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme: { colors } }) => colors.GREEN_300};
    }

    @media screen and (max-width: 1284px) {
      justify-content: start;
    }
    
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
      grid-template-columns: repeat(2, 9rem);
      justify-content: center;
      column-gap: 1rem;
      row-gap: 1rem;
    }
  }
`;

export { Container };
