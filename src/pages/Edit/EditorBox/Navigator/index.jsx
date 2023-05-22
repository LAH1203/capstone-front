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

import useBlock from '@/hooks/useBlock';
import useImage from '@/hooks/useImage';
import useMount from '@/hooks/useMount';

const Navigator = () => {
  const headingRef = useRef(null);

  const {
    addHeadingBlock,
    addImgBlock,
    makeBold,
    makeItalic,
    makeUnderline,
    makeStrike,
    makeCode,
    makeAlignLeft,
    makeAlignCenter,
    makeAlignRight,
  } = useBlock();
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

  return (
    <S.Container>
      <S.Select>
        <option value="돋움">돋움</option>
        <option value="바탕">바탕</option>
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
      <S.Button onClick={makeBold}>
        <RiBold />
      </S.Button>
      <S.Button onClick={makeItalic}>
        <RiItalic />
      </S.Button>
      <S.Button onClick={makeUnderline}>
        <RiUnderline />
      </S.Button>
      <S.Button onClick={makeStrike}>
        <RiStrikethrough />
      </S.Button>
      <S.Button onClick={makeCode}>
        <RiCodeFill />
      </S.Button>
      <S.Button onClick={makeAlignLeft}>
        <RiAlignLeft />
      </S.Button>
      <S.Button onClick={makeAlignCenter}>
        <RiAlignCenter />
      </S.Button>
      <S.Button onClick={makeAlignRight}>
        <RiAlignRight />
      </S.Button>
      <S.Image>
        <CgImage />
        <input type="file" accept=".jpg, .jpeg, .png" onChange={uploadImg} />
      </S.Image>
    </S.Container>
  );
};

export default Navigator;
