import { Link } from 'react-router-dom';
import { MOOD } from '@/constants/diary';
import LinkToDiary from '@/pages/Mypage/LinkToDiary';
import * as S from './index.styles';

const Filter = ({ isDiary }) => {
  return (
    <S.Container>
      <li>
        <Link to={`/me`}>
          <S.Button type="button" className={isDiary ? '' : 'selected'}>
            개인 정보
          </S.Button>
        </Link>
      </li>
      <li>
        <LinkToDiary mood={MOOD.BEST} page={0}>
          <S.Button type="button" className={isDiary ? 'selected' : ''}>
            기분 별 일기 모아보기
          </S.Button>
        </LinkToDiary>
      </li>
    </S.Container>
  );
};

export default Filter;
