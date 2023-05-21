import { atom } from 'jotai';

import { INITIAL_BLOCK } from '@/constants/block';

const blocksAtom = atom([{ ...INITIAL_BLOCK, id: Date.now() }]);

export { blocksAtom };
