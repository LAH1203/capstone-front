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

export { weatherToIcon };
