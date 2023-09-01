import { useAtom } from 'jotai';

import {
  INITIAL_TEXT_BLOCK,
  INITIAL_HEADING_BLOCK,
  INITIAL_IMAGE_BLOCK,
} from '@/constants/block';
import { blocksAtom, focusIdAtom } from '@/store/blocks';

const useBlock = () => {
  const [blocks, setBlocks] = useAtom(blocksAtom);
  const [focusId, setFocusId] = useAtom(focusIdAtom);

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
          const newBlock =
            type === 'heading'
              ? {
                  ...initBlock,
                  data: { ...initBlock.data, level: prop.target.value },
                }
              : { ...initBlock, data: { ...initBlock.data, link: prop } };
          newBlocks.splice(
            isFocusedBlockEmpty ? index : index + 1,
            isFocusedBlockEmpty ? 1 : 0,
            newBlock,
          );
          if (type === 'img') {
            newBlocks.splice(isFocusedBlockEmpty ? index + 1 : index + 2, 0, {
              ...INITIAL_TEXT_BLOCK,
              id: Date.now() + 1,
            });
          }
          setFocusId(
            newBlocks[
              isFocusedBlockEmpty
                ? index
                : type === 'img'
                ? index + 2
                : index + 1
            ].id,
          );
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

  const setContentRef = (blockId, contentRef) => {
    setBlocks(
      blocks.map(block => {
        if (block.id !== blockId) return block;
        return {
          ...block,
          contentRef,
        };
      }),
    );
  };

  const changeFocusId = id => () => {
    setFocusId(id);
  };

  return {
    addTextBlock: addBlock('text'),
    addHeadingBlock: addBlock('heading'),
    addImgBlock: addBlock('img'),
    removeBlock,
    setContentRef,
    focusId,
    changeFocusId,
  };
};

export default useBlock;
