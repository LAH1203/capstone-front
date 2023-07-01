import { useSearchParams } from 'react-router-dom';
import { useRef, Suspense } from 'react';
import Title from './Title';
import Filter from './Filter';
import Info from './Info';
import Diary from './Diary';
import * as S from './index.styles';
import Skeleton from './Skeleton';

const Mypage = () => {
  const [searchParams] = useSearchParams();
  const topRef = useRef();
  
  const toTop = () => {
    topRef.current.scrollIntoView();
  };

  return (
    <S.Container>
      <div ref={topRef}></div>
      <Title name="마이페이지" />
      <Filter isDiary={searchParams.get('t')} />
      <S.Wrapper>
        {searchParams.get('t') ? (
          <Suspense fallback={<Skeleton />}>
            <Diary toTop={toTop} />
          </Suspense>
        ) : (
          <Info />
        )}
      </S.Wrapper>
    </S.Container>
  );
};

export default Mypage;
