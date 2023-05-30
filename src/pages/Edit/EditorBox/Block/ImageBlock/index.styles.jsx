import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  &.left {
    justify-content: left;
  }
  &.center {
    justify-content: center;
  }
  &.right {
    justify-content: right;
  }
`;

const Image = styled.img`
  width: 40%;

  ${({ theme: { breakpoints } }) => css`
    @media screen and (min-width: ${breakpoints.md +
      1}px) and (max-width: ${breakpoints.lg}px) {
      width: 60%;
    }

    @media screen and (min-width: ${breakpoints.sm +
      1}px) and (max-width: ${breakpoints.md}px) {
      width: 70%;
    }

    @media screen and (max-width: ${breakpoints.sm}px) {
      width: 80%;
    }
  `}
`;

export { Wrapper, Image };
