import { useEffect, useRef, useState } from 'react';

import ContentEditable from 'react-contenteditable';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdDragIndicator } from 'react-icons/md';

import * as S from './index.styles';

import useDebounce from '@/hooks/useDebounce';
import { setEndContentEditable } from '@/utils/contentEditable';

const Block = ({
  block,
  index,
  addBlock,
  removeBlock,
  editBlock,
  current,
  changeFocus,
  onDragStart,
  onDropItem,
}) => {
  const [dragOver, setDragOver] = useState(false);
  const content = useRef('');
  const focusRef = useRef(null);
  const debounce = useDebounce();

  useEffect(() => {
    if (!focusRef || current !== block.id) return;
    focusRef.current.focus();
    try {
      setEndContentEditable(focusRef.current);
    } catch (e) {}
  }, [current, block]);

  const editDebounce = debounce(() => {
    editBlock({ ...block, data: { ...block.data, text: content.current } });
  }, 100);

  const onChangeContent = e => {
    content.current = e.target.value;
    editDebounce();
  };

  const onClickNewBlock = () => {
    addBlock(block.id);
  };

  const controlBlock = e => {
    switch (e.key) {
      case 'Enter':
        if (!e.shiftKey) return;
        e.preventDefault();
        addBlock(block.id);
        break;

      case 'Backspace':
        if (content.current.length > 0 && content.current !== '<br>') return;
        e.preventDefault();
        removeBlock(block.id);
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
      onDragStart={onDragStart(index)}
      onDragOver={controlDrag('over')}
      onDragEnter={controlDrag('enter')}
      onDragLeave={controlDrag('leave')}
      onDrop={controlDrag('drop')}
      onKeyDown={controlBlock}
    >
      <S.BlockButtonWrap className="block-button">
        <AiOutlinePlus className="add" onClick={onClickNewBlock} />
        <MdDragIndicator className="drag" onClick={changeFocus(block.id)} />
      </S.BlockButtonWrap>
      <ContentEditable
        className="content-editable"
        placeholder="새로운 블럭은 Shift+Enter를 눌러주세요"
        html={content.current}
        innerRef={focusRef}
        onChange={onChangeContent}
        onFocus={changeFocus(block.id)}
      />
    </S.Container>
  );
};

export default Block;
