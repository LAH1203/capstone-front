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
  switch (weather) {
    case 'Clear':
      return <MdOutlineWbSunny />;
    case 'Clouds':
      return <MdCloudQueue />;
    case 'Drizzle':
      return <CiCloudDrizzle />;
    case 'Rain':
      return <BsCloudRainHeavy />;
    case 'Snow':
      return <BsCloudSnow />;
    case 'Mist':
      return <TbMist />;
    case 'Haze':
      return <BsCloudHaze />;
    case 'Dust':
      return <TbMist />;
    case 'Fog':
      return <BsCloudFog2 />;
    case 'Thunderstorm':
      return <MdOutlineThunderstorm />;
    default:
    // DO NOTHING
  }
};

export { weatherToIcon };
