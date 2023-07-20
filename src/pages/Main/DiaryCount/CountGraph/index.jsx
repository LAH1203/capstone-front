import * as S from './index.styles';

const CountGraph = ({ name, value, total }) => {
  return (
    <S.Container>
      <S.WrapperInfo>
        <S.Name>{name}</S.Name>
        <S.Value>
          {value}/{total}
        </S.Value>
      </S.WrapperInfo>
      <S.ContainerGraph>
        <S.WrapperGraph percentage={Math.ceil((value / total) * 100)}>
          <S.Graph />
        </S.WrapperGraph>
      </S.ContainerGraph>
    </S.Container>
  );
};

export default CountGraph;
