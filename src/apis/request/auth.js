import {
  axios,
  axiosWithRefreshToken,
  axiosWithAccessToken,
} from '@/apis/axios';
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

const requestUpdateEmail = userData => {
  return axiosWithAccessToken
    .patch(API_PATH.UPDATE_EMAIL, userData)
    .then(response => response.data);
};

const requestUpdateNickname = userData => {
  return axiosWithAccessToken
    .patch(API_PATH.UPDATE_NICKNAME, userData)
    .then(response => response.data);
};

const requestWithdrawal = () => {
  return axiosWithAccessToken.delete(API_PATH.WITHDRAWAL);
};

const requestInfo = () => {
  return axiosWithAccessToken
    .get(API_PATH.INFO)
    .then(response => response.data);
};

export {
  requestLogin,
  requestSignup,
  requestReissueAccessToken,
  requestLogout,
  requestUpdateEmail,
  requestUpdateNickname,
  requestWithdrawal,
  requestInfo,
};
