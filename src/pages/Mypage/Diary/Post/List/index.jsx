import * as S from './index.styles';
import Item from './Item';

import useDisplayLayout from '@/hooks/useDisplayLayout';

const List = ({ list }) => {
  const [display] = useDisplayLayout();

  return (
    <S.Container className={display}>
      {list.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </S.Container>
  );
};

export default List;
