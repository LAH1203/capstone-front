import { useEffect, useState } from 'react';

import { useQuery } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';

import FilterDiary from './FilterDiary';
import * as S from './index.styles';
import Post from './Post';

import {
  requestDiaryByMood,
  requestDiaryCountByMood,
} from '@/apis/request/diary';
import { LIMIT } from '@/constants/diary';
import { MOOD } from '@/constants/diary';
import { BROWSER_PATH } from '@/constants/path';
import useMount from '@/hooks/useMount';

const Diary = ({ toTop }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const type = searchParams.get('t');
  const mood = validMood(searchParams.get('mood'))
    ? searchParams.get('mood')
    : MOOD.BEST.text;
  const page = validPage(searchParams.get('page'))
    ? searchParams.get('page')
    : 0;

  const [totalDiaryCount, setTotalDiaryCount] = useState({});
  const [list, setList] = useState([]);

  const totalDiaryCountQuery = useQuery({
    queryKey: ['diaryCount'],
    queryFn: requestDiaryCountByMood,
  });

  const listQuery = useQuery({
    queryKey: ['list', mood, page],
    queryFn: () =>
      requestDiaryByMood({
        mood,
        page,
        size: LIMIT.PAGE,
      }),
  });

  useEffect(() => {
    if (type !== BROWSER_PATH.MYPAGE.DIARY) navigate(BROWSER_PATH.MYPAGE.BASE);
  }, [type, navigate]);

  useEffect(() => {
    setList(listQuery.data);
  }, [listQuery]);

  useEffect(() => {
    setTotalDiaryCount(totalDiaryCountQuery.data);
  }, [totalDiaryCountQuery]);

  useMount(() => {
    toTop();
  }, [searchParams.get('page')]);

  const setParams = (mood, page) => {
    setSearchParams({
      t: BROWSER_PATH.MYPAGE.DIARY,
      mood,
      page,
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

const validMood = mood => {
  const moodArr = [
    MOOD.BEST.text,
    MOOD.GOOD.text,
    MOOD.NORMAL.text,
    MOOD.BAD.text,
    MOOD.WORST.text,
  ];
  return moodArr.includes(mood);
};

const validPage = page => {
  return page && Number(page) >= 0;
};

export default Diary;
