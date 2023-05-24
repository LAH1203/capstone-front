import { useAtom } from 'jotai';

import { INITIAL_BLOCK } from '@/constants/block';
import useDebounce from '@/hooks/useDebounce';
import { blocksAtom, focusIdAtom } from '@/store/blocks';

const useBlock = () => {
  const [blocks, setBlocks] = useAtom(blocksAtom);
  const [focusId, setFocusId] = useAtom(focusIdAtom);

  const debounce = useDebounce();

  const controlTextBlock = action => id => {
    const newBlocks = [...blocks];
    const index = blocks.findIndex(block => block.id === id);

    switch (action) {
      case 'add':
        newBlocks.splice(index + 1, 0, {
          ...INITIAL_BLOCK,
          id: Date.now(),
          ref: null,
        });
        setFocusId(newBlocks[index + 1].id);
        setBlocks(newBlocks);

        break;

      case 'remove':
        if (blocks.length === 1) return;

        newBlocks.splice(index, 1);
        setFocusId(newBlocks[index - 1].id);
        setBlocks(newBlocks);

        break;

      default:
      // DO NOTHING
    }
  };

  const addHeadingBlock = ({ target: { value: level } }) => {
    const newBlocks = [...blocks];
    const index = blocks.findIndex(block => block.id === focusId);

    newBlocks.splice(index + 1, 0, {
      id: Date.now(),
      type: 'heading',
      data: { text: '', level },
    });
    setFocusId(newBlocks[index + 1].id);
    setBlocks(newBlocks);
  };

  const addImgBlock = imgLink => {
    const newBlocks = [...blocks];
    const index = blocks.findIndex(block => block.id === focusId);

    newBlocks.splice(index + 1, 0, {
      id: Date.now(),
      type: 'img',
      data: { link: imgLink },
    });
    setFocusId(newBlocks[index + 1].id);
    setBlocks(newBlocks);
  };

  const editBlock = debounce(block => {
    const newBlocks = [...blocks];
    const index = blocks.findIndex(({ id }) => id === block.id);

    if (index === -1) {
      setBlocks(newBlocks);
      return;
    }

    newBlocks.splice(index, 1, block);
    setBlocks(newBlocks);
  }, 100);

  const changeFocusId = id => () => {
    setFocusId(id);
  };

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
    addTextBlock: controlTextBlock('add'),
    removeTextBlock: controlTextBlock('remove'),
    addHeadingBlock,
    addImgBlock,
    editBlock,
    focusId,
    changeFocusId,
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

export default useBlock;
