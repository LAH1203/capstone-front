import { useEffect, useRef, useState } from 'react';

import { AiOutlineSearch } from 'react-icons/ai';
import { useInfiniteQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import * as S from './index.styles';

import { searchDiary } from '@/apis/request/diary';
import Portal from '@/components/Portal';
import { BROWSER_PATH } from '@/constants/path';
import useClosing from '@/hooks/useClosing';
import useInput from '@/hooks/useInput';
import useModal from '@/hooks/useModal';

const modalAnimationTime = 150;

const SearchModal = () => {
  const { value, onChangeValue } = useInput('');
  const [pageNumber, setPageNumber] = useState(0);

  const { setOffModal } = useModal();
  const { isClosing, close } = useClosing(modalAnimationTime, setOffModal);

  const target = useRef(null);

  const { data, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: ['search', value, pageNumber],
    queryFn: ({ pageParam = 0 }) => searchDiary(value, pageParam),
    getNextPageParam: page => {
      const res = page.isLastPage ? undefined : Number(page.pageNumber) + 1;

      return res;
    },
  });

  const navigate = useNavigate();

  const preventBubbling = e => {
    e.stopPropagation();
  };

  const goToDetailPage = diaryId => () => {
    close();
    navigate(`${BROWSER_PATH.DETAIL}/${diaryId}`);
  };

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
        setPageNumber(prev => prev++);
      });
    };
    const observer = new IntersectionObserver(onIntersection, {
      threshold: 0.5,
    });
    observer.observe(target.current);

    return () => observer.disconnect();
  }, [data.pages, fetchNextPage, isFetching, pageNumber]);

  const diaries = data.pages.reduce((accumulator, currentObject) => {
    return accumulator.concat(currentObject.list);
  }, []);

  return (
    <Portal to="modal">
      <S.Dimmer
        onClick={close}
        className={isClosing ? 'close' : ''}
        animationTime={modalAnimationTime}
      >
        <S.Container
          onClick={preventBubbling}
          className={isClosing ? 'close' : ''}
          animationTime={modalAnimationTime}
        >
          <S.InputContainer>
            <AiOutlineSearch />
            <input
              type="text"
              value={value}
              onChange={onChangeValue}
              placeholder="제목 또는 내용 검색"
            />
          </S.InputContainer>
          <S.List>
            {diaries.map(diary => (
              <S.Item
                onClick={goToDetailPage(diary.diaryId)}
                key={diary.diaryId}
              >
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
            ))}
            <div ref={target}>
              {isFetching && (
                <S.Loading>
                  <p />
                  <p />
                  <p />
                </S.Loading>
              )}
            </div>
          </S.List>
        </S.Container>
      </S.Dimmer>
    </Portal>
  );
};

export default SearchModal;
