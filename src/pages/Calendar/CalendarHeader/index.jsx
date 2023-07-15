import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

import * as S from './index.style';

const CalendarHeader = ({
  currentMonth,
  currentYear,
  moveNextMonth,
  movePrevMonth,
  selectedYear,
  selectedMonth,
  toggleSelect,
  changeDate,
  diaryCount,
}) => {
  return (
    <S.Container>
      <S.MoveBtn>
        <AiOutlineLeft onClick={movePrevMonth} />
      </S.MoveBtn>
      <S.SelectContainer>
        <S.SelecedValue type="button" onClick={toggleSelect('year')}>
          {currentYear} 년
        </S.SelecedValue>
        <S.SelectBox open={selectedYear}>
          {Array.from(Array(5).keys()).map(i => (
            <S.SelectOption
              key={`${i}-year`}
              selected={i - 2 + currentYear === currentYear}
              onClick={changeDate('year')}
              value={i - 2 + currentYear}
            >
              {i - 2 + currentYear}
            </S.SelectOption>
          ))}
        </S.SelectBox>
      </S.SelectContainer>
      <S.SelectContainer>
        <S.SelecedValue type="button" onClick={toggleSelect('month')}>
          {currentMonth} 월
        </S.SelecedValue>
        <S.SelectBox open={selectedMonth}>
          {Array.from(Array(12).keys()).map(i => (
            <S.SelectOption
              key={`${i}-month`}
              selected={i + 1 === currentMonth}
              onClick={changeDate('month')}
              value={i + 1}
            >
              {i + 1}
            </S.SelectOption>
          ))}
        </S.SelectBox>
      </S.SelectContainer>
      <S.MoveBtn>
        <AiOutlineRight onClick={moveNextMonth} />
      </S.MoveBtn>
      <S.CountBox>
        {diaryCount}/{new Date(currentYear, currentMonth, 0).getDate()}
      </S.CountBox>
    </S.Container>
  );
};

export default CalendarHeader;
