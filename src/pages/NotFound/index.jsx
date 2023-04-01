import { Link } from 'react-router-dom';

import * as S from './index.styles';

import { BROWSER_PATH } from '@/constants/path';

const NotFound = () => {
  return (
    <S.Container>
      <div>
        <p>알 수 없는 페이지입니다.</p>
        <p>메인 페이지로 돌아가시길 원한다면 밑의 버튼을 클릭해주세요 :)</p>
      </div>
      <Link to={BROWSER_PATH.BASE}>
        <button type="button">메인으로 돌아가기</button>
      </Link>
    </S.Container>
  );
};

export default NotFound;
