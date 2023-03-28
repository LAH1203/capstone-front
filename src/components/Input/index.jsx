import * as S from './index.styles';

const Input = ({ type, value, onChange, min, step, required }) => {
  return (
    <S.Input
      type={type}
      value={value}
      onChange={onChange}
      min={min}
      step={step}
      required={required}
    />
  );
};

export default Input;
