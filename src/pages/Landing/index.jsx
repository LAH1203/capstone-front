import * as S from './index.styles';

import { baseURL } from '@/apis/axios';
import kakaoLoginImage from '@/assets/kakao-login.png';
import { BROWSER_PATH } from '@/constants/path';
import { getKakaoAuthUri } from '@/utils/kakao';

const redirectUri = `${baseURL}${BROWSER_PATH.OAUTH}`;

const Landing = () => {
  return (
    <S.Container>
      <S.DescriptionContainer>
        <S.Title>
          <p>
            <span>이제</span>와 함께
          </p>
          <p>이력서를 제작해봐요 :)</p>
        </S.Title>
        <S.Description>
          <p>
            이제는 <span>이력서 제작 플랫폼</span>입니다.
          </p>
          <p>간단한 템플릿 제작부터 원하는 디자인으로 커스텀한 이력서까지</p>
          <p>이제에서의 이력서 제작을 시작해보세요.</p>
        </S.Description>
      </S.DescriptionContainer>
      <a href={getKakaoAuthUri(redirectUri)}>
        <S.KakaoLoginImg src={kakaoLoginImage} alt="카카오 로그인 버튼" />
      </a>
    </S.Container>
  );
};

export default Landing;
