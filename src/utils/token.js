const accessTokenProvider = {
  get: () => {
    return localStorage.getItem('accessToken') ?? '';
  },
  set: accessToken => {
    localStorage.setItem('accessToken', accessToken);
  },
  remove: () => {
    localStorage.removeItem('accessToken');
  },
};

const refreshTokenProvider = {
  get: () => {
    return localStorage.getItem('refreshToken') ?? '';
  },
  set: refreshToken => {
    localStorage.setItem('refreshToken', refreshToken);
  },
  remove: () => {
    localStorage.removeItem('refreshToken');
  },
};

const kakaoAccessTokenProvider = {
  get: () => {
    return localStorage.getItem('kakaoAccessToken') ?? '';
  },
  set: accessToken => {
    localStorage.setItem('kakaoAccessToken', accessToken);
  },
  remove: () => {
    localStorage.removeItem('kakaoAccessToken');
  },
};

export { accessTokenProvider, refreshTokenProvider, kakaoAccessTokenProvider };
