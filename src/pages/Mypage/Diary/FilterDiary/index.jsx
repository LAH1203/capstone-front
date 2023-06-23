import { MOOD } from '@/constants/diary';
import { IoGrid } from 'react-icons/io5';
import { FaList } from 'react-icons/fa';
import LinkTo from '@/pages/Mypage/Diary/LinkTo';
import * as S from './index.styles';

const FilterDiary = ({ isThumbnail, handleThumbnail, mood, page }) => {
  const showThumbnail = isThumbnail => () => {
    handleThumbnail(isThumbnail);
  };

  return (
    <S.Container>
      <section>
        <LinkTo mood={MOOD.BEST} page={page}>
          <S.Button
            type="button"
            className={mood === MOOD.BEST ? 'selected' : ''}
          >
            최상😁
          </S.Button>
        </LinkTo>
        <LinkTo mood={MOOD.GOOD} page={page}>
          <S.Button
            type="button"
            className={mood === MOOD.GOOD ? 'selected' : ''}
          >
            상😊
          </S.Button>
        </LinkTo>
        <LinkTo mood={MOOD.NORMAL} page={page}>
          <S.Button
            type="button"
            className={mood === MOOD.NORMAL ? 'selected' : ''}
          >
            중🙂
          </S.Button>
        </LinkTo>
        <LinkTo mood={MOOD.BAD} page={page}>
          <S.Button
            type="button"
            className={mood === MOOD.BAD ? 'selected' : ''}
          >
            하😑
          </S.Button>
        </LinkTo>
        <LinkTo mood={MOOD.WORST} page={page}>
          <S.Button
            type="button"
            className={mood === MOOD.WORST ? 'selected' : ''}
          >
            최하😩
          </S.Button>
        </LinkTo>
      </section>
      <S.WrapperDisplay>
        <button
          type="button"
          className={isThumbnail ? 'selected' : ''}
          onClick={showThumbnail(true)}
        >
          <IoGrid />
        </button>
        <button
          type="button"
          className={isThumbnail ? '' : 'selected'}
          onClick={showThumbnail(false)}
        >
          <FaList />
        </button>
      </S.WrapperDisplay>
    </S.Container>
  );
};

export default FilterDiary;
