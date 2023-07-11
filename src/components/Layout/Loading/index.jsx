import Lottie from 'lottie-react';

import * as S from './index.styles';

import loading from '@/assets/lottie/loading.json';

const Loading = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <Lottie animationData={loading} />
      </S.Wrapper>
    </S.Container>
  );
};

export default Loading;
