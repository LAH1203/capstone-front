import { SERVER_ERROR_MESSAGE } from '@/constants/message';

const useError = () => {
  const handleError = code => {
    // TODO: 액세스 토큰 만료 시 리프레시 토큰으로 새로운 액세스 토큰 요청

    if (code in SERVER_ERROR_MESSAGE) {
      return SERVER_ERROR_MESSAGE[code];
    }

    return SERVER_ERROR_MESSAGE.UNHANDLED;
  };

  return handleError;
};

export default useError;
