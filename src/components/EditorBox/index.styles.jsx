import styled from '@emotion/styled';

const Container = styled.div`
  background: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};

  border: 0.5px solid ${({ theme: { colors } }) => colors.GREEN_500};
  border-radius: 10px;

  width: 100%;
  min-height: 40rem;
`;

const Blocks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.725rem;

  height: 40rem;
  overflow-y: scroll;

  margin: 1rem 1rem 1rem 0.725rem;

  &.basic {
    font-family: 'IBMPlexSansKR';
  }
  &.neo {
    font-family: 'NanumSquareNeo';
  }
  &.namsan {
    font-family: 'SeoulNamsan';
  }
  &.maru {
    font-family: 'MaruBuri';
  }
  &.hyemin {
    font-family: 'IMHyemin';
  }
  &.diary {
    font-family: 'Diary';
  }
  &.zziba {
    font-family: 'UhBeeZZIBA';
  }
`;

export { Container, Blocks };
