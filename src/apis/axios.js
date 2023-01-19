import Axios from 'axios';

import { accessTokenProvider } from '@/utils/token';

const baseURL = 'http://localhost:3000';

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

  return config;
});

export { baseURL, axios, axiosWithAccessToken };
