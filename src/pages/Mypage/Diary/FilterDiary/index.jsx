import { FaList } from 'react-icons/fa';
import { IoGrid } from 'react-icons/io5';

import * as S from './index.styles';

import { MOOD } from '@/constants/diary';
import useDisplayLayout from '@/hooks/useDisplayLayout';
import LinkToDiary from '@/pages/Mypage/LinkToDiary';

const FilterDiary = ({ mood }) => {
  const [display, setDisplay] = useDisplayLayout();

  const handleDisplay = display => () => {
    setDisplay(display);
  };

  return (
    <S.Container>
      <section>
        <LinkToDiary mood={MOOD.BEST.text} page={0}>
          <S.Button
            type="button"
            className={mood === MOOD.BEST.text ? 'selected' : ''}
          >
            최상{MOOD.BEST.emoji}
          </S.Button>
        </LinkToDiary>
        <LinkToDiary mood={MOOD.GOOD.text} page={0}>
          <S.Button
            type="button"
            className={mood === MOOD.GOOD.text ? 'selected' : ''}
          >
            상{MOOD.GOOD.emoji}
          </S.Button>
        </LinkToDiary>
        <LinkToDiary mood={MOOD.NORMAL.text} page={0}>
          <S.Button
            type="button"
            className={mood === MOOD.NORMAL.text ? 'selected' : ''}
          >
            중{MOOD.NORMAL.emoji}
          </S.Button>
        </LinkToDiary>
        <LinkToDiary mood={MOOD.BAD.text} page={0}>
          <S.Button
            type="button"
            className={mood === MOOD.BAD.text ? 'selected' : ''}
          >
            하{MOOD.BAD.emoji}
          </S.Button>
        </LinkToDiary>
        <LinkToDiary mood={MOOD.WORST.text} page={0}>
          <S.Button
            type="button"
            className={mood === MOOD.WORST.text ? 'selected' : ''}
          >
            최하{MOOD.WORST.emoji}
          </S.Button>
        </LinkToDiary>
      </section>
      <S.WrapperDisplay>
        <button
          type="button"
          className={display === 'list' ? '' : 'selected'}
          onClick={handleDisplay('grid')}
        >
          <IoGrid />
        </button>
        <button
          type="button"
          className={display === 'list' ? 'selected' : ''}
          onClick={handleDisplay('list')}
        >
          <FaList />
        </button>
      </S.WrapperDisplay>
    </S.Container>
  );
};

export default FilterDiary;
