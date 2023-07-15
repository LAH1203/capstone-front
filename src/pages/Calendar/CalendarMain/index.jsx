import { RxDotFilled } from 'react-icons/rx';

import * as S from './index.style';

import { getDayKorean } from '@/utils/date';

const CalendarMain = ({ currentYear, currentMonth, currentData }) => {
  const totalDate = new Date(currentYear, currentMonth, 0).getDate();
  const startDate = new Date(currentYear, currentMonth - 1, 1).getDay() + 1;

  return (
    <S.Container>
      <S.DayBox>
        {Array.from(Array(7).keys()).map(day => (
          <S.Day key={day} day={day}>
            {getDayKorean(day)}
          </S.Day>
        ))}
      </S.DayBox>
      <S.DayBox>
        {Array.from(Array(totalDate).keys()).map(i => (
          <S.Date
            to={currentData[i + 1] ? `/detail/${currentData[i + 1].id}` : null}
            key={`${i}-day`}
            date={i}
            startdate={startDate}
          >
            <S.DateTitle>
              <S.DateInfo date={i} startDate={startDate}>
                {i + 1}
              </S.DateInfo>
              <span>
                {currentData[i + 1] && <RxDotFilled color="#404F40" />}
              </span>
            </S.DateTitle>
            <div>{currentData[i + 1]?.mood}</div>
            {currentData[i + 1] && (
              <S.DescBox className="desc">{currentData[i + 1].desc}</S.DescBox>
            )}
          </S.Date>
        ))}
      </S.DayBox>
    </S.Container>
  );
};

export default CalendarMain;
