import { axios } from '@/apis/axios';
import { API_PATH } from '@/constants/path';

const requestLogin = code => {
  return axios.post(API_PATH.LOGIN, { code }).then(response => response.data);
};

const requestSignup = userData => {
  return axios
    .post(API_PATH.SIGNUP, userData)
    .then(response => response.data.accessToken);
};

export { requestLogin, requestSignup };
