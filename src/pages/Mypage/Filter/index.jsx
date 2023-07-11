import { Link } from 'react-router-dom';

import * as S from './index.styles';

import { MOOD } from '@/constants/diary';
import LinkToDiary from '@/pages/Mypage/LinkToDiary';

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
        <LinkToDiary mood={MOOD.BEST.text} page={0}>
          <S.Button type="button" className={isDiary ? 'selected' : ''}>
            기분 별 일기 모아보기
          </S.Button>
        </LinkToDiary>
      </li>
    </S.Container>
  );
};

export default Filter;
