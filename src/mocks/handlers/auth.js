import { rest } from 'msw';

import { API_PATH } from '@/constants/path';

const authHandlers = [
  rest.post(API_PATH.LOGIN, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        new: true,
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkluQm9uZyBTb25nIiwiaWF0IjoxNTE2MjM5MDIyfQ.XikBQw8OOU87xoWsYVTJjx6Vpb114WW4FfBoWqqVYHU',
      }),
    );
  }),
];

export default authHandlers;
