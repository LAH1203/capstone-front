import styled from '@emotion/styled';
import ReactContentEditable from 'react-contenteditable';

const ContentEditable = styled(ReactContentEditable)`
  width: 93%;
  height: fit-content;

  word-break: break-all;
  outline: none;
  font-size: 1rem;
  line-height: 1.7rem;

  cursor: text;

  &:empty:before {
    content: attr(placeholder);
    opacity: 0.3;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 85%;
  }

  &.left {
    text-align: left;
  }
  &.center {
    text-align: center;
  }
  &.right {
    text-align: right;
  }

  &.h1 {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2.3rem;
  }
  &.h2 {
    font-size: 1.45rem;
    font-weight: 700;
    line-height: 2.15rem;
  }
  &.h3 {
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 2rem;
  }
  &.h4 {
    font-size: 1.15rem;
    font-weight: 700;
    line-height: 1.85rem;
  }
  b {
    font-weight: 700;
  }
  i {
    font-style: italic;
  }
  pre {
    width: 100%;
    border-radius: 8px;
    padding: 1rem;
    box-sizing: border-box;

    background: ${({ theme: { colors } }) => colors.GREEN_100};
  }
`;

export { ContentEditable };
