import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 2rem;
  ${({ theme: { breakpoints } }) => css`
    @media screen and (max-width: ${breakpoints.md}px) {
      padding: 1rem;
    }
  `}
`;

const DayBox = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.25rem;
  min-height: 3.25rem;
  color: ${({ day, theme }) => {
    switch (day) {
      case 0:
        return theme.colors.RED_500;
      case 6:
        return theme.colors.BLUE_500;
      default:
        return theme.colors.GREEN_700;
    }
  }};
  ${({ theme: { breakpoints } }) => css`
    @media screen and (max-width: ${breakpoints.md}px) {
      font-size: 1rem;
      min-height: 2.25rem;
    }
  `}
`;

const Date = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-radius: 5px;
  font-weight: 600;
  font-size: 1.25rem;
  padding: 1rem;
  min-height: 3.25rem;
  grid-column-start: ${({ date, startdate }) =>
    date === 0 ? startdate : 'auto'};

  &:hover {
    background-color: ${({ theme }) => theme.colors.GREEN_100};
  }

  &:hover .desc {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${({ theme: { breakpoints } }) => css`
    @media screen and (min-width: ${breakpoints.sm +
      1}px) and (max-width: ${breakpoints.md}px) {
      gap: 1rem;
      padding: 0.725rem;
    }

    @media screen and (max-width: ${breakpoints.sm}px) {
      gap: 0.75rem;
      padding: 0.5rem;
      font-size: 0.825rem;
      min-width: 1.25rem;
    }
  `}
`;

const DescBox = styled.div`
  box-sizing: border-box;
  width: 100%;

  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #d9d9d9;
  padding: 0.725rem 0;
  text-align: center;
  border-radius: 10px;

  font-size: 0.725rem;
  font-weight: 400;
`;

const DateTitle = styled.div`
  display: flex;
  justify-content: space-around;
`;

const DateInfo = styled.span`
  flex-grow: 2;
  color: ${({ date, startDate, theme }) => {
    switch ((date + startDate) % 7) {
      case 1:
        return theme.colors.RED_500;
      case 0:
        return theme.colors.BLUE_500;
      default:
        return theme.colors.GREEN_700;
    }
  }};
`;

export { Container, DayBox, Day, Date, DescBox, DateTitle, DateInfo };
