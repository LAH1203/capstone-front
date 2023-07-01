import useDisplayLayout from '@/hooks/useDisplayLayout';
import * as S from './index.style';

const Item = ({ item }) => {
  const [display] = useDisplayLayout();
  return (
    <S.Container>
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
