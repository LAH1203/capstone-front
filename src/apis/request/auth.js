import { axios } from '@/apis/axios';
import { API_PATH } from '@/constants/path';

const requestLogin = code => {
  return axios.post(API_PATH.LOGIN, { code }).then(response => response.data);
};

export { requestLogin };
