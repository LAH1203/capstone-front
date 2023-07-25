import { useEffect, useRef } from 'react';

import { useInfiniteQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import * as S from './index.styles';

import { searchDiary } from '@/apis/request/diary';
import { BROWSER_PATH } from '@/constants/path';

const List = ({ text, pageNumber, increasePageNumber, close }) => {
  const navigate = useNavigate();
  const target = useRef(null);

  const goToDetailPage = diaryId => () => {
    close();
    navigate(`${BROWSER_PATH.DETAIL}/${diaryId}`);
  };

  const { data, fetchNextPage, isFetching, hasNextPage } = useInfiniteQuery({
    queryKey: ['search', text, pageNumber],
    queryFn: ({ pageParam = 0 }) => searchDiary(text, pageParam),
    getNextPageParam: page => {
      const res = page.isLastPage ? undefined : Number(page.pageNumber) + 1;

      return res;
    },
    suspense: true,
  });

  useEffect(() => {
    const onIntersection = async ([entry], observer) => {
      if (
        !entry.isIntersecting ||
        isFetching ||
        data.pages[pageNumber].isLastPage
      )
        return;

      fetchNextPage().then(() => {
        if (data.pages[pageNumber].isLastPage) {
          observer.unobserve(target.current);
        }
        increasePageNumber();
      });
    };
    const observer = new IntersectionObserver(onIntersection, {
      threshold: 0.1,
    });
    observer.observe(target.current);

    return () => observer.disconnect();
  }, [data.pages, fetchNextPage, increasePageNumber, isFetching, pageNumber]);

  const diaries = data.pages.reduce((accumulator, currentObject) => {
    return accumulator.concat(currentObject.list);
  }, []);

  return (
    <S.List>
      {diaries.length > 0 ? (
        diaries.map(diary => (
          <S.Item onClick={goToDetailPage(diary.diaryId)} key={diary.diaryId}>
            <S.Title>
              <p>{diary.title}</p>
              <p>{diary.date}</p>
            </S.Title>
            <S.Content>{diary.content}</S.Content>
            <S.HashtagWrapper>
              {diary.hashtag.map(hashtag => (
                <S.Hashtag key={hashtag}>{hashtag}</S.Hashtag>
              ))}
            </S.HashtagWrapper>
          </S.Item>
        ))
      ) : (
        <S.EmptyList>해당 내용의 일기가 없어요</S.EmptyList>
      )}
      <div ref={target}>
        {hasNextPage && (
          <S.Loading>
            <p />
            <p />
            <p />
          </S.Loading>
        )}
      </div>
    </S.List>
  );
};

export default List;
