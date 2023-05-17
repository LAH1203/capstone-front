import { Link } from 'react-router-dom';
import * as S from './index.styles';
import { BROWSER_PATH } from '@/constants/path';

const Filter = ({ filter, changeFilter }) => {
  const { INFO, DIARY } = BROWSER_PATH.MYPAGE;

  const changePageFilter = filter => () => {
    changeFilter(filter);
  };

  return (
    <S.Container>
      <li>
        <Link to={`?t=${INFO}`}>
          <S.Button
            type="button"
            onClick={changePageFilter(INFO)}
            className={filter === INFO ? 'selected' : ''}
          >
            개인 정보
          </S.Button>
        </Link>
      </li>
      <li>
        <Link to={`?t=${DIARY}`}>
          <S.Button
            type="button"
            onClick={changePageFilter(DIARY)}
            className={filter === DIARY ? 'selected' : ''}
          >
            기분 별 일기 모아보기
          </S.Button>
        </Link>
      </li>
    </S.Container>
  );
};

export default Filter;
