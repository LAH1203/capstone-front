import * as S from './index.styles';

import { CLIENT_MESSAGE } from '@/constants/message';
import { RULE } from '@/constants/rule';
import useInput from '@/hooks/useInput';
import useSnackbar from '@/hooks/useSnackbar';
import { isBlank } from '@/utils/hashtag';

const HashtagBox = ({ addHashtag, removeHashtag, hashtagList }) => {
  const {
    value: newHashtag,
    onChangeValue: onChangeNewHashtag,
    resetValue: resetNewHashtag,
  } = useInput('');
  const { showSnackbar } = useSnackbar();

  const addHashtagByInput = ({ nativeEvent: { key, isComposing } }) => {
    if (key !== 'Enter' || isComposing) return;
    if (isBlank(newHashtag)) {
      showSnackbar(CLIENT_MESSAGE.ERROR.EMPTY_HASHTAG);
      return;
    }

    if (hashtagList.length === RULE.HASHTAG_LIST.MAX) {
      showSnackbar(CLIENT_MESSAGE.ERROR.FULL_HASHTAG_LIST);
      resetNewHashtag();

      return;
    }

    if (hashtagList.includes(newHashtag)) {
      showSnackbar(CLIENT_MESSAGE.ERROR.DUPLICATED_HASHTAG);

      return;
    }

    addHashtag(newHashtag);
    resetNewHashtag();
  };

  return (
    <S.Container>
      <S.InputBox>
        <S.Input>
          <p>#</p>
          <S.GuideLineDesktop>
            해시태그는 최대 5개까지 추가할 수 있어요. <br />
            입력 후 엔터를 치면 자동으로 추가되고, <br />
            이미 추가된 해시태그를 클릭하면 삭제돼요.
          </S.GuideLineDesktop>
          <input
            type="text"
            value={newHashtag}
            onChange={onChangeNewHashtag}
            onKeyDown={addHashtagByInput}
          />
        </S.Input>
        <S.GuideLineMobile>
          해시태그는 최대 5개까지 추가할 수 있어요. <br />
          입력 후 엔터를 치면 자동으로 추가되고, <br />
          이미 추가된 해시태그를 클릭하면 삭제돼요.
        </S.GuideLineMobile>
      </S.InputBox>
      <S.HashtagList>
        {hashtagList.map(hashtag => (
          <S.Hashtag onClick={removeHashtag(hashtag)} key={hashtag}>
            #{hashtag}
          </S.Hashtag>
        ))}
      </S.HashtagList>
    </S.Container>
  );
};

export default HashtagBox;
