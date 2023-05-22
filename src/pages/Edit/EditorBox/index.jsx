import { useState } from 'react';

import { useAtom } from 'jotai';

import Block from './Block';
import * as S from './index.styles';
import Navigator from './Navigator';

import { INITIAL_BLOCK } from '@/constants/block';
import useDebounce from '@/hooks/useDebounce';
import { blocksAtom } from '@/store/blocks';

const EditorBox = () => {
  const [blocks, setBlocks] = useAtom(blocksAtom);
  const [dragStartIdx, setDragStartIdx] = useState(0);
  const [focusId, setFocusId] = useState(blocks[0].id);

  const debounce = useDebounce();

  const controlTextBlock = action => id => {
    const newBlocks = [...blocks];
    const index = blocks.findIndex(block => block.id === id);

    switch (action) {
      case 'add':
        newBlocks.splice(index + 1, 0, { ...INITIAL_BLOCK, id: Date.now() });
        setFocusId(newBlocks[index + 1].id);
        setBlocks(newBlocks);

        break;

      case 'remove':
        if (blocks.length === 1) return;

        newBlocks.splice(index, 1);
        setFocusId(
          index === newBlocks.length
            ? newBlocks[index - 1].id
            : newBlocks[index].id,
        );
        setBlocks(newBlocks);

        break;

      default:
      // DO NOTHING
    }
  };

  const editBlock = debounce(block => {
    const newBlocks = [...blocks];
    const index = blocks.findIndex(({ id }) => id === block.id);

    if (index === -1) {
      setBlocks(newBlocks);
    }

    newBlocks.splice(index, 1, block);
    setBlocks(newBlocks);
  }, 100);

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

  const changeFocus = id => () => {
    setFocusId(id);
  };

  const dragStart = idx => () => {
    setDragStartIdx(idx);
  };

  const onDrop = dropIdx => {
    const dragItem = blocks[dragStartIdx];
    const list = [...blocks];
    list.splice(dragStartIdx, 1);
    const newListData =
      dropIdx === blocks.length - 1
        ? [...list.slice(0, dropIdx), dragItem]
        : dragStartIdx < dropIdx
        ? [
            ...list.slice(0, dropIdx - 1),
            dragItem,
            ...list.slice(dropIdx - 1, list.length),
          ]
        : [
            ...list.slice(0, dropIdx),
            dragItem,
            ...list.slice(dropIdx, list.length),
          ];
    setBlocks(newListData);
  };

  return (
    <S.Container>
      <Navigator addHeadingBlock={addHeadingBlock} addImgBlock={addImgBlock} />
      <S.Blocks>
        {blocks.map((block, index) => (
          <Block
            block={block}
            index={index}
            key={`block-${block.id}`}
            focusId={focusId}
            changeFocus={changeFocus}
            addTextBlock={controlTextBlock('add')}
            removeTextBlock={controlTextBlock('remove')}
            editBlock={editBlock}
            dragStart={dragStart}
            onDropItem={onDrop}
          />
        ))}
      </S.Blocks>
    </S.Container>
  );
};

export default EditorBox;
