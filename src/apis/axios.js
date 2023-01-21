import Axios from 'axios';

import { accessTokenProvider } from '@/utils/token';

const baseURL = 'https://97405a6b-4168-4347-97f8-ca4732694228.mock.pstmn.io';

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
