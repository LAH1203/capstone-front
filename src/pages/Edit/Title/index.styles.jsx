import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1.5rem;
  width: 100%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Input = styled.input`
  width: 80%;
  font-size: 1.15rem;
  padding: 0.5rem;
  box-sizing: border-box;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 100%;
    font-size: 1rem;
  }
`;

const Description = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  place-items: center;
  row-gap: 1rem;

  select {
    outline: none;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 0.9rem;
  }
`;

export { Container, Input, Description };
