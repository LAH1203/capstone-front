import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import EditorBox from './EditorBox';
import HashtagBox from './HashtagBox';
import * as S from './index.styles';
import Title from './Title';

import { CLIENT_MESSAGE } from '@/constants/message';
import { BROWSER_PATH } from '@/constants/path';
import useInput from '@/hooks/useInput';
import useSnackbar from '@/hooks/useSnackbar';
import useWeather from '@/hooks/useWeather';

const Edit = () => {
  const date = new Date();
  const [hashtagList, setHashtagList] = useState([]);
  const { value: mood, onChangeValue: onChangeMood } = useInput('');
  const { value: title, onChangeValue: onChangeTitle } = useInput('');

  const navigate = useNavigate();
  const { weather } = useWeather();
  const { showSnackbar } = useSnackbar();

  const addHashtagItem = newHashtag =>
    setHashtagList(prev => [...prev, newHashtag]);

  const removeHashtag = name => () => {
    if (!hashtagList.findIndex(() => name) === -1) {
      showSnackbar(CLIENT_MESSAGE.ERROR.NOT_INCLUDE_HASHTAG);
      return;
    }
    setHashtagList(hashtagList.filter(hash => hash !== name));
  };

  const goToPrevPage = () => {
    navigate(BROWSER_PATH.BASE);
  };

  const postNewDiary = () => {
    // 등록 버튼 제작 필요
  };

  return (
    <S.Container>
      <Title
        title={title}
        setTitle={onChangeTitle}
        date={date}
        weather={weather}
        mood={mood}
        setMood={onChangeMood}
      />
      <EditorBox />
      <HashtagBox
        addHashtagItem={addHashtagItem}
        removeHashtag={removeHashtag}
        hashtagList={hashtagList}
      />
      <S.BtnBox>
        <button onClick={postNewDiary}>작성</button>
        <button onClick={goToPrevPage}>취소</button>
      </S.BtnBox>
    </S.Container>
  );
};

export default Edit;
