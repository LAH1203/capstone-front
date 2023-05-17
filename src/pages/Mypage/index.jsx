import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BROWSER_PATH } from '@/constants/path';
import Title from './Title';
import Filter from './Filter';
import Info from './Info';
import Diary from './Diary';

const Mypage = props => {
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState(searchParams.get('t'));
  const { INFO, DIARY } = BROWSER_PATH.MYPAGE;
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`?t=${INFO}`);
  }, []);

  useEffect(() => {
    if (searchParams.get('t') === DIARY) {
      setFilter(DIARY);
      return;
    }
    setFilter(INFO);
  }, [searchParams.get('t')]);

  const changeFilter = filter => {
    setFilter(filter);
  };

  return (
    <>
      <Title name="마이페이지" />
      <Filter filter={filter} changeFilter={changeFilter} />
      {filter === INFO ? <Info /> : <Diary />}
    </>
  );
};

export default Mypage;
