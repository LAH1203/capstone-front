const BROWSER_PATH = {
  BASE: '/',
  LANDING: '/landing',
  SIGNUP: '/signup',
  OAUTH: '/oauth',
  EDIT: '/edit',
};

const API_PATH = {
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',
  REISSUE: '/auth/reissue',
  LOGOUT: '/auth/logout',
};

const KAKAO_REDIRECT_URI = `${window.location.origin}${BROWSER_PATH.OAUTH}`;

export { BROWSER_PATH, API_PATH, KAKAO_REDIRECT_URI };
