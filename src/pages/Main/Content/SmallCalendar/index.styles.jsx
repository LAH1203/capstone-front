import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Container = styled(Link)`
  box-sizing: border-box;
  padding: 1rem;
  width: 100%;
  height: 15rem;
  background-color: ${({ theme }) => theme.colors.INPUT_BACKGROUND};
  font-size: 0.825rem;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  font-weight: 600;
`;

const Calendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-top: 1rem;
`;

const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  min-height: 2rem;
  grid-column-start: ${({ date, startdate }) =>
    date === 0 ? startdate : 'auto'};
  font-weight: 600;
`;

const DateInfo = styled.span`
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

export { Container, Title, Calendar, Date, DateInfo };
