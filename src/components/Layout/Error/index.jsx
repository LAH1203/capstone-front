import Lottie from 'lottie-react';

import * as S from './index.styles';

import error from '@/assets/lottie/error.json';

const Error = () => {
  return (
    <S.Container>
      <Lottie animationData={error} />
      <p>에러가 발생했습니다 :(</p>
      <p>잠시 후 새로고침해주세요.</p>
    </S.Container>
  );
};

export default Error;
