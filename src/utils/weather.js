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
import { ColorRing } from 'react-loader-spinner';

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
};

export { weatherToIcon };
