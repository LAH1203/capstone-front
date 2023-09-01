import { useState } from 'react';

import { AiOutlinePlus } from 'react-icons/ai';
import { MdDragIndicator } from 'react-icons/md';

import ImageBlock from './ImageBlock';
import * as S from './index.styles';
import TextBlock from './TextBlock';

import useBlock from '@/hooks/useBlock';

const Block = ({ block, index, dragStart, onDropItem }) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const { addTextBlock, removeBlock, changeFocusId } = useBlock();

  const makeNewBlock = e => {
    e.stopPropagation();
    addTextBlock(block.id);
  };

  const controlBlock = e => {
    switch (e.key) {
      case 'Enter':
        if (!e.shiftKey) {
          e.stopPropagation();
          return;
        }
        e.preventDefault();

        addTextBlock(block.id);
        break;

      case 'Backspace':
        if (
          block.contentRef.current.length > 0 &&
          block.contentRef.current !== '<br>'
        )
          return;

        e.preventDefault();

        removeBlock(block.id);
        break;

      default:
        return;
    }
  };

  const controlDrag = action => e => {
    e.preventDefault();

    if (action === 'drop') onDropItem(index);

    setIsDragOver(action === 'over');
  };

  return (
    <S.Container
      onClick={changeFocusId(block.id)}
      onKeyDown={controlBlock}
      draggable
      isDragOver={isDragOver}
      onDragStart={dragStart(index)}
      onDragOver={controlDrag('over')}
      onDragLeave={controlDrag('leave')}
      onDrop={controlDrag('drop')}
    >
      <S.ButtonWrapper
        className={`block-button ${
          block.type === 'heading' ? `h${block.data.level}` : ''
        }`}
      >
        <AiOutlinePlus className="add" onClick={makeNewBlock} />
        <MdDragIndicator className="drag" />
      </S.ButtonWrapper>
      {block.type === 'img' ? (
        <ImageBlock block={block} />
      ) : (
        <TextBlock block={block} />
      )}
    </S.Container>
  );
};

export default Block;
