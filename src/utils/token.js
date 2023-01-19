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

export { accessTokenProvider };
