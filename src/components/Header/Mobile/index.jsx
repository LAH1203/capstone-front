import { useState } from 'react';

import { RxHamburgerMenu } from 'react-icons/rx';
import { SlHome } from 'react-icons/sl';

import * as S from './index.styles';
import Slider from './Slider';

import { BROWSER_PATH } from '@/constants/path';
import { ANIMATION_TIME } from '@/constants/time';
import useClosing from '@/hooks/useClosing';
import useModal from '@/hooks/useModal';

const Mobile = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const { showModal } = useModal();

  const showSearchModal = () => {
    closeSlider();
    showModal('search')();
  };

  const toggleSlider = () => {
    setIsSliderOpen(prev => !prev);
  };

  const { isClosing, close: closeSlider } = useClosing(
    ANIMATION_TIME.SLIDER,
    toggleSlider,
  );

  return (
    <S.Container>
      <a href={BROWSER_PATH.BASE}>
        <S.Button type="button">
          <SlHome />
        </S.Button>
      </a>
      <S.MenuButton type="button" onClick={closeSlider}>
        <RxHamburgerMenu />
      </S.MenuButton>
      {isSliderOpen && (
        <Slider
          isClosing={isClosing}
          closeSlider={closeSlider}
          showSearchModal={showSearchModal}
        />
      )}
    </S.Container>
  );
};

export default Mobile;
