import { setupWorker } from 'msw';

import authHandlers from './handlers/auth';
import diaryHandlers from './handlers/diary';

const worker = setupWorker(...authHandlers, ...diaryHandlers);

export { worker };
