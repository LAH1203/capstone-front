import { axios, axiosWithRefreshToken } from '@/apis/axios';
import { API_PATH } from '@/constants/path';

const requestLogin = code => {
  return axios.post(API_PATH.LOGIN, { code }).then(response => response.data);
};

const requestSignup = userData => {
  return axios.post(API_PATH.SIGNUP, userData).then(response => response.data);
};

const requestReissueAccessToken = () => {
  return axiosWithRefreshToken
    .post(API_PATH.REISSUE)
    .then(response => response.data.accessToken);
};

const requestLogout = () => {
  return axiosWithRefreshToken.post(API_PATH.LOGOUT);
};

export {
  requestLogin,
  requestSignup,
  requestReissueAccessToken,
  requestLogout,
};
