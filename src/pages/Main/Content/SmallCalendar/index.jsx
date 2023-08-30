import { useEffect, useState } from 'react';

import { RxDotFilled } from 'react-icons/rx';
import { useQuery } from 'react-query';

import * as S from './index.styles';

import { getdiaryListByCalendar } from '@/apis/request/diary';
import { simplifyDiaryForCalendar } from '@/utils/diaries';

const SmallCalendar = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const totalDate = new Date(year, month, 0).getDate();
  const startDate = new Date(year, month - 1, 1).getDay() + 1;

  const [currentData, setCurrentData] = useState({});

  const { data } = useQuery({
    queryKey: ['diaryList'],
    queryFn: () => getdiaryListByCalendar(year, month),
  });

  useEffect(() => {
    const simplifiedDiaries = simplifyDiaryForCalendar(data, year, month);
    setCurrentData(simplifiedDiaries);
  }, [data]);

  return (
    <S.Container to="/calendar">
      <S.Title>
        <span>{year}년</span>
        <span>{month}월</span>
      </S.Title>
      <S.Calendar>
        {Array.from(Array(totalDate).keys()).map(i => (
          <S.Date key={`${i}-day`} date={i} startdate={startDate}>
            <S.DateInfo date={i} startDate={startDate}>
              {i + 1}
            </S.DateInfo>
            <span>{currentData[i + 1] && <RxDotFilled color="#404F40" />}</span>
          </S.Date>
        ))}
      </S.Calendar>
    </S.Container>
  );
};

export default SmallCalendar;
