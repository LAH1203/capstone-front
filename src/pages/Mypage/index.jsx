import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { BROWSER_PATH } from '@/constants/path';
import Title from './Title';
import Filter from './Filter';
import Info from './Info';
import Diary from './Diary';
import * as S from './index.styles';

const Mypage = props => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState(searchParams.get('t'));
  const { INFO, DIARY } = BROWSER_PATH.MYPAGE;
  const topRef = useRef();
  const location = useLocation();

  useEffect(() => {
    if (!location.search) setSearchParams({ t: INFO });
  }, []);

  useEffect(() => {
    if (searchParams.get('t') === DIARY) {
      setFilter(DIARY);

      return;
    }
    setFilter(INFO);
  }, [searchParams.get('t')]);

  const toTop = () => {
    topRef.current.scrollIntoView();
  };

  return (
    <S.Container>
      <div ref={topRef}></div>
      <Title name="마이페이지" />
      <Filter filter={filter} />
      <S.Wrapper>
        {filter === INFO ? <Info /> : <Diary toTop={toTop} />}
      </S.Wrapper>
    </S.Container>
  );
};

export default Mypage;
