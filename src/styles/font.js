import { css } from '@emotion/react';

const { origin } = window.location;

const fontStyle = css`
  @font-face {
    font-family: 'IBMPlexSansKR';
    src: url('${origin}/font/IBMPlexSansKR-Regular.woff2') format('woff2'),
      url('${origin}/font/IBMPlexSansKR-Regular.woff') format('woff'),
      url('${origin}/font/IBMPlexSansKR-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'NanumSquareNeo';
    src: url('${origin}/font/NanumSquareNeo-Variable.woff2') format('woff2'),
      url('${origin}/font/NanumSquareNeo-Variable.woff') format('woff'),
      url('${origin}/font/NanumSquareNeo-Variable.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'SeoulNamsan';
    src: url('${origin}/font/SeoulNamsanM.woff2') format('woff2'),
      url('${origin}/font/SeoulNamsanM.woff') format('woff'),
      url('${origin}/font/SeoulNamsanM.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'MaruBuri';
    src: url('${origin}/font/MaruBuri-Regular.woff2') format('woff2'),
      url('${origin}/font/MaruBuri-Regular.woff') format('woff'),
      url('${origin}/font/MaruBuri-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'IMHyemin';
    src: url('${origin}/font/IM_Hyemin-Regular.woff2') format('woff2'),
      url('${origin}/font/IM_Hyemin-Regular.woff') format('woff'),
      url('${origin}/font/IM_Hyemin-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Diary';
    src: url('${origin}/font/EF_Diary.woff2') format('woff2'),
      url('${origin}/font/EF_Diary.woff') format('woff'),
      url('${origin}/font/EF_Diary.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'UhBeeZZIBA';
    src: url('${origin}/font/UhBeeZZIBA-Regular.woff2') format('woff2'),
      url('${origin}/font/UhBeeZZIBA-Regular.woff') format('woff'),
      url('${origin}/font/UhBeeZZIBA-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`;

export default fontStyle;
