import { useAtom, useAtomValue } from 'jotai';

import { blocksAtom, focusIdAtom } from '@/store/blocks';

const useBlockStyle = () => {
  const [blocks, setBlocks] = useAtom(blocksAtom);
  const focusId = useAtomValue(focusIdAtom);

  const makeStyle = style => () => {
    const focusedBlockIdx = blocks.findIndex(({ id }) => id === focusId);
    const block = blocks[focusedBlockIdx];

    if (block.type === 'img') return;

    const newBlocks = [...blocks];
    let text = '';

    switch (style) {
      case 'bold':
        text = `<b>${block.data.text}</b>`;

        if (block.data.text.includes('<b>')) {
          text = block.data.text.replace('<b>', '');
          text = text.replace('</b>', '');
        }
        break;
      case 'italic':
        text = `<i>${block.data.text}</i>`;

        if (block.data.text.includes('<i>')) {
          text = block.data.text.replace('<i>', '');
          text = text.replace('</i>', '');
        }
        break;
      case 'underline':
        text = `<ins>${block.data.text}</ins>`;

        if (block.data.text.includes('<ins>')) {
          text = block.data.text.replace('<ins>', '');
          text = text.replace('</ins>', '');
        }
        break;
      case 'strike':
        text = `<strike>${block.data.text}</strike>`;

        if (block.data.text.includes('<strike>')) {
          text = block.data.text.replace('<strike>', '');
          text = text.replace('</strike>', '');
        }
        break;
      case 'code':
        text = `<pre><code>${block.data.text}</code></pre>`;

        if (block.data.text.includes('<pre><code>')) {
          text = block.data.text.replace('<pre><code>', '');
          text = text.replace('</code></pre>', '');
        }
        break;
      default:
      // DO NOTHING
    }

    block.ref.current = text;

    newBlocks.splice(focusedBlockIdx, 1, {
      ...block,
      data: {
        ...block.data,
        text,
      },
    });
    setBlocks(newBlocks);
  };

  const changeAlign = align => () => {
    const focusedBlockIdx = blocks.findIndex(({ id }) => id === focusId);
    const block = blocks[focusedBlockIdx];

    const newBlocks = [...blocks];
    let sort = '';

    switch (align) {
      case 'left':
        sort = 'left';
        break;
      case 'center':
        sort = 'center';
        break;
      case 'right':
        sort = 'right';
        break;
      default:
      // DO NOTHING
    }

    newBlocks.splice(focusedBlockIdx, 1, {
      ...block,
      data: {
        ...block.data,
        sort,
      },
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
