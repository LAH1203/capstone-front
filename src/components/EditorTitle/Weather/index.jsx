import { useEffect } from 'react';

import { ColorRing } from 'react-loader-spinner';

import * as S from './index.styles';

import { CLIENT_MESSAGE } from '@/constants/message';
import useWeather from '@/hooks/useWeather';
import { weatherToIcon } from '@/utils/weather';

const Weather = ({ setWeather }) => {
  const { weather, isLoading, isError } = useWeather();

  useEffect(() => {
    setWeather(weather);
  }, [setWeather, weather]);

  if (isError) {
    throw new Error(CLIENT_MESSAGE.ERROR.FAIL_GET_WEATHER);
  }

  if (isLoading || !weather) {
    return (
      <ColorRing
        visible={true}
        height="1rem"
        width="1rem"
        ariaLabel="blocks-loading"
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    );
  }

  return <>{weather && <S.Container>{weatherToIcon(weather)}</S.Container>}</>;
};
export default Weather;
