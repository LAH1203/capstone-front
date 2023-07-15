const BROWSER_PATH = {
  BASE: '/',
  LANDING: '/landing',
  SIGNUP: '/signup',
  OAUTH: '/oauth',
  EDIT: '/edit',
  MYPAGE: {
    BASE: '/me',
    DIARY: 'diary',
  },
  CALENDAR: '/calendar',
  DETAIL: '/detail',
};

const API_PATH = {
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',
  REISSUE: '/auth/reissue',
  LOGOUT: '/auth/logout',
  UPDATE_EMAIL: '/auth/update/email',
  UPDATE_NICKNAME: '/auth/update/nickname',
  WITHDRAWAL: '/auth/withdrawal',
  DIARY: '/diary',
  DIARY_BY_MOOD: '/mood',
  DIARY_COUNT_BY_MOOD: '/mood/count',
  IMAGE: '/upload',
  CALENDAR: '/calendar',
};

const KAKAO_REDIRECT_URI = `${window.location.origin}${BROWSER_PATH.OAUTH}`;

export { BROWSER_PATH, API_PATH, KAKAO_REDIRECT_URI };
