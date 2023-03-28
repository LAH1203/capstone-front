import styled from '@emotion/styled';

const Switch = styled.label`
  display: block;
  position: relative;

  width: 3rem;
  height: 1.3rem;

  border: 1px solid ${({ theme: { colors } }) => colors.GRAY_700};
  border-radius: 30px;

  transition: background-color 0.2s ease-in;

  cursor: pointer;

  ${({ theme: { colors } }) => `
    background: ${colors.WHITE_100};

    &.checked {
      background: ${colors.RED_ORANGE_500};

      border: 1px solid ${colors.RED_ORANGE_500};
    }
  `}
`;

const Button = styled.span`
  position: absolute;
  top: 50%;
  left: 3px;
  transform: translateY(-50%);

  width: 1rem;
  height: 1rem;

  border-radius: 50%;

  background: ${({ theme: { colors } }) => colors.GRAY_700};

  transition: all 0.2s ease-in;

  &.checked {
    left: calc(100% - 1rem - 3px);
    background: #fff;
  }
`;

export { Switch, Button };
