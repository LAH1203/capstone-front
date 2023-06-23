import * as S from './index.style';

const Item = ({ item, isThumbnail }) => {
  return (
    <S.Container>
      {!isThumbnail ? (
        <S.WrapperList>
          <S.Title>{item.title}</S.Title>
          <S.Date>{item.createAt}</S.Date>
        </S.WrapperList>
      ) : (
        <S.WrapperGrid>
          <S.WrapperImg>
            <img src={item.thumbnail} alt="썸네일" />
          </S.WrapperImg>
          <S.Title grid={true}>{item.title}</S.Title>
          <S.Date>{item.createAt}</S.Date>
        </S.WrapperGrid>
      )}
    </S.Container>
  );
};

export default Item;
