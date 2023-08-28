import { useRef, Suspense, useEffect } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';

import Diary from './Diary';
import Filter from './Filter';
import * as S from './index.styles';
import Info from './Info';
import Skeleton from './Skeleton';

import Title from '@/components/Title';
import { BROWSER_PATH } from '@/constants/path';
import useError from '@/hooks/useError';
import useUser from '@/hooks/useUser';

const Mypage = () => {
  const { isLogin, info, requestAndSetUserInfo } = useUser();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const topRef = useRef();

  const handleError = useError();

  useEffect(() => {
    if (!isLogin) {
      navigate(BROWSER_PATH.LANDING);
    }
  }, [isLogin, navigate]);

  useEffect(() => {
    if (info) return;
    requestAndSetUserInfo().catch(error =>
      alert(handleError(error.response.data.code)),
    );
  }, [info]);

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
          info && <Info />
        )}
      </S.Wrapper>
    </S.Container>
  );
};

export default Mypage;
