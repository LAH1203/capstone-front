import { atom } from 'jotai';

import { INITIAL_TEXT_BLOCK } from '@/constants/block';

const blocksAtom = atom([{ ...INITIAL_TEXT_BLOCK, id: Date.now() }]);

const focusIdAtom = atom(Date.now());

export { blocksAtom, focusIdAtom };
