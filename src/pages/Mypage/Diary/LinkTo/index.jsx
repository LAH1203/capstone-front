import { Link } from 'react-router-dom';
import { LIMIT } from '@/constants/diary';

const LinkTo = ({ children, mood, page }) => {
  return (
    <Link to={`?t=diary&mood=${mood}&page=${page}&size=${LIMIT.PAGE}`}>
      {children}
    </Link>
  );
};

export default LinkTo;
