import { useAtom } from 'jotai';

import {
  INITIAL_TEXT_BLOCK,
  INITIAL_HEADING_BLOCK,
  INITIAL_IMAGE_BLOCK,
} from '@/constants/block';
import useDebounce from '@/hooks/useDebounce';
import { blocksAtom, focusIdAtom } from '@/store/blocks';

const useBlock = () => {
  const [blocks, setBlocks] = useAtom(blocksAtom);
  const [focusId, setFocusId] = useAtom(focusIdAtom);

  const debounce = useDebounce();

  const addBlock = type => {
    const newBlocks = [...blocks];
    const initBlock =
      type === 'text'
        ? {
            ...INITIAL_TEXT_BLOCK,
            id: Date.now(),
          }
        : type === 'heading'
        ? {
            ...INITIAL_HEADING_BLOCK,
            id: Date.now(),
          }
        : {
            ...INITIAL_IMAGE_BLOCK,
            id: Date.now(),
          };

    switch (type) {
      case 'text':
        return id => {
          const index = blocks.findIndex(block => block.id === id);

          newBlocks.splice(index + 1, 0, { ...initBlock });
          setFocusId(newBlocks[index + 1].id);
          setBlocks(newBlocks);
        };

      case 'heading':
      case 'img':
        return prop => {
          const index = blocks.findIndex(block => block.id === focusId);
          const isFocusedBlockEmpty =
            (blocks[index].type === 'heading' ||
              blocks[index].type === 'text') &&
            blocks[index].data.text.length <= 0;

          newBlocks.splice(
            isFocusedBlockEmpty ? index : index + 1,
            isFocusedBlockEmpty ? 1 : 0,
            type === 'heading'
              ? {
                  ...initBlock,
                  data: { ...initBlock.data, level: prop.target.value },
                }
              : { ...initBlock, data: { ...initBlock.data, link: prop } },
          );
          setFocusId(newBlocks[isFocusedBlockEmpty ? index : index + 1].id);
          setBlocks(newBlocks);
        };

      default:
      // DO NOTHING
    }
  };

  const removeBlock = id => {
    if (blocks.length === 1) return;

    const newBlocks = blocks.filter((block, idx) => {
      if (block.id === id) {
        if (idx > 0) setFocusId(blocks[idx - 1].id);
        else setFocusId(blocks[idx + 1].id);
      }
      return block.id !== id;
    });
    setBlocks(newBlocks);
  };

  const editBlock = debounce(block => {
    setBlocks(blocks =>
      blocks.map(blockEl => (blockEl.id !== block.id ? blockEl : block)),
    );
  }, 100);

  const mergeContentToPrevBlock = () => {
    const newBlocks = [...blocks];
    const index = blocks.findIndex(({ id }) => id === focusId);

    if (index === 0 && blocks[index].data.text.length === 0) {
      removeBlock(blocks[index].id);
      return;
    }
    if (index < 0 || blocks[index - 1].type === 'img') return;

    const text =
      blocks[index - 1].contentRef.current + blocks[index].contentRef.current;

    newBlocks.splice(index - 1, 2, {
      ...blocks[index - 1],
      data: {
        ...blocks[index - 1].data,
        text,
      },
    });
    newBlocks[index - 1].contentRef.current = text;

    setFocusId(blocks[index - 1].id);
    setBlocks(newBlocks);
  };

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
    mergeContentToPrevBlock,
    focusId,
    changeFocusId,
    changeFocusToPrevBlock,
  };
};

export default useBlock;
