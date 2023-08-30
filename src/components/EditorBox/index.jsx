import { useState } from 'react';

import { useAtom } from 'jotai';

import Block from './Block';
import * as S from './index.styles';
import Navigator from './Navigator';

import { blocksAtom } from '@/store/blocks';

const EditorBox = ({ font, changeFont }) => {
  const [dragStartIdx, setDragStartIdx] = useState(0);

  const [blocks, setBlocks] = useAtom(blocksAtom);
  const dragStart = idx => () => {
    setDragStartIdx(idx);
  };

  const onDrop = dropIdx => {
    const dragItem = blocks[dragStartIdx];
    const list = [...blocks];
    list.splice(dragStartIdx, 1);

    const targetIdx = dragStartIdx < dropIdx ? dropIdx - 1 : dropIdx;
    const newListData =
      dropIdx >= blocks.length - 1
        ? [...list, dragItem]
        : [
            ...list.slice(0, targetIdx),
            dragItem,
            ...list.slice(targetIdx, list.length),
          ];
    setBlocks(newListData);
  };

  return (
    <S.Container>
      <Navigator changeFont={changeFont} />
      <S.Blocks className={font}>
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
