import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const showTitle = keyframes`
  to {
    transform: translate3d(100%, 0, 0);
  }
`;

const showDescription = keyframes`
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10rem;

  padding: 1rem 3rem;
`;

const AuthButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Button = styled.button`
  width: 6rem;

  border-radius: 4px;

  padding: 0.5rem 0;
`;

const SignupButton = styled(Button)`
  background: none;

  ${({ theme: { colors } }) => `
    color: ${colors.RED_ORANGE_500};

    border: 0.8px solid ${colors.RED_ORANGE_500};
  `}
`;

const LoginButton = styled(Button)`
  ${({ theme: { colors } }) => `
    background: ${colors.RED_ORANGE_500};
    color: ${colors.WHITE_100};
  `}
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  margin: 0 10%;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  transform: translate3d(-100%, 0, 0);

  font-size: 2.4rem;
  font-weight: 500;

  p {
    &:first-of-type {
      animation: ${showTitle} 1s forwards;
    }

    &:last-of-type {
      animation: ${showTitle} 1s forwards;
      animation-delay: 1.2s;
    }
  }

  span {
    color: ${({ theme: { colors } }) => colors.RED_ORANGE_500};
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  opacity: 0;

  font-size: 1.2rem;

  animation: ${showDescription} 2s forwards;
  animation-delay: 2.8s;

  span {
    color: ${({ theme: { colors } }) => colors.RED_ORANGE_500};
  }
`;

export {
  Container,
  AuthButtonContainer,
  SignupButton,
  LoginButton,
  DescriptionContainer,
  Title,
  Description,
};
