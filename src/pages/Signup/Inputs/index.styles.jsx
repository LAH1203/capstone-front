import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 1rem;

  label {
    text-align: center;

    color: ${({ theme: { colors } }) => colors.GRAY_600};
  }

  input {
    padding: 0.4rem;
  }

  input[type='text'] {
    width: 90%;
    min-width: 10rem;
    max-width: 16.5rem;
  }

  input[type='number'] {
    width: 5rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-column: 2 / span 2;

  p {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
`;

const FieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: 2 / span 2;

  width: 90%;

  p {
    color: ${({ theme: { colors } }) => colors.RED_ORANGE_600};

    margin: auto;
  }
`;

const Description = styled.div`
  display: block;
  grid-column: 2 / span 2;

  color: ${({ theme: { colors } }) => colors.GRAY_800};

  font-size: 0.9rem;
`;

export { Container, InputContainer, Wrapper, Description, FieldWrapper };
