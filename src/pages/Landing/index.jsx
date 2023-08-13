import * as S from './index.styles';

import kakaoLoginImage from '@/assets/kakao-login.png';
import { KAKAO_REDIRECT_URI } from '@/constants/path';
import { getKakaoAuthUri } from '@/utils/kakao';

const Landing = () => {
  console.log(getKakaoAuthUri(KAKAO_REDIRECT_URI));
  return (
    <S.Container>
      <a href={getKakaoAuthUri(KAKAO_REDIRECT_URI)}>
        <S.KakaoLoginImg src={kakaoLoginImage} alt="카카오 로그인 버튼" />
      </a>
    </S.Container>
  );
};

export default Landing;
