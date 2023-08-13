import Axios from 'axios';

import { accessTokenProvider, refreshTokenProvider } from '@/utils/token';

const baseURL = 'http://43.200.37.79:8080';

const axios = Axios.create({
  baseURL,
});

const axiosWithAccessToken = Axios.create({
  baseURL,
});

axiosWithAccessToken.interceptors.request.use(config => {
  const accessToken = accessTokenProvider.get();

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  // ${accessToken}
  return config;
});

const axiosWithRefreshToken = Axios.create({
  baseURL,
});

axiosWithRefreshToken.interceptors.request.use(config => {
  const refreshToken = refreshTokenProvider.get();

  if (config.headers && refreshToken) {
    config.headers.Authorization = `Bearer ${refreshToken}`;
  }

  return config;
});

export { baseURL, axios, axiosWithAccessToken, axiosWithRefreshToken };
