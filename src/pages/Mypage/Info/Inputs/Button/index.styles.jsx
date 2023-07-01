import styled from '@emotion/styled';

const Button = styled.button`
  width: 6rem;
  padding: 0.7rem 1rem;
  border-radius: 5px;

  background-color: ${({ theme: { colors } }) => colors.GREEN_500};
  color: ${({ theme: { colors } }) => colors.GREEN_50};

  &:hover {
    filter: brightness(1.2);
    transition: all 0.5s ease-out;
  }
`;

export { Button };
