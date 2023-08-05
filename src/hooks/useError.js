import useUser from './useUser';

import { SERVER_ERROR_MESSAGE } from '@/constants/message';

const useError = () => {
  const { reissueAccessToken } = useUser();

  const handleError = code => {
    if (code === 'AUTH_008') {
      reissueAccessToken();
    }

    if (code in SERVER_ERROR_MESSAGE) {
      return SERVER_ERROR_MESSAGE[code];
    }

    return SERVER_ERROR_MESSAGE.UNHANDLED;
  };

  return handleError;
};

export default useError;
