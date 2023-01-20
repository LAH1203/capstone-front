import * as S from './index.styles';

const Button = ({
  type = 'submit',
  onClick,
  children,
  reverse = false,
  size = 'small',
}) => {
  return (
    <S.Button type={type} onClick={onClick} reverse={reverse} size={size}>
      {children}
    </S.Button>
  );
};

export default Button;
