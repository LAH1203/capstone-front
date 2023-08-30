import { useEffect, useState } from 'react';

import { useQuery } from 'react-query';

import CalendarHeader from './CalendarHeader';
import CalendarMain from './CalendarMain';
import * as S from './index.style';

import { getdiaryListByCalendar } from '@/apis/request/diary';
import { simplifyDiaryForCalendar } from '@/utils/diaries';

const Calendar = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [diaryCount, setDiaryCount] = useState(0);
  const [currentData, setCurrentData] = useState({});
  const [selectedyear, setSelectedYear] = useState(false);
  const [selectedmonth, setSelectedMonth] = useState(false);

  const { data } = useQuery({
    queryKey: ['diaryList', currentYear, currentMonth],
    queryFn: () => getdiaryListByCalendar(currentYear, currentMonth),
  });

  useEffect(() => {
    const simplifiedDiaries = simplifyDiaryForCalendar(
      data,
      currentYear,
      currentMonth,
    );
    setDiaryCount(Object.keys(simplifiedDiaries).length);
    setCurrentData(simplifiedDiaries);
  }, [data, currentYear, currentMonth]);

  const moveNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);

      return;
    }
    setCurrentMonth(currentMonth + 1);
  };
  const movePrevMonth = () => {
    if (currentMonth === 1) {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);

      return;
    }
    setCurrentMonth(currentMonth - 1);
  };

  const changeDate = type => e => {
    switch (type) {
      case 'year':
        setCurrentYear(e.target.value);
        setSelectedYear(false);

        return;
      case 'month':
        setCurrentMonth(e.target.value);
        setSelectedMonth(false);

        return;
      default:
        return;
    }
  };

  const toggleSelect = type => e => {
    e.stopPropagation();
    switch (type) {
      case 'year':
        setSelectedYear(!selectedyear);
        setSelectedMonth(false);

        return;
      case 'month':
        setSelectedMonth(!selectedmonth);
        setSelectedYear(false);

        return;
      default:
        setSelectedMonth(false);
        setSelectedYear(false);

        return;
    }
  };

  return (
    <S.Container onClick={toggleSelect()}>
      <CalendarHeader
        currentMonth={currentMonth}
        currentYear={currentYear}
        moveNextMonth={moveNextMonth}
        movePrevMonth={movePrevMonth}
        selectedYear={selectedyear}
        selectedMonth={selectedmonth}
        toggleSelect={toggleSelect}
        changeDate={changeDate}
        diaryCount={diaryCount}
      />
      <CalendarMain
        currentMonth={currentMonth}
        currentYear={currentYear}
        currentData={currentData}
      />
    </S.Container>
  );
};

export default Calendar;
