import { Link } from 'react-router-dom';

import { LIMIT } from '@/constants/diary';
import { BROWSER_PATH } from '@/constants/path';

const LinkToDiary = ({ children, mood, page }) => {
  return (
    <Link
      to={`?t=${BROWSER_PATH.MYPAGE.DIARY}&mood=${mood}&page=${page}&size=${LIMIT.PAGE}`}
    >
      {children}
    </Link>
  );
};

export default LinkToDiary;
