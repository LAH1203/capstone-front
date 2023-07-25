import { atom } from 'jotai';

import { accessTokenProvider } from '@/utils/token';

const userAtom = atom({
  isLogin: accessTokenProvider.get() ? true : false,
  info: null,
});

const modalAtom = atom('off');

const snackbarAtom = atom({
  isShowing: false,
  message: '',
});

export { userAtom, modalAtom, snackbarAtom };
