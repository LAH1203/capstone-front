import { useEffect, useRef } from 'react';

import * as S from './index.styles';

import useBlock from '@/hooks/useBlock';
import { setEndContentEditable } from '@/utils/contentEditable';

const TextBlock = ({ block }) => {
  const contentRef = useRef(block.data.text);
  const blockRef = useRef(null);

  const { editBlock, focusId, changeFocusId } = useBlock();

  useEffect(() => {
    editBlock({ ...block, contentRef });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (focusId !== block.id || block.type === 'img') return;

    blockRef.current.focus();
    setEndContentEditable(blockRef.current);
  }, [block, focusId]);

  const changeContent = e => {
    contentRef.current = e.target.value;
    editBlock({
      ...block,
      data: { ...block.data, text: contentRef.current },
    });
  };

  return (
    <S.ContentEditable
      className={`${block.data.align || 'left'} ${
        block.type === 'heading' ? `h${block.data.level}` : ''
      }`}
      placeholder="새로운 블럭은 Shift+Enter를 눌러주세요"
      html={contentRef.current}
      innerRef={blockRef}
      onChange={changeContent}
      onFocus={changeFocusId(block.id)}
    />
  );
};

export default TextBlock;
