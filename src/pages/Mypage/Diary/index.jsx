import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  requestDiaryByMood,
  requestDiaryCountByMood,
} from '@/apis/request/diary';
import { LIMIT } from '@/constants/diary';
import { BROWSER_PATH } from '@/constants/path';
import useMount from '@/hooks/useMount';
import useFetchQuery from '@/hooks/useFetchQuery';
import FilterDiary from './FilterDiary';
import Post from './Post';
import * as S from './index.styles';

const Diary = ({ toTop }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const mood = searchParams.get('mood');
  const page = searchParams.get('page');

  const [totalDiaryCount, setTotalDiaryCount] = useState({});
  const [list, setList] = useState([]);

  const { dataQuery: totalDiaryCountQuery } = useFetchQuery(
    ['diaryCount'],
    requestDiaryCountByMood,
    1000 * 60 * 5,
  );

  const { dataQuery: listQuery } = useFetchQuery(
    ['list', mood, page],
    () => {
      return requestDiaryByMood({
        mood,
        page,
        size: LIMIT.PAGE,
      });
    },
    1000 * 60 * 5,
  );

  useEffect(() => {
    setList(listQuery.data);
    setTotalDiaryCount(totalDiaryCountQuery.data);
  }, [listQuery, totalDiaryCountQuery]);

  useMount(() => {
    toTop();
  }, [searchParams.get('page')]);

  const setParams = (mood, page) => {
    setSearchParams({
      t: BROWSER_PATH.MYPAGE.DIARY,
      mood,
      page,
      size: LIMIT.PAGE,
    });
  };

  return (
    <S.Container>
      <FilterDiary mood={mood} page={page} />
      <S.Wrapper>
        <Post
          list={list}
          totalPage={Math.ceil(totalDiaryCount[mood] / LIMIT.PAGE)}
          mood={mood}
          page={Number(page)}
          setParams={setParams}
        />
      </S.Wrapper>
    </S.Container>
  );
};

export default Diary;
