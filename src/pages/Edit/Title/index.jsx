import * as S from './index.styles';
import Weather from './Weather';

import ErrorBoundary from '@/components/ErrorBoundary';
import { getDay } from '@/utils/date';

const Title = ({ title, setTitle, date, setWeather, mood, setMood }) => {
  return (
    <S.Container>
      <S.Input value={title} onChange={setTitle} />
      <S.Description>
        <label>date</label>
        <span>
          {`${date.getFullYear()}/ ${
            date.getMonth() + 1
          }/ ${date.getDate()} (${getDay(date.getDay())})`}
        </span>
        <label>weather</label>
        <ErrorBoundary fallback="🤷">
          <Weather setWeather={setWeather} />
        </ErrorBoundary>
        <label htmlFor="mood">mood</label>
        <select name="mood" id="mood" value={mood} onChange={setMood}>
          <option value="best">😀</option>
          <option value="good">🙂</option>
          <option value="medium">😐</option>
          <option value="bad">🙁</option>
          <option value="worst">😞</option>
        </select>
      </S.Description>
    </S.Container>
  );
};

export default Title;
