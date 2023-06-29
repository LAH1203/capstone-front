import { useState } from 'react';

import { useAtomValue } from 'jotai';
import { useNavigate } from 'react-router-dom';

import EditorBox from './EditorBox';
import HashtagBox from './HashtagBox';
import * as S from './index.styles';
import Title from './Title';

import { requestUploadDiary } from '@/apis/request/diary';
import { CLIENT_MESSAGE } from '@/constants/message';
import useError from '@/hooks/useError';
import useInput from '@/hooks/useInput';
import useSnackbar from '@/hooks/useSnackbar';
import { blocksAtom } from '@/store/blocks';

const Edit = () => {
  const date = new Date();
  const [hashtagList, setHashtagList] = useState([]);
  const [weather, setWeather] = useState(null);
  const { value: mood, onChangeValue: onChangeMood } = useInput('');
  const { value: title, onChangeValue: onChangeTitle } = useInput('');
  const [font, setFont] = useState('basic');
  const blocks = useAtomValue(blocksAtom);
  const handleError = useError();

  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();

  const addHashtag = newHashtag => {
    setHashtagList(prev => [...prev, newHashtag]);
  };

  const removeHashtag = name => () => {
    if (!hashtagList.findIndex(hashtag => hashtag === name) === -1) {
      showSnackbar(CLIENT_MESSAGE.ERROR.NOT_INCLUDE_HASHTAG);
      return;
    }
    setHashtagList(hashtagList.filter(hash => hash !== name));
  };

  const changeFont = ({ target: { value: font } }) => {
    setFont(font);
  };

  const goToPrevPage = () => {
    navigate(-1);
  };

  const makeNewDiary = e => {
    e.preventDefault();
    if (blocks.length === 1 && blocks[0].data.text === '') {
      showSnackbar(CLIENT_MESSAGE.ERROR.EMPTY_DIARY);
      return;
    }
    if (!window.confirm(CLIENT_MESSAGE.GUIDE.CONFIRM_POST_DIARY)) return;

    const blockForSave = blocks.map(block => ({
      type: block.type,
      data: { ...block.data },
    }));
    requestUploadDiary({
      title: title,
      weather: weather,
      hashtag: hashtagList,
      mood: mood,
      font: font,
      blocks: [...blockForSave],
    })
      .then(() => {
        showSnackbar(CLIENT_MESSAGE.GUIDE.SUCCESS_POST_DIARY);
      })
      .catch(err => {
        handleError(err.code);
      });
  };

  const preventEnter = e => {
    if (e.code === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <S.Container onSubmit={makeNewDiary} onKeyDown={preventEnter}>
      <Title
        title={title}
        setTitle={onChangeTitle}
        date={date}
        setWeather={setWeather}
        mood={mood}
        setMood={onChangeMood}
      />
      <EditorBox font={font} changeFont={changeFont} />
      <HashtagBox
        addHashtag={addHashtag}
        removeHashtag={removeHashtag}
        hashtagList={hashtagList}
      />
      <S.BtnBox>
        <button>작성</button>
        <button type="button" onClick={goToPrevPage}>
          취소
        </button>
      </S.BtnBox>
    </S.Container>
  );
};

export default Edit;
