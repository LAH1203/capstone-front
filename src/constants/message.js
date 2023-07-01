import { RULE } from './rule';

const CLIENT_MESSAGE = {
  GUIDE: {
    NEW_USER: '새로운 사용자입니다. 회원가입을 진행해주세요.',
    SUCCESS_LOGIN: '로그인에 성공하였습니다.',
    SUCCESS_SIGNUP: '회원가입에 성공하였습니다. 자동 로그인합니다.',
    CONFIRM_LOGOUT: '로그아웃하시겠습니까?',
    SUCCESS_LOGOUT: '로그아웃했습니다.',
    SUCCESS_UPDATE_EMAIL: '이메일 수정에 성공하였습니다.',
    SUCCESS_UPDATE_NICKNAME: '닉네임 수정에 성공하였습니다.',
    SUCCESS_WITHDRAWAL: '회원 탈퇴에 성공하였습니다.',
    SUCCESS_POST_DIARY: '일기 작성이 완료되었습니다.',
    CONFIRM_DELETE_IMAGE: '이미지를 삭제하시겠습니까?',
    CONFIRM_POST_DIARY: '일기를 등록하시겠습니까?',
  },
  ERROR: {
    EMPTY_ACCESS_TOKEN: '로그인 정보가 유효하지 않습니다. 다시 로그인해주세요.',
    EMPTY_HASHTAG: '해시태그 값을 입력해주세요.',
    EMPTY_DIARY: '내용을 입력해주세요.',
    FULL_HASHTAG_LIST: '해시태그는 5개까지만 가능합니다.',
    DUPLICATED_HASHTAG: '이미 존재하는 해시태그입니다.',
    NOT_INCLUDE_HASHTAG: '해당 해시태그 값이 존재하지 않습니다.',
    FAIL_GET_LOCATION: '위치 정보를 가져올 수 없습니다.',
    FAIL_GET_WEATHER: '현재 날씨를 가져올 수 없습니다.',
    FAIL_UPDATE_EMAIL: '이메일 수정에 실패하였습니다.',
    FAIL_UPDATE_NICKNAME: '닉네임 수정에 실패하였습니다.',
    INVALID_INPUT: '입력값을 확인해주세요.',
    INVALID_IMAGE_TYPE: '이미지 파일의 형식은 png, jpg, jpeg만 가능합니다.',
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
  AUTH_008: '로그인 정보가 만료되었습니다. 다시 로그인해주세요.',
  AUTH_009: '유효하지 않은 사용자입니다. 다시 로그인해주세요.',
  AUTH_010: '존재하지 않는 사용자입니다.',
  IMAGE_001: '이미지 서버에 에러가 발생하였습니다.',
  IMAGE_002: '이미지 파일의 형식은 png, jpg, jpeg만 가능합니다.',
  IMAGE_003: '이미지 파일의 크기는 10MB 이하여야 합니다.',
  DIARY_001: `해시태그는 ${RULE.HASHTAG_LIST.MAX}개까지 가능합니다.`,
  DIARY_002: '정해진 기분이 아닙니다.',
  DIARY_003: '정해진 날씨가 아닙니다.',
  DIARY_004: '블록은 텍스트, 제목, 이미지만 가능합니다.',
  DIARY_005: '정렬은 왼쪽, 가운데, 오른쪽만 가능합니다.',
  DIARY_006: '정해진 폰트가 아닙니다.',
  DIARY_007: '제목 레벨은 1~4까지만 가능합니다.',
  DIARY_008: '올바르지 않은 이미지 링크입니다.',
  DIARY_012: '존재하지 않는 일기 페이지입니다.',
  UNHANDLED: '알 수 없는 서버 에러가 발생하였습니다.',
};

export { CLIENT_MESSAGE, SERVER_ERROR_MESSAGE };
