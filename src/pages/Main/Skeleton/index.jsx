import * as S from './index.styles';

const Skeleton = () => {
  return (
    <S.Container>
      <S.Header />
      <S.OnlyMobileMenu>
        <div />
        <div />
      </S.OnlyMobileMenu>
      <S.WrapperContent>
        <S.RandomDiary />
        <S.SideBar>
          <div />
          <div />
          <div />
        </S.SideBar>
      </S.WrapperContent>
    </S.Container>
  );
};

export default Skeleton;
