import { axios, axiosWithAccessToken } from '@/apis/axios';
import { API_PATH } from '@/constants/path';

const requestUploadImg = formData => {
  return axios.post(API_PATH.IMAGE, formData);
};

const requestDiaryByMood = params => {
  return axiosWithAccessToken
    .get(
      `${API_PATH.DIARY_BY_MOOD}?mood=${params.mood}&page=${params.page}&size=${params.size}`,
    )
    .then(response => response.data);
};

const requestDiaryNumByMood = () => {
  return axiosWithAccessToken
    .get(`${API_PATH.DIARY_NUM_BY_MOOD}`)
    .then(response => response.data);
};

export { requestUploadImg, requestDiaryByMood, requestDiaryNumByMood };
