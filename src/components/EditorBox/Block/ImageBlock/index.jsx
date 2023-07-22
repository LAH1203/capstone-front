import * as S from './index.styles';

import { CLIENT_MESSAGE } from '@/constants/message';
import useBlock from '@/hooks/useBlock';

const ImageBlock = ({ block }) => {
  const { removeBlock, changeFocusId } = useBlock();

  const deleteImage = () => {
    if (!window.confirm(CLIENT_MESSAGE.GUIDE.CONFIRM_DELETE_IMAGE)) return;

    removeBlock(block.id);
  };

  return (
    <S.Wrapper className={block.data.align || 'left'}>
      <S.Image
        src={block.data.link}
        alt="이미지"
        onClick={changeFocusId(block.id)}
        onDoubleClick={deleteImage}
      />
    </S.Wrapper>
  );
};

export default ImageBlock;
