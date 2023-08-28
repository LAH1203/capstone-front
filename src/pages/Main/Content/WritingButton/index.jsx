import { Link } from 'react-router-dom';

import * as S from './index.styles';

import { BROWSER_PATH } from '@/constants/path';

const WritingButton = () => {
  return (
    <S.Button type="button">
      <Link to={BROWSER_PATH.NEW}>일기 작성하기</Link>
    </S.Button>
  );
};

export default WritingButton;
