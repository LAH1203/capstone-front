import { ERROR_MESSAGE } from '@/constants/message';

const useError = () => {
  const handleError = code => {
    if (code in ERROR_MESSAGE) {
      return ERROR_MESSAGE[code];
    }

    return ERROR_MESSAGE.UNHANDLED;
  };

  return handleError;
};

export default useError;
