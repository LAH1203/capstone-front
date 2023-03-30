const BROWSER_PATH = {
  BASE: '/',
  LANDING: '/landing',
  SIGNUP: '/signup',
  OAUTH: '/oauth',
};

const API_PATH = {
  LOGIN: '/login',
  SIGNUP: '/signup',
};

const KAKAO_REDIRECT_URI = `${window.location.origin}${BROWSER_PATH.OAUTH}`;

export { BROWSER_PATH, API_PATH, KAKAO_REDIRECT_URI };
