import styled from '@emotion/styled';

const Container = styled.ul`
  &.grid {
    width: 100%;
    overflow-x: scroll;

    display: grid;
    justify-content: center;
    grid-template-columns: repeat(5, 12rem);
    column-gap: 3rem;
    row-gap: 2rem;
    margin: auto;
    margin-top: 1rem;

    @media screen and (max-width: 1284px) {
      justify-content: start;
    }
    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
      justify-content: center;
      grid-template-columns: repeat(2, 9rem);
      column-gap: 1rem;
      row-gap: 1rem;
    }
  }
`;

export { Container };
