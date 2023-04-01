const CLIENT_MESSAGE = {
  GUIDE: {
    NEW_USER: '새로운 사용자입니다. 회원가입을 진행해주세요.',
    SUCCESS_LOGIN: '로그인에 성공하였습니다.',
    SUCCESS_SIGNUP: '회원가입에 성공하였습니다. 자동 로그인합니다.',
    CONFIRM_LOGOUT: '로그아웃하시겠습니까?',
    SUCCESS_LOGOUT: '로그아웃했습니다.',
  },
  ERROR: {
    EMPTY_ACCESS_TOKEN: '로그인 정보가 유효하지 않습니다. 다시 로그인해주세요.',
  },
};

const SERVER_ERROR_MESSAGE = {
  AUTH_001: '카카오 서버 에러가 발생하였습니다.',
  AUTH_002: '이미 가입된 이메일입니다.',
  AUTH_003: '이미 가입된 닉네임입니다.',
  AUTH_004: '잘못된 형식의 이메일입니다.',
  AUTH_005: '잘못된 형식의 닉네임입니다.',
  AUTH_006: '이미 가입한 사용자입니다.',
  AUTH_007: '카카오 로그인 정보가 만료되었습니다. 다시 로그인해주세요.',
  AUTH_008: '액세스 토큰 만료',
  AUTH_009: '유효하지 않은 사용자입니다. 다시 로그인해주세요.',
  UNHANDLED: '알 수 없는 서버 에러가 발생하였습니다.',
};

export { CLIENT_MESSAGE, SERVER_ERROR_MESSAGE };
