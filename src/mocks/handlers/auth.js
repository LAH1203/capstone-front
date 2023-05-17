import { rest } from 'msw';

import { baseURL } from '@/apis/axios';
import { API_PATH } from '@/constants/path';

const authHandlers = [
  rest.post(`${baseURL}${API_PATH.LOGIN}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        new: true,
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkluQm9uZyBTb25nIiwiaWF0IjoxNTE2MjM5MDIyfQ.XikBQw8OOU87xoWsYVTJjx6Vpb114WW4FfBoWqqVYHU',
      }),
    );
  }),
  rest.post(`${baseURL}${API_PATH.SIGNUP}`, (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkluQm9uZyBTb25nIiwiaWF0IjoxNTE2MjM5MDIyfQ.XikBQw8OOU87xoWsYVTJjx6Vpb114WW4FfBoWqqVYHU',
        refreshToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkluQm9uZyBTb25nIiwiaWF0IjoxNTE2MjM5MDIyfQ.XikBQw8OOU87xoWsYVTJjx6Vpb114WW4FfBoWqqVYHU',
      }),
    );
  }),
  rest.post(`${baseURL}${API_PATH.REISSUE}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        accessToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkluQm9uZyBTb25nIiwiaWF0IjoxNTE2MjM5MDIyfQ.XikBQw8OOU87xoWsYVTJjx6Vpb114WW4FfBoWqqVYHU',
      }),
    );
  }),
  rest.post(`${baseURL}${API_PATH.LOGOUT}`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.patch(`${baseURL}${API_PATH.UPDATE_EMAIL}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        email: 'rewritestar@naver.com',
      }),
    );
  }),
  rest.patch(`${baseURL}${API_PATH.UPDATE_NICKNAME}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        nickname: 'rewritestar',
      }),
    );
  }),
  rest.delete(`${baseURL}${API_PATH.WITHDRAWAL}`, (req, res, ctx) => {
    return res(ctx.status(204));
  }),
];

export default authHandlers;
