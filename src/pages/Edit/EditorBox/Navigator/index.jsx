import { CgImage } from 'react-icons/cg';
import {
  RiBold,
  RiItalic,
  RiUnderline,
  RiStrikethrough,
  RiCodeFill,
  RiAlignLeft,
  RiAlignRight,
  RiAlignCenter,
} from 'react-icons/ri';

import * as S from './index.styles';

const Navigator = () => {
  return (
    <S.Container>
      <S.Select name="font" id="font-select">
        <option value="돋움">돋움</option>
        <option value="바탕">바탕</option>
      </S.Select>
      <S.Select name="heading" id="heading-select">
        <option value="level1">H1</option>
        <option value="level2">H2</option>
        <option value="level3">H3</option>
        <option value="level4">H4</option>
      </S.Select>
      <S.Button>
        <RiBold />
      </S.Button>
      <S.Button>
        <RiItalic />
      </S.Button>
      <S.Button>
        <RiUnderline />
      </S.Button>
      <S.Button>
        <RiStrikethrough />
      </S.Button>
      <S.Button>
        <RiCodeFill />
      </S.Button>
      <S.Button>
        <RiAlignLeft />
      </S.Button>
      <S.Button>
        <RiAlignRight />
      </S.Button>
      <S.Button>
        <RiAlignCenter />
      </S.Button>
      <S.Button>
        <CgImage />
      </S.Button>
    </S.Container>
  );
};

export default Navigator;
