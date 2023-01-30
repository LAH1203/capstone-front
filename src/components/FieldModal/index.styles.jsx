import styled from '@emotion/styled';

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  gap: 1rem;

  overflow-y: scroll;

  width: 100%;
  height: 30vh;
`;

const Button = styled.button`
  width: 100%;
  height: fit-content;
  min-height: 3rem;

  border: none;
  border-radius: 4px;

  transition: background-color 0.5s;

  ${({ theme: { colors } }) => `
    background: ${colors.GRAY_100};

    &:hover {
      background: ${colors.GRAY_250};
    }
  `}
`;

export { Box, Button };
