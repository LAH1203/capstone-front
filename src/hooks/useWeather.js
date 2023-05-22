import { useEffect, useState } from 'react';

import { useQuery } from 'react-query';

import { getWeatherData } from '@/apis/request/weather';
import useEffectWithoutFirstRender from '@/hooks/useEffectWithoutFirstRender';

const useWeather = () => {
  const [position, setPosition] = useState({
    lat: 0,
    lon: 0,
  });
  const {
    data: weather,
    isError,
    isLoading,
    refetch,
  } = useQuery('weather', () => getWeatherData(position), {
    enabled: false,
  });

  useEffectWithoutFirstRender(() => {
    refetch();
  }, [position]);

  useEffect(() => {
    const successGetLocation = async pos => {
      setPosition({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      });
    };

    const failGetLocation = () => {
      setPosition(null);
    };

    navigator.geolocation.getCurrentPosition(
      successGetLocation,
      failGetLocation,
    );
  }, []);

  return { weather, isLoading, isError };
};

export default useWeather;
