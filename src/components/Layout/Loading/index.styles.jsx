import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  ${({ theme: { breakpoints } }) => css`
    @media screen and (min-width: ${breakpoints.md + 1}px) {
      width: 10%;
    }

    @media screen and (min-width: ${breakpoints.sm +
      1}px) and (max-width: ${breakpoints.md}px) {
      width: 20%;
    }

    @media screen and (max-width: ${breakpoints.sm}px) {
      width: 30%;
    }
  `}
`;

export { Container, Wrapper };
