import { useState } from 'react';

import * as S from './index.styles';
import Slider from './Slider';

import hamburgerSVG from '@/assets/hamburger.svg';
import homeSVG from '@/assets/home.svg';
import { BROWSER_PATH } from '@/constants/path';
import { ANIMATION_TIME } from '@/constants/time';
import useClosing from '@/hooks/useClosing';

const Mobile = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const toggleSlider = () => {
    setIsSliderOpen(prev => !prev);
  };

  const { isClosing, close: closeSlider } = useClosing(
    ANIMATION_TIME.SLIDER,
    toggleSlider,
  );

  return (
    <S.Container>
      <S.Button type="button">
        <a href={BROWSER_PATH.BASE}>
          <img src={homeSVG} alt="홈 버튼" />
        </a>
      </S.Button>
      <S.MenuButton type="button" onClick={closeSlider}>
        <img src={hamburgerSVG} alt="메뉴 버튼" />
      </S.MenuButton>
      {isSliderOpen && (
        <Slider isClosing={isClosing} closeSlider={closeSlider} />
      )}
    </S.Container>
  );
};

export default Mobile;
