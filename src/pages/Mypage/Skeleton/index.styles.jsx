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
  width: 80vw;
  height: 100%;
  margin: auto;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
    width: 90vw;
  }

  animation: ${fade} 1.5s infinite ease-out;
`;

const WrapperFilter = styled.div`
  display: flex;
  justify-content: space-between;

  * {
    background-color: ${({ theme: { colors } }) => colors.SKELETON};
    border-radius: 10px;
    padding: 1rem;
    margin: 1.5rem 1rem 1rem 1rem;
  }
`;

const FilterMood = styled.div`
  width: 60vw;
`;

const FilterDisplay = styled.div`
  width: 3vw;
`;

const Post = styled.div`
  &.list {
    margin: 0 1rem;
  }
  &.grid {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(5, 12rem);
    justify-content: center;
    column-gap: 3rem;
    row-gap: 2rem;
    padding: 1rem 0;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
      grid-template-columns: repeat(2, 9rem);
      column-gap: 1rem;
      row-gap: 1rem;
    }
  }
`;

const Item = styled.div`
  background-color: ${({ theme: { colors } }) => colors.SKELETON};

  &.list {
    padding: 1.5rem 5vw;
    margin-top: 1rem;
    border-radius: 5px;
  }

  &.grid {
    width: 150px;
    height: 200px;
    border-radius: 5px;
    margin: auto;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
      width: 110px;
      height: 140px;
    }
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;

  margin: 2rem 1rem;
`;

const Button = styled.div`
  background-color: ${({ theme: { colors } }) => colors.SKELETON};
  padding: 0.8rem;
  margin-right: 1rem;
  border-radius: 5px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-right: 0.5rem;
  }
`;

export {
  Container,
  WrapperFilter,
  FilterMood,
  FilterDisplay,
  Post,
  Item,
  Pagination,
  Button,
};
