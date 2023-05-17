import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  gap: 0.7rem;

  label {
    color: ${({ theme: { colors } }) => colors.GRAY_600};
  }
`;

const Input = styled.input`
  grid-column: 2 / span 2;

  width: 90%;
  max-width: 16.5rem;
  transition: border 0.5s;

  &.invalid {
    border: 1px solid ${({ theme: { colors } }) => colors.RED_500};
  }
`;

const ButtonWrapper = styled.div`
  grid-column: 4 / span 2;
  display: flex;
  justify-content: end;
`;

const Description = styled.div`
  display: block;
  grid-column: 2 / span 2;
  color: ${({ theme: { colors } }) => colors.GREEN_100};

  font-size: 0.9rem;

  transition: color 0.5s;

  &.invalid {
    color: ${({ theme: { colors } }) => colors.RED_500};
  }
`;

export { Container, Form, Input, Description, ButtonWrapper };
