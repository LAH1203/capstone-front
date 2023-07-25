import * as S from './index.style';

import { BROWSER_PATH } from '@/constants/path';
import useDisplayLayout from '@/hooks/useDisplayLayout';

const Item = ({ item }) => {
  const [display] = useDisplayLayout();
  return (
    <S.Container to={`${BROWSER_PATH.DETAIL}/${item.id}`}>
      {display === 'list' ? (
        <S.WrapperList>
          <S.Title>{item.title}</S.Title>
          <S.Date>{item.createAt}</S.Date>
        </S.WrapperList>
      ) : (
        <S.WrapperGrid>
          <S.WrapperImg>
            <img src={item.thumbnail} alt="썸네일" />
          </S.WrapperImg>
          <S.Title className={display}>{item.title}</S.Title>
          <S.Date>{item.createAt}</S.Date>
        </S.WrapperGrid>
      )}
    </S.Container>
  );
};

export default Item;
