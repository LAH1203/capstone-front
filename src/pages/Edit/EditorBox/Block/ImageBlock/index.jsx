import * as S from './index.styles';

import useBlock from '@/hooks/useBlock';

const ImageBlock = ({ block }) => {
  const { changeFocusId } = useBlock();

  return (
    <S.Wrapper className={block.data.align || 'left'}>
      <S.Image
        src={block.data.link}
        alt="이미지"
        onClick={changeFocusId(block.id)}
      />
    </S.Wrapper>
  );
};

export default ImageBlock;
