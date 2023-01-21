import Axios from 'axios';

import { accessTokenProvider } from '@/utils/token';

const baseURL = 'https://3ad6dc28-ff1e-4eab-9772-5ef99cccdd64.mock.pstmn.io';

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
