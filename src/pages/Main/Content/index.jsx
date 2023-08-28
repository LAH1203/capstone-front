import { useEffect, useState } from 'react';

import { useQuery } from 'react-query';

import DiaryCount from './DiaryCount';
import * as S from './index.styles';
import RandomDiary from './RandomDiary';
import SmallCalendar from './SmallCalendar';
import WritingButton from './WritingButton';

import { requestRandomDiary, requestDiaryCount } from '@/apis/request/diary';
import Title from '@/components/Title';
import useError from '@/hooks/useError';
import useUser from '@/hooks/useUser';

const Content = () => {
  const { info, requestAndSetUserInfo } = useUser();

  const [randomDiary, setRandomDiary] = useState();
  const [diaryCount, setDiaryCount] = useState();

  const handleError = useError();

  const randomDiaryQuery = useQuery({
    queryKey: ['randomDiary'],
    queryFn: requestRandomDiary,
    staleTime: 1000 * 60 * 5,
  });

  const diaryCountQuery = useQuery({
    queryKey: ['totalCount'],
    queryFn: requestDiaryCount,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    setRandomDiary(randomDiaryQuery.data);
  }, [randomDiaryQuery]);

  useEffect(() => {
    setDiaryCount(diaryCountQuery.data);
  }, [diaryCountQuery]);

  useEffect(() => {
    if (info) return;
    requestAndSetUserInfo().catch(error =>
      alert(handleError(error.response.data.code)),
    );
  }, [info]);

  return (
    <>
      {randomDiary && diaryCount && info && (
        <S.Container>
          <S.WrapperTitle>
            <Title name="리마이어리" />
            <S.Nickname>반가워요 {info.nickname} 님!</S.Nickname>
          </S.WrapperTitle>
          <S.WrapperContent>
            <RandomDiary content={randomDiary} />
            <S.WrapperSide>
              <WritingButton />
              <SmallCalendar />
              <DiaryCount count={diaryCount} />
            </S.WrapperSide>
          </S.WrapperContent>
        </S.Container>
      )}
    </>
  );
};

export default Content;
