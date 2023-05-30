import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  overflow-x: scroll;

  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  border-bottom: 0.5px solid ${({ theme: { colors } }) => colors.GREEN_500};

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    gap: 1rem;
  }
`;

const Select = styled.select`
  text-align: center;

  width: 5rem;

  border: 0;
  outline: 0;

  white-space: nowrap;
  font-size: 1rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 0.8rem;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: none;
  padding: 0 1rem;

  font-size: 1.2rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 1rem;
  }
`;

const Image = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 1rem;

  font-size: 1.2rem;

  cursor: pointer;

  input {
    display: none;
  }
`;

export { Container, Select, Button, Image };
