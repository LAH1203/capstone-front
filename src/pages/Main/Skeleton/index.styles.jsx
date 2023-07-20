import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const fade = keyframes`
  0%, 100%{
    opacity:1;
  }
  50%{
    opacity: 0.5;
  }
`;

const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;

  animation: ${fade} 1.5s infinite ease-out;
`;

const OnlyMobilMenu = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 1rem auto 0 auto;

    div {
      background-color: ${({ theme: { colors } }) => colors.SKELETON};
      width: 6rem;
      height: 2rem;
      border-radius: 5px;
    }
  }
`;

const Header = styled.div`
  background-color: ${({ theme: { colors } }) => colors.SKELETON};
  padding: 2rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 1.5rem;
  }
`;

const WrapperContent = styled.div`
  flex: 1 1 auto;
  width: 90%;

  margin: auto;

  display: grid;
  grid-template-columns: 5fr 2fr;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: flex;
    flex-direction: column;
  }
`;

const RandomDiary = styled.div`
  margin: 2rem;
  background-color: ${({ theme: { colors } }) => colors.SKELETON};
  border-radius: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin: 1rem;
    margin-top: 2rem;
    height: 20rem;
  }
`;

const SideBar = styled.div`
  margin: 2rem;

  display: grid;
  grid-template-rows: 1fr 2fr 2fr;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin: 1rem;
    display: flex;
    flex-direction: column;
  }

  div {
    margin-bottom: 2rem;
    background-color: ${({ theme: { colors } }) => colors.SKELETON};
    border-radius: 10px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
      height: 10rem;
    }
  }
`;

export {
  Container,
  OnlyMobilMenu,
  Header,
  WrapperContent,
  RandomDiary,
  SideBar,
};
