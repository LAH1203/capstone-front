import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const showTitle = keyframes`
  to {
    transform: translate3d(150%, 0, 0);
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
  justify-content: center;
  align-items: center;
  gap: 10rem;

  height: 100vh;

  padding: 0 5%;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  width: 90%;

  margin: 0 10%;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  transform: translate3d(-150%, 0, 0);

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

const KakaoLoginImg = styled.img`
  width: 20rem;

  opacity: 0;

  animation: ${showDescription} 1s forwards;
  animation-delay: 4s;
`;

export { Container, DescriptionContainer, Title, Description, KakaoLoginImg };
