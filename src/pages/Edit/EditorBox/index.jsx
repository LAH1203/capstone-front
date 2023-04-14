import * as S from './index.styles';

const EditorBox = () => {
  return (
    <S.Container>
      <S.EditELementBox>
        <p>Sans-serif</p>
        <p>H</p>
        <p>
          <b>B</b>
        </p>
        <p>
          <i>I</i>
        </p>
        <p>
          <ins>U</ins>
        </p>
        <p>
          <strike>S</strike>
        </p>
        <p>{'< >'}</p>
        <p>줄간격</p>
        <p>이미지</p>
      </S.EditELementBox>
      일단 보이기만 이렇게 해놨어용 이쪽은 기능 아예 안 넣었어요
    </S.Container>
  );
};

export default EditorBox;
