import { useRef } from 'react';

import { CgImage } from 'react-icons/cg';
import {
  RiBold,
  RiItalic,
  RiUnderline,
  RiStrikethrough,
  RiCodeFill,
  RiAlignLeft,
  RiAlignCenter,
  RiAlignRight,
} from 'react-icons/ri';

import * as S from './index.styles';

import { FONTS } from '@/constants/font';
import useBlock from '@/hooks/useBlock';
import useBlockStyle from '@/hooks/useBlockStyle';
import useImage from '@/hooks/useImage';
import useMount from '@/hooks/useMount';

const Navigator = ({ changeFont }) => {
  const headingRef = useRef(null);

  const { addHeadingBlock, addImgBlock } = useBlock();
  const {
    makeBold,
    makeItalic,
    makeUnderline,
    makeStrike,
    makeCode,
    makeAlignLeft,
    makeAlignCenter,
    makeAlignRight,
  } = useBlockStyle();
  const { imgLink, resetImg, uploadImg } = useImage();

  useMount(() => {
    if (imgLink) {
      addImgBlock(imgLink);
    }
    resetImg();
  }, [imgLink]);

  const resetHeadingOption = () => {
    if (!headingRef.current) return;

    headingRef.current.value = 0;
  };

  const styleButtons = [
    { icon: <RiBold />, clickFn: makeBold },
    { icon: <RiItalic />, clickFn: makeItalic },
    { icon: <RiUnderline />, clickFn: makeUnderline },
    { icon: <RiStrikethrough />, clickFn: makeStrike },
    { icon: <RiCodeFill />, clickFn: makeCode },
    { icon: <RiAlignLeft />, clickFn: makeAlignLeft },
    { icon: <RiAlignCenter />, clickFn: makeAlignCenter },
    { icon: <RiAlignRight />, clickFn: makeAlignRight },
  ];

  return (
    <S.Container>
      <S.Select onChange={changeFont}>
        {FONTS.map(({ name, value }) => (
          <option value={value} key={name}>
            {name}
          </option>
        ))}
      </S.Select>
      <S.Select
        ref={headingRef}
        onFocus={resetHeadingOption}
        onChange={addHeadingBlock}
      >
        <option value="1">H1</option>
        <option value="2">H2</option>
        <option value="3">H3</option>
        <option value="4">H4</option>
      </S.Select>
      {styleButtons.map(({ icon, clickFn }, idx) => (
        <S.Button type="button" onClick={clickFn} key={idx}>
          {icon}
        </S.Button>
      ))}
      <S.Image>
        <CgImage />
        <input type="file" accept=".jpg, .jpeg, .png" onChange={uploadImg} />
      </S.Image>
    </S.Container>
  );
};

export default Navigator;
