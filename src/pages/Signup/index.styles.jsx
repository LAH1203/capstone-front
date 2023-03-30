import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  height: 100%;

  padding: 0 5%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  line-height: 1.5rem;

  font-size: 1.3rem;

  span {
    color: ${({ theme: { colors } }) => colors.GREEN_500};

    font-weight: 900;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

const Button = styled.button`
  width: 10rem;
  height: 2.8rem;

  background: ${({ theme: { colors } }) => colors.GREEN_500};
  color: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};

  border-radius: 4px;

  font-size: 1rem;

  transition: background-color 0.5s;

  &:disabled {
    background: ${({ theme: { colors } }) => colors.GREEN_100};
  }
`;

export { Container, Wrapper, Form, Button };
