import { Link } from 'react-router-dom';
import { BROWSER_PATH } from '@/constants/path';
import * as S from './index.styles';

const WritingButton = () => {
  return (
    <S.Button type="button">
      <Link to={BROWSER_PATH.EDIT}>일기 작성하기</Link>
    </S.Button>
  );
};

export default WritingButton;
