import { axios } from '@/apis/axios';
import { API_PATH } from '@/constants/path';

const requestUploadImg = formData => {
  return axios.post(API_PATH.IMAGE, formData);
};

export { requestUploadImg };
