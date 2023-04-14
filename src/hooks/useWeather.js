import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { getWeatherData } from '@/apis/request/weather';
import { CLIENT_MESSAGE } from '@/constants/message';
import { BROWSER_PATH } from '@/constants/path';

const useWeather = () => {
  const [weather, setWeather] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      successGetLocation,
      failGetLocation,
    );
  }, []);

  const successGetLocation = async position => {
    try {
      const data = await getWeatherData({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
      setWeather(data);
    } catch (e) {
      alert(CLIENT_MESSAGE.ERROR.FAIL_GET_WEATHER);
      navigate(BROWSER_PATH.BASE);
    }
  };
  const failGetLocation = () => {
    alert(CLIENT_MESSAGE.ERROR.FAIL_GET_LOCATION);
    navigate(BROWSER_PATH.BASE);
  };

  return { weather };
};

export default useWeather;
