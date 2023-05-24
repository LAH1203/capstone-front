import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import EditorBox from './EditorBox';
import HashtagBox from './HashtagBox';
import * as S from './index.styles';
import Title from './Title';

import { CLIENT_MESSAGE } from '@/constants/message';
import useInput from '@/hooks/useInput';
import useSnackbar from '@/hooks/useSnackbar';

const Edit = () => {
  const date = new Date();
  const [hashtagList, setHashtagList] = useState([]);
  const [weather, setWeather] = useState(null);
  const { value: mood, onChangeValue: onChangeMood } = useInput('');
  const { value: title, onChangeValue: onChangeTitle } = useInput('');
  const [font, setFont] = useState('basic');

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
    // TODO: 일기 작성 API 요청 및 처리
    e.preventDefault();
  };

  return (
    <S.Container>
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
        <button onClick={makeNewDiary}>작성</button>
        <button type="button" onClick={goToPrevPage}>
          취소
        </button>
      </S.BtnBox>
    </S.Container>
  );
};

export default Edit;
