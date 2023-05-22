import { useEffect, useState } from 'react';

import { useQuery } from 'react-query';

import { getWeatherData } from '@/apis/request/weather';
import useMount from '@/hooks/useMount';

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

  useMount(() => {
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
