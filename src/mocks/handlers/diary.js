import { rest } from 'msw';

import { baseURL } from '@/apis/axios';
import { API_PATH } from '@/constants/path';

const images = [
  'https://github.com/2023-Capstone/capstone-front/assets/57928612/b1c6a578-9216-492b-b05e-892f4573ae88',
  'https://github.com/2023-Capstone/capstone-front/assets/57928612/709c6d69-2fcc-4a34-98fc-f606d33963fb',
  'https://github.com/2023-Capstone/capstone-front/assets/57928612/1223cd92-13cc-4e45-aab3-cd5e2cf389f9',
  'https://github.com/2023-Capstone/capstone-front/assets/57928612/725d0ca3-c075-4b60-afbb-e4c372047524',
  'https://github.com/2023-Capstone/capstone-front/assets/57928612/444bd3ce-b30b-4c9b-bdfa-3eead9b174d7',
];

const diaryCount = {
  best: 299,
  good: 30,
  normal: 19,
  bad: 102,
  worst: 5,
};

const getLastPageCount = count => {
  return count % 10 > 0 ? count % 10 : 10;
};

const diaryHandlers = [
  rest.post(`${baseURL}${API_PATH.IMAGE}`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.set('location', images[Math.floor(Math.random() * images.length)]),
    );
  }),

  rest.post(`${baseURL}${API_PATH.DIARY}`, (req, res, ctx) => {
    const diary = req.json();
    return res(ctx.status(201), ctx.set('id', 1), ctx.json(diary));
  }),

  rest.get(`${baseURL}${API_PATH.DIARY_BY_MOOD}`, (req, res, ctx) => {
    const mood = req.url.searchParams.get('mood');
    const page = req.url.searchParams.get('page');
    return res(
      ctx.status(200),
      ctx.json(
        Array(
          Math.ceil(diaryCount[mood] / 10) === Number(page) + 1
            ? getLastPageCount(diaryCount[mood])
            : 10,
        )
          .fill()
          .map((_, idx) => ({
            id: idx,
            title: `${idx + 1}. 기분: ${mood}, 현 페이지 인덱스: ${page}`,
            createAt: '2023.04.10',
            thumbnail:
              'https://img.freepik.com/free-vector/realistic-galaxy-background_52683-12122.jpg?w=996&t=st=1685182864~exp=1685183464~hmac=8160b98907f8e6720f417f467574e988f56c737085b90ce65ebdf46ef808fba2',
          })),
      ),
    );
  }),
  
  rest.get(`${baseURL}${API_PATH.DIARY_COUNT_BY_MOOD}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(diaryCount));
  }),
];

export default diaryHandlers;
