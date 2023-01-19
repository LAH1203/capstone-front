import { setupWorker } from 'msw';

import authHandlers from './handlers/auth';

const worker = setupWorker(...authHandlers);

export { worker };
