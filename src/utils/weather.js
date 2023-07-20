import {
  BsCloudFog2,
  BsCloudHaze,
  BsCloudRainHeavy,
  BsCloudSnow,
} from 'react-icons/bs';
import { CiCloudDrizzle } from 'react-icons/ci';
import {
  MdCloudQueue,
  MdOutlineThunderstorm,
  MdOutlineWbSunny,
} from 'react-icons/md';
import { TbMist } from 'react-icons/tb';

const weatherToIcon = weather => {
  switch (weather.toLowerCase()) {
    case 'clear':
      return <MdOutlineWbSunny />;
    case 'clouds':
      return <MdCloudQueue />;
    case 'drizzle':
      return <CiCloudDrizzle />;
    case 'rain':
      return <BsCloudRainHeavy />;
    case 'snow':
      return <BsCloudSnow />;
    case 'mist':
      return <TbMist />;
    case 'haze':
      return <BsCloudHaze />;
    case 'dust':
      return <TbMist />;
    case 'fog':
      return <BsCloudFog2 />;
    case 'thunderstorm':
      return <MdOutlineThunderstorm />;
    default:
    // DO NOTHING
  }
};

const weatherToText = weather => {
  switch (weather.toLowerCase()) {
    case 'clear':
      return '맑은 날의';
    case 'clouds':
      return '구름 낀';
    case 'drizzle':
      return '보슬비 내리던';
    case 'rain':
      return '비오던';
    case 'snow':
      return '눈이 내리던';
    case 'mist':
      return '옅은 안개가 있던';
    case 'haze':
      return '안개가 강했던';
    case 'dust':
      return '황사가 있던';
    case 'fog':
      return '안개가 흐렸던';
    case 'thunderstorm':
      return '천둥번개가 심했던';
    default:
      return '처리되지 않은 날씨';
  }
};
export { weatherToIcon, weatherToText };
