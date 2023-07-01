import useDisplayLayout from '@/hooks/useDisplayLayout';
import * as S from './index.styles';
import { LIMIT } from '@/constants/diary';

const Skeleton = () => {
  const [display] = useDisplayLayout();
  return (
    <S.Container>
      <S.WrapperFilter>
        <S.FilterMood />
        <S.FilterDisplay />
      </S.WrapperFilter>
      <S.Post className={display}>
        {Array(LIMIT.PAGE)
          .fill()
          .map((_, idx) => (
            <S.Item key={idx} className={display} />
          ))}
      </S.Post>
      <S.Pagination>
        {Array(LIMIT.BUTTON)
          .fill()
          .map((_, idx) => (
            <S.Button key={idx} />
          ))}
      </S.Pagination>
    </S.Container>
  );
};

export default Skeleton;
