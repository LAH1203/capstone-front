import * as S from './index.styles';

const ToggleButton = ({ checked, toggleChecked }) => {
  return (
    <S.Switch onClick={toggleChecked} className={checked ? 'checked' : ''}>
      <S.Button className={checked ? 'checked' : ''} />
    </S.Switch>
  );
};

export default ToggleButton;
