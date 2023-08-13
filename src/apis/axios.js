import Axios from 'axios';

import { accessTokenProvider, refreshTokenProvider } from '@/utils/token';

const baseURL = process.env.SERVER_URL;

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
