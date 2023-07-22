import { Suspense, useState } from 'react';

import { AiOutlineSearch } from 'react-icons/ai';

import * as S from './index.styles';
import List from './List';

import ErrorBoundary from '@/components/ErrorBoundary';
import Portal from '@/components/Portal';
import useClosing from '@/hooks/useClosing';
import useDebounce from '@/hooks/useDebounce';
import useInput from '@/hooks/useInput';
import useModal from '@/hooks/useModal';

const modalAnimationTime = 150;

const SearchModal = () => {
  const { value, dangerouslySetValue } = useInput('');
  const [pageNumber, setPageNumber] = useState(0);

  const { setOffModal } = useModal();
  const { isClosing, close } = useClosing(modalAnimationTime, setOffModal);

  const debounce = useDebounce();

  const preventBubbling = e => {
    e.stopPropagation();
  };

  const increasePageNumber = () => {
    setPageNumber(prev => prev++);
  };

  const debouncedChangeValue = debounce(e => {
    dangerouslySetValue(e.target.value);
  }, 1000);

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
              onChange={debouncedChangeValue}
              placeholder="제목 또는 내용 검색"
            />
          </S.InputContainer>
          <ErrorBoundary fallback={<div>일기를 불러오는 데 실패했어요.</div>}>
            <Suspense fallback={<div>일기를 불러오는 중...</div>}>
              <List
                text={value}
                pageNumber={pageNumber}
                increasePageNumber={increasePageNumber}
                close={close}
              />
            </Suspense>
          </ErrorBoundary>
        </S.Container>
      </S.Dimmer>
    </Portal>
  );
};

export default SearchModal;
