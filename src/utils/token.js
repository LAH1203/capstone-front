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

export { accessTokenProvider, kakaoAccessTokenProvider };
