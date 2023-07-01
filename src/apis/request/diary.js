import { axios, axiosWithAccessToken } from '@/apis/axios';
import { API_PATH } from '@/constants/path';

const requestUploadImg = formData => {
  return axios.post(API_PATH.IMAGE, formData);
};

const requestUploadDiary = diary => {
  return axios.post(API_PATH.DIARY, diary);
};

const requestDiaryByMood = params => {
  return axiosWithAccessToken
    .get(
      `${API_PATH.DIARY_BY_MOOD}?mood=${params.mood}&page=${params.page}&size=${params.size}`,
    )
    .then(response => response.data);
};

const requestDiaryCountByMood = () => {
  return axiosWithAccessToken
    .get(`${API_PATH.DIARY_COUNT_BY_MOOD}`)
    .then(response => response.data);
};

export {
  requestUploadImg,
  requestUploadDiary,
  requestDiaryByMood,
  requestDiaryCountByMood,
};
