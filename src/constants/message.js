const GUIDE_MESSAGE = {
  NEW_USER: '새로운 사용자입니다. 회원가입을 진행해주세요 :)',
  SUCCESS_LOGIN: '로그인에 성공하였습니다. 멋진 이력서를 만들어주세요!',
  SUCCESS_SIGNUP: '회원가입에 성공하였습니다. 해당 회원으로 자동 로그인합니다.',
};

const ERROR_MESSAGE = {
  AUTH_001:
    '카카오 로그인 시도 중 에러가 발생하였습니다. 잠시 후 다시 시도해주세요.',
  AUTH_002: '닉네임은 1~20자여야 합니다.',
  AUTH_003: '이미 존재하는 사용자입니다. 다른 이메일로 다시 로그인해주세요.',
  AUTH_004: '유효하지 않은 사용자입니다. 로그인부터 다시 시도해주세요.',
  UNHANDLED:
    '알 수 없는 서버 에러가 발생하였습니다. 잠시 후 다시 시도해주세요.',
};

export { GUIDE_MESSAGE, ERROR_MESSAGE };
