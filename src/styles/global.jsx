import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

import fontStyle from './font';
import theme from './theme';

const globalStyle = css`
  ${emotionReset}
  ${fontStyle}

  * {
    font-family: 'IBMPlexSansKR-Regular';
  }

  a {
    color: inherit;

    text-decoration: none;
  }

  input {
    background: ${theme.colors.INPUT_BACKGROUND};

    border: 1px solid ${theme.colors.GREEN_500};
    border-radius: 4px;
    padding: 0.4rem;

    outline: none;
  }

  button {
    border: none;

    cursor: pointer;
  }
`;

const GlobalStyle = () => {
  return <Global styles={globalStyle} />;
};

export default GlobalStyle;
