import * as S from './index.styles';
import Weather from './Weather';

import ErrorBoundary from '@/components/ErrorBoundary';
import { MOOD } from '@/constants/diary';
import { getDay } from '@/utils/date';

const EditorTitle = ({ title, setTitle, date, setWeather, mood, setMood }) => {
  return (
    <S.Container>
      <S.Input value={title} onChange={setTitle} />
      <S.Description>
        <label>date</label>
        <span>
          {`${date?.getFullYear()}/ ${
            date?.getMonth() + 1
          }/ ${date?.getDate()} (${getDay(date?.getDay())})`}
        </span>
        <label>weather</label>
        <ErrorBoundary fallback="🤷">
          <Weather setWeather={setWeather} />
        </ErrorBoundary>
        <label htmlFor="mood">mood</label>
        <select name="mood" id="mood" value={mood} onChange={setMood}>
          <option value={MOOD.BEST.text}>{MOOD.BEST.emoji}</option>
          <option value={MOOD.GOOD.text}>{MOOD.GOOD.emoji}</option>
          <option value={MOOD.NORMAL.text}>{MOOD.NORMAL.emoji}</option>
          <option value={MOOD.BAD.text}>{MOOD.BAD.emoji}</option>
          <option value={MOOD.WORST.text}>{MOOD.WORST.emoji}</option>
        </select>
      </S.Description>
    </S.Container>
  );
};

export default EditorTitle;
