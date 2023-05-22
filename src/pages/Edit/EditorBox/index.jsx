import { useState } from 'react';

import { useAtom } from 'jotai';

import Block from './Block';
import * as S from './index.styles';
import Navigator from './Navigator';

import { blocksAtom } from '@/store/blocks';

const EditorBox = () => {
  const [dragStartIdx, setDragStartIdx] = useState(0);

  const [blocks, setBlocks] = useAtom(blocksAtom);

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
      <Navigator />
      <S.Blocks>
        {blocks.map((block, index) => (
          <Block
            block={block}
            index={index}
            dragStart={dragStart}
            onDropItem={onDrop}
            key={`block-${block.id}`}
          />
        ))}
      </S.Blocks>
    </S.Container>
  );
};

export default EditorBox;
