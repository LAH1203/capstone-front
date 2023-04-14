import * as S from './index.styles';

import { getDay } from '@/utils/date';
import { weatherToIcon } from '@/utils/weather';

const Title = ({ title, setTitle, date, weather, mood, setMood }) => {
  return (
    <S.Container>
      <S.Input value={title} onChange={setTitle} />
      <S.DateBox>
        <S.DateInfo>
          <span>date</span>
          <span>
            {`${date.getFullYear()}/${
              date.getMonth() + 1
            }/${date.getDate()} (${getDay()})`}
          </span>
        </S.DateInfo>
        <S.DateInfo>
          <span>weather</span>
          <span>{weatherToIcon(weather)}</span>
        </S.DateInfo>
        <S.DateInfo>
          <span>
            <label htmlFor="mood">mood</label>
          </span>
          <span>
            <select name="mood" id="mood" value={mood} onChange={setMood}>
              <option value="best">😀</option>
              <option value="good">🙂</option>
              <option value="medium">😐</option>
              <option value="bad">🙁</option>
              <option value="worst">😞</option>
            </select>
          </span>
        </S.DateInfo>
      </S.DateBox>
    </S.Container>
  );
};

export default Title;
