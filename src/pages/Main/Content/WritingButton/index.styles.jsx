import styled from '@emotion/styled';

const Button = styled.button`
  background-color: ${({ theme: { colors } }) => colors.GREEN_300};
  color: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};
  font-size: 1.2rem;
  padding: 0.5rem;

  border: 3px solid ${({ theme: { colors } }) => colors.GREEN_400};
  border-radius: 5px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    background-color: transparent;
    color: ${({ theme: { colors } }) => colors.GREEN_700};
    font-size: 1rem;
    padding: 0;

    border: none;
    border-radius: 0;

    position: absolute;
    top: 4rem;
    margin-left: 1rem;
    font-weight: bold;
  }
`;

export { Button };
