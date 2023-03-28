import styled from '@emotion/styled';

const Button = styled.button`
  border-radius: 4px;

  padding: 0.4rem 1rem;

  transition: background-color 0.3s;

  width: ${({ size }) => {
    switch (size) {
      case 'regular':
        return '50%';
      case 'wide':
        return '90%';
      default:
        return 'fit-content';
    }
  }};

  ${({ theme: { colors }, reverse }) =>
    reverse
      ? `
          background: none;
          color: ${colors.RED_ORANGE_500};

          border: 1px solid ${colors.RED_ORANGE_500};

          &:hover {
            background: ${colors.RED_ORANGE_100};
          }
        `
      : `
          background: ${colors.RED_ORANGE_500};
          color: ${colors.WHITE_100};

          &:hover {
            background: ${colors.RED_ORANGE_600};
          }
        `};
`;

export { Button };
