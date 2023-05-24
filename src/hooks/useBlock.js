import { useAtom } from 'jotai';

import { INITIAL_BLOCK } from '@/constants/block';
import useDebounce from '@/hooks/useDebounce';
import { blocksAtom, focusIdAtom } from '@/store/blocks';

const useBlock = () => {
  const [blocks, setBlocks] = useAtom(blocksAtom);
  const [focusId, setFocusId] = useAtom(focusIdAtom);

  const debounce = useDebounce();

  const addBlock = type => {
    const newBlocks = [...blocks];
    const index = blocks.findIndex(block => block.id === focusId);
    let isFocusedBlockEmpty = false;

    switch (type) {
      case 'text':
        return () => {
          newBlocks.splice(index + 1, 0, {
            ...INITIAL_BLOCK,
            id: Date.now(),
            ref: null,
          });
          setFocusId(newBlocks[index + 1].id);
          setBlocks(newBlocks);
        };

      case 'heading':
        return ({ target: { value: level } }) => {
          isFocusedBlockEmpty =
            (blocks[index].type === 'heading' ||
              blocks[index].type === 'text') &&
            blocks[index].data.text.length <= 0;

          newBlocks.splice(
            isFocusedBlockEmpty ? index : index + 1,
            isFocusedBlockEmpty ? 1 : 0,
            {
              id: Date.now(),
              type: 'heading',
              data: { text: '', level },
            },
          );
          setFocusId(newBlocks[isFocusedBlockEmpty ? index : index + 1].id);
          setBlocks(newBlocks);
        };

      case 'img':
        return imgLink => {
          isFocusedBlockEmpty =
            (blocks[index].type === 'heading' ||
              blocks[index].type === 'text') &&
            blocks[index].data.text.length <= 0;

          newBlocks.splice(
            isFocusedBlockEmpty ? index : index + 1,
            isFocusedBlockEmpty ? 1 : 0,
            {
              id: Date.now(),
              type: 'img',
              data: { link: imgLink },
            },
          );
          setFocusId(newBlocks[isFocusedBlockEmpty ? index : index + 1].id);
          setBlocks(newBlocks);
        };

      default:
      // DO NOTHING
    }
  };

  const removeBlock = id => {
    const newBlocks = [...blocks];
    const index = blocks.findIndex(block => block.id === id);

    if (blocks.length === 1) return;

    newBlocks.splice(index, 1);
    setFocusId(newBlocks[index - 1].id);
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

  const changeFocusToPrevBlock = id => {
    const index = blocks.findIndex(({ id: blockId }) => blockId === id);

    setFocusId(index > 0 ? blocks[index - 1].id : id);
  };

  return {
    addTextBlock: addBlock('text'),
    addHeadingBlock: addBlock('heading'),
    addImgBlock: addBlock('img'),
    removeBlock,
    editBlock,
    focusId,
    changeFocusId,
    changeFocusToPrevBlock,
  };
};

export default useBlock;
