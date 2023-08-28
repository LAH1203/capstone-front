import CountGraph from './CountGraph';
import * as S from './index.styles';

const DiaryCount = ({ count }) => {
  const now = new Date();
  const thisYear = now.getFullYear();
  const thisMonth = now.getMonth() + 1;

  const countOfMonth = getCountOfMonth(thisYear, thisMonth);
  const countOfYear = getCountOfYear(thisYear);

  return (
    <S.Container>
      <CountGraph name="올해" value={count.year} total={countOfYear} />
      <CountGraph name="이번달" value={count.month} total={countOfMonth} />
    </S.Container>
  );
};

const getCountOfMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};

const getCountOfYear = year => {
  let sum = 0;
  for (let i = 1; i <= 12; i++) sum += getCountOfMonth(year, i);
  return sum;
};

export default DiaryCount;
