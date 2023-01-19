import { Link } from 'react-router-dom';

import * as S from './index.styles';

import { BROWSER_PATH } from '@/constants/path';

const Main = () => {
  return (
    <S.Container>
      <S.AuthButtonContainer>
        <Link to={BROWSER_PATH.SIGNUP}>
          <S.SignupButton type="button">회원가입</S.SignupButton>
        </Link>
        <Link to={BROWSER_PATH.LOGIN}>
          <S.LoginButton type="button">로그인</S.LoginButton>
        </Link>
      </S.AuthButtonContainer>
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
    </S.Container>
  );
};

export default Main;
