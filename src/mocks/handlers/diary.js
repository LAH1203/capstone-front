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

const diaryCountByMood = {
  best: 299,
  good: 0,
  normal: 19,
  bad: 102,
  worst: 5,
};

const diaryCount = {
  year: 123,
  month: 24,
};

const randomDiary = {
  title: '롯데월드 갔다 옴...',
  mood: 'best',
  date: '2023-03-15',
  weather: null,
  content:
    '롯데월드\n갔는데 사람이 너무 많았다.  롯데월드 갔는데 사람이 너무 많았다.  롯데월드 갔는데 사람이 너무 많았다.  롯데월드 갔는데 사람이 너무 많았다.  롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다.롯데월드 갔는데 사람이 너무 많았다.  롯데월드 갔는데 사람이 너무 많았다.  롯데월드 갔는데 사람이 너무 많았다.  롯데월드 갔는데 사람이 너무 많았다.  롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다.롯데월드 갔는데 사람이 너무 많았다.  롯데월드 갔는데 사람이 너무 많았다.  롯데월드 갔는데 사람이 너무 많았다.  롯데월드 갔는데 사람이 너무 많았다.  롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다. 롯데월드 갔는데 사람이 너무 많았다.',
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
    return res(ctx.status(201), ctx.json({ id: 1 }));
  }),

  rest.patch(`${baseURL}${API_PATH.DIARY}/:id`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ id: 1 }));
  }),

  rest.get(`${baseURL}${API_PATH.DIARY}/:id`, (req, res, ctx) => {
    const diary = {
      title: '글 제목',
      date: '2023-08-25',
      weather: 'rain',
      hashtag: [
        '해시태그1',
        '해시태그2',
        '해시태그3',
        '해시태그4',
        '해시태그5',
      ],
      mood: 'best',
      font: 'diary',
      blocks: [
        {
          id: 1,
          type: 'heading',
          data: {
            text: '제목1',
            level: 1,
            align: 'left',
          },
        },
        {
          id: 2,
          type: 'heading',
          data: {
            text: '제목2',
            level: 2,
            align: 'left',
          },
        },
        {
          id: 3,
          type: 'heading',
          data: {
            text: '제목3',
            level: 3,
            align: 'left',
          },
        },
        {
          id: 4,
          type: 'heading',
          data: {
            text: '제목4',
            level: 4,
            align: 'left',
          },
        },
        {
          id: 5,
          type: 'img',
          data: {
            link: 'https://ssl.pstatic.net/melona/libs/1457/1457089/f5b27008d5369a1a2918_20230705172819547.jpg',
            align: 'center',
          },
        },
        {
          id: 6,
          type: 'text',
          data: {
            text: '왼쪽 텍스트 블록',
            align: 'left',
          },
        },
        {
          id: 7,
          type: 'text',
          data: {
            text: '가운데 텍스트 블록',
            align: 'center',
          },
        },
        {
          id: 8,
          type: 'text',
          data: {
            text: '오른쪽 텍스트 블록',
            align: 'right',
          },
        },
        {
          id: 9,
          type: 'text',
          data: {
            text: '<pre><code>내용이 기이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이 이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이이 이이이이이이인 블록<pre><code>',
            align: 'left',
          },
        },
      ],
    };
    return res(ctx.status(200), ctx.json(diary));
  }),

  rest.get(`${baseURL}${API_PATH.DIARY_BY_MOOD}`, (req, res, ctx) => {
    const mood = req.url.searchParams.get('mood');
    const page = req.url.searchParams.get('page');
    return res(
      ctx.status(200),
      ctx.json(
        Array(
          Math.ceil(diaryCountByMood[mood] / 10) === Number(page) + 1
            ? getLastPageCount(diaryCountByMood[mood])
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
    return res(ctx.status(200), ctx.json(diaryCountByMood));
  }),
  rest.get(`${baseURL}${API_PATH.DIARY_RANDOM}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(randomDiary));
  }),
  rest.get(`${baseURL}${API_PATH.DIARY_COUNT}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(diaryCount));
  }),

  rest.get(`${baseURL}${API_PATH.CALENDAR}`, (req, res, ctx) => {
    const year = req.url.searchParams.get('year');
    const month = req.url.searchParams.get('month');
    const data = [
      {
        id: '1',
        date: `${year}-${month}-01`,
        mood: 'best',
        desc: '오늘은 공부하려다가 진격거 정주행 해버림 ㅋㅋ',
      },
      {
        id: '2',
        date: `${year}-${month}-25`,
        mood: 'good',
        desc: '아 코테 내일인데 어떡하냐 ㅋㅋ',
      },
      {
        id: '3',
        date: `${year}-${month}-12`,
        mood: 'bad',
        desc: '나는 진짜 뭐해먹고 살지..?',
      },
    ];
    return res(ctx.status(200), ctx.json(data));
  }),

  rest.get(`${baseURL}${API_PATH.SEARCH}`, (req, res, ctx) => {
    const text = req.url.searchParams.get('text');
    const pageNumber = Number(req.url.searchParams.get('page'));
    const diaries = [
      {
        diaryId: `${pageNumber}-0`,
        title: '제목1',
        date: '2023-03-12',
        content:
          '첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만',
        hashtag: [
          '해시태그1',
          '해시태그2',
          '해시태그3',
          '해시태그4',
          '해시태그5',
        ],
      },
      {
        diaryId: `${pageNumber}-1`,
        title: '제목2',
        date: '2023-03-12',
        content:
          '첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만',
        hashtag: ['해시태그1', '해시태그2'],
      },
      {
        diaryId: `${pageNumber}-2`,
        title: '제목3',
        date: '2023-03-12',
        content:
          '첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만',
        hashtag: ['해시태그1', '해시태그2'],
      },
      {
        diaryId: `${pageNumber}-3`,
        title: '제목4',
        date: '2023-03-12',
        content:
          '첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만',
        hashtag: ['해시태그1', '해시태그2'],
      },
      {
        diaryId: `${pageNumber}-4`,
        title: '제목5',
        date: '2023-03-12',
        content:
          '첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만',
        hashtag: ['해시태그1', '해시태그2'],
      },
      {
        diaryId: `${pageNumber}-5`,
        title: '제목6',
        date: '2023-03-12',
        content:
          '첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만',
        hashtag: ['해시태그1', '해시태그2'],
      },
      {
        diaryId: `${pageNumber}-6`,
        title: '제목7',
        date: '2023-03-12',
        content:
          '첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만',
        hashtag: ['해시태그1', '해시태그2'],
      },
    ];
    const list =
      text === ''
        ? diaries
        : diaries.filter(
            diary => diary.title.includes(text) || diary.content.includes(text),
          );

    const data = {
      pageNumber,
      isLastPage: list.length <= 0 || pageNumber > 2,
      list,
    };

    return res(ctx.status(200), ctx.json(data));
  }),
];

export default diaryHandlers;
