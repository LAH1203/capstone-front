import { useEffect, useRef, useState } from 'react';

import { AiOutlinePlus } from 'react-icons/ai';
import { MdDragIndicator } from 'react-icons/md';

import * as S from './index.styles';

import useBlock from '@/hooks/useBlock';
import { setEndContentEditable } from '@/utils/contentEditable';

const Block = ({ block, index, dragStart, onDropItem }) => {
  const [dragOver, setDragOver] = useState(false);

  const content = useRef(block.data.text);
  const blockRef = useRef(null);

  const { addTextBlock, removeTextBlock, editBlock, focusId, changeFocusId } =
    useBlock();

  useEffect(() => {
    if (!blockRef || focusId !== block.id || block.type === 'img') return;

    blockRef.current.focus();

    setEndContentEditable(blockRef.current);
  }, [focusId, block]);

  const changeContent = e => {
    content.current = e.target.value;
    editBlock({ ...block, data: { ...block.data, text: content.current } });
  };

  const makeNewBlock = e => {
    e.stopPropagation();
    addTextBlock(block.id);
  };

  const controlBlock = e => {
    switch (e.key) {
      case 'Enter':
        if (!e.shiftKey) return;
        e.preventDefault();

        addTextBlock(block.id);
        break;

      case 'Backspace':
        if (content.current.length > 0 && content.current !== '<br>') return;
        e.preventDefault();

        removeTextBlock(block.id);
        break;

      default:
        return;
    }
  };

  const controlDrag = action => e => {
    switch (action) {
      case 'enter':
        setDragOver(true);
        break;
      case 'leave':
        setDragOver(false);
        break;
      case 'over':
        e.preventDefault();
        break;
      case 'drop':
        onDropItem(index);
        setDragOver(false);
        break;
      default:
      //none
    }
  };

  return (
    <S.Container
      dragOver={dragOver}
      draggable
      onDragStart={dragStart(index)}
      onDragOver={controlDrag('over')}
      onDragEnter={controlDrag('enter')}
      onDragLeave={controlDrag('leave')}
      onDrop={controlDrag('drop')}
      onKeyDown={controlBlock}
      onClick={changeFocusId(block.id)}
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
        <S.Image
          src={block.data.link}
          alt="이미지"
          onClick={changeFocusId(block.id)}
        />
      ) : (
        <S.ContentEditable
          className={block.type === 'heading' ? `h${block.data.level}` : ''}
          placeholder="새로운 블럭은 Shift+Enter를 눌러주세요"
          html={block.data.text}
          innerRef={blockRef}
          onChange={changeContent}
          onFocus={changeFocusId(block.id)}
        />
      )}
    </S.Container>
  );
};

export default Block;
