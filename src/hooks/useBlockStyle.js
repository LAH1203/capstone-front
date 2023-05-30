import { useAtom, useAtomValue } from 'jotai';

import { blocksAtom, focusIdAtom } from '@/store/blocks';

const useBlockStyle = () => {
  const [blocks, setBlocks] = useAtom(blocksAtom);
  const focusId = useAtomValue(focusIdAtom);

  const makeStyle = style => () => {
    const openTag =
      style === 'bold'
        ? '<b>'
        : style === 'italic'
        ? '<i>'
        : style === 'underline'
        ? '<ins>'
        : style === 'strike'
        ? '<strike>'
        : '<pre><code>';
    const closeTag =
      style === 'bold'
        ? '</b>'
        : style === 'italic'
        ? '</i>'
        : style === 'underline'
        ? '</ins>'
        : style === 'strike'
        ? '</strike>'
        : '</code></pre>';

    const newBlocks = blocks.map(block => {
      if (block.id !== focusId || block.type === 'img') return block;

      const text = block.data.text.includes(openTag)
        ? block.data.text.split(openTag).join('').split(closeTag).join('')
        : `${openTag}${block.data.text}${closeTag}`;

      block.contentRef.current = text;

      return {
        ...block,
        data: {
          ...block.data,
          text,
        },
      };
    });

    setBlocks(newBlocks);
  };

  const changeAlign = align => () => {
    const newBlocks = blocks.map(block => {
      if (block.id !== focusId) return block;

      return {
        ...block,
        data: {
          ...block.data,
          align,
        },
      };
    });
    setBlocks(newBlocks);
  };

  return {
    makeBold: makeStyle('bold'),
    makeItalic: makeStyle('italic'),
    makeUnderline: makeStyle('underline'),
    makeStrike: makeStyle('strike'),
    makeCode: makeStyle('code'),
    makeAlignLeft: changeAlign('left'),
    makeAlignCenter: changeAlign('center'),
    makeAlignRight: changeAlign('right'),
  };
};

export default useBlockStyle;
