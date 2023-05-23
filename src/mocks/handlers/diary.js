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

const diaryHandlers = [
  rest.post(`${baseURL}${API_PATH.IMAGE}`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.set('location', images[Math.floor(Math.random() * images.length)]),
    );
  }),
];

export default diaryHandlers;
