import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

import fontStyle from './font';

const globalStyle = css`
  ${emotionReset}
  ${fontStyle}

  * {
    font-family: 'IBMPlexSansKR-Regular';
  }

  a {
    text-decoration: none;
  }

  input {
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
