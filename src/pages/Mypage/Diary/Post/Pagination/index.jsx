import { useState } from 'react';
import LinkToDiary from '@/pages/Mypage/LinkToDiary';
import { LIMIT } from '@/constants/diary';
import useMount from '@/hooks/useMount';
import * as S from './index.styles';

const Pagination = ({ totalPage, mood, page, setParams }) => {
  const [totalButtonIndex, setTotalButtonIndex] = useState(
    Math.ceil(totalPage / LIMIT.BUTTON) - 1,
  );
  const [currentButtonIndex, setCurrentButtonIndex] = useState(0);
  
  useMount(() => {
    setTotalButtonIndex(Math.ceil(totalPage / LIMIT.BUTTON) - 1);
    setCurrentButtonIndex(0);
  }, [totalPage]);

  useMount(() => {
    setCurrentButtonIndex(Math.floor(page / LIMIT.BUTTON));
  }, [page]);

  const handlePrev = () => {
    if (currentButtonIndex <= 0) return;

    const prevIdx = currentButtonIndex - 1;

    setCurrentButtonIndex(prevIdx);
    setParams(mood, 10 * prevIdx);
  };

  const handleNext = () => {
    if (currentButtonIndex >= totalButtonIndex) return;

    const nextIdx = currentButtonIndex + 1;

    setCurrentButtonIndex(nextIdx);
    setParams(mood, 10 * nextIdx);
  };

  return (
    <S.Container>
      <li>
        <S.Button onClick={handlePrev}>&lt;&lt;</S.Button>
      </li>
      {Array(
        getButtonCountPerPage(totalButtonIndex, currentButtonIndex, totalPage),
      )
        .fill()
        .map((_, idx) => (
          <li key={idx}>
            <LinkToDiary mood={mood} page={getBtnIdx(idx, currentButtonIndex)}>
              <S.Button
                className={
                  page === getBtnIdx(idx, currentButtonIndex) ? 'selected' : ''
                }
              >
                {getBtnIdx(idx, currentButtonIndex) + 1}
              </S.Button>
            </LinkToDiary>
          </li>
        ))}
      <li>
        <S.Button type="button" onClick={handleNext}>
          &gt;&gt;
        </S.Button>
      </li>
    </S.Container>
  );
};

const getButtonCountPerPage = (
  totalButtonIndex,
  currentButtonIndex,
  totalPage,
) => {
  if (currentButtonIndex < totalButtonIndex) return LIMIT.BUTTON;
  return totalPage % LIMIT.BUTTON ? totalPage % LIMIT.BUTTON : LIMIT.BUTTON;
};

const getBtnIdx = (idx, currentButtonIndex) => {
  return idx + 10 * currentButtonIndex;
};

export default Pagination;
