import { atom } from 'jotai';

const modalAtom = atom('off');

const snackbarAtom = atom({
  isShowing: false,
  message: '',
});

export { modalAtom, snackbarAtom };
