const CLIENT_MESSAGE = {
  GUIDE: {
    NEW_USER: '새로운 사용자입니다. 회원가입을 진행해주세요.',
    SUCCESS_LOGIN: '로그인에 성공하였습니다.',
    SUCCESS_SIGNUP: '회원가입에 성공하였습니다. 자동 로그인합니다.',
    CONFIRM_LOGOUT: '로그아웃하시겠습니까?',
    SUCCESS_LOGOUT: '로그아웃했습니다.',
    SUCCESS_UPDATE_EMAIL: '이메일 수정에 성공하였습니다.',
    SUCCESS_UPDATE_NICKNAME: '닉네임 수정에 성공하였습니다',
    SUCCESS_WITHDRAWAL: '회원 탈퇴에 성공하였습니다.',
  },
  ERROR: {
    EMPTY_ACCESS_TOKEN: '로그인 정보가 유효하지 않습니다. 다시 로그인해주세요.',
    EMPTY_HASHTAG: '해시태그 값을 입력해주세요',
    FULL_HASHTAG_LIST: '해시태그는 5개까지만 가능합니다.',
    DUPLICATED_HASHTAG: '이미 존재하는 해시태그입니다.',
    NOT_INCLUDE_HASHTAG: '해당 해시태그 값이 존재하지 않습니다.',
    FAIL_GET_LOCATION: '위치 정보를 가져올 수 없습니다.',
    FAIL_GET_WEATHER: '현재 날씨를 가져올 수 없습니다.',
    FAIL_UPDATE_EMAIL: '이메일 수정에 실패하였습니다.',
    FAIL_UPDATE_NICKNAME: '닉네임 수정에 실패하였습니다.',
    INVAILD_INPUT: '입력값을 확인해주세요.',
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
  AUTH_010: '존재하지 않는 사용자입니다.',
  UNHANDLED: '알 수 없는 서버 에러가 발생하였습니다.',
};

export { CLIENT_MESSAGE, SERVER_ERROR_MESSAGE };
