import { useState } from 'react';

import { useAtom } from 'jotai';

import Block from './Block';
import * as S from './index.styles';

import { INITIAL_BLOCK } from '@/constants/block';
import useDebounce from '@/hooks/useDebounce';
import { blocksAtom } from '@/store/blocks';

const EditorBox = () => {
  const [focusId, setFocusId] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [blocks, setBlocks] = useAtom(blocksAtom);

  const debounce = useDebounce();

  const controlBlock = action => id => {
    switch (action) {
      case 'add':
        setBlocks(() => {
          const newBlocks = [...blocks];
          const index = blocks.findIndex(block => block.id === id);

          newBlocks.splice(index + 1, 0, { ...INITIAL_BLOCK, id: Date.now() });
          setFocusId(newBlocks[index + 1].id);

          return newBlocks;
        });
        break;

      case 'remove':
        setBlocks(() => {
          if (blocks.length === 1) return blocks;

          const newBlocks = [...blocks];
          const index = blocks.findIndex(block => block.id === id);

          newBlocks.splice(index, 1);
          setFocusId(
            index === newBlocks.length
              ? newBlocks[index - 1].id
              : newBlocks[index].id,
          );

          return newBlocks;
        });
        break;

      default:
      // DO NOTHING
    }
  };

  const editBlock = debounce(block => {
    setBlocks(() => {
      const newBlocks = [...blocks];
      const index = blocks.findIndex(({ id }) => id === block.id);

      if (index === -1) return newBlocks;
      newBlocks.splice(index, 1, block);

      return newBlocks;
    });
  }, 100);

  const changeFocusId = id => () => {
    setFocusId(id);
  };

  const dragStart = index => () => {
    setStartIndex(index);
  };

  const onDrop = dropIndex => {
    const dragItem = blocks[startIndex];
    const list = [...blocks];
    list.splice(startIndex, 1);
    const newListData =
      dropIndex === blocks.length - 1
        ? [...list.slice(0, dropIndex), dragItem]
        : startIndex < dropIndex
        ? [
            ...list.slice(0, dropIndex - 1),
            dragItem,
            ...list.slice(dropIndex - 1, list.length),
          ]
        : [
            ...list.slice(0, dropIndex),
            dragItem,
            ...list.slice(dropIndex, list.length),
          ];
    setBlocks(newListData);
  };

  return (
    <S.Container>
      <S.EditELementBox>
        <p>Sans-serif</p>
        <p>H</p>
        <p>
          <b>B</b>
        </p>
        <p>
          <i>I</i>
        </p>
        <p>
          <ins>U</ins>
        </p>
        <p>
          <strike>S</strike>
        </p>
        <p>{'< >'}</p>
        <p>줄간격</p>
        <p>이미지</p>
      </S.EditELementBox>
      <S.Blocks>
        {blocks.map((block, index) => (
          <Block
            block={block}
            index={index}
            key={`block-${block.id}`}
            focusId={focusId}
            changeFocus={changeFocusId}
            addBlock={controlBlock('add')}
            removeBlock={controlBlock('remove')}
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
