import { useEffect, useState } from 'react';

import { useAtom } from 'jotai';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

import * as S from './index.styles';

import { requestEditDiary, getDiary } from '@/apis/request/diary';
import EditorBox from '@/components/EditorBox';
import EditorTitle from '@/components/EditorTitle';
import HashtagBox from '@/components/HashtagBox';
import { MOOD } from '@/constants/diary';
import { CLIENT_MESSAGE } from '@/constants/message';
import { BROWSER_PATH } from '@/constants/path';
import useError from '@/hooks/useError';
import useInput from '@/hooks/useInput';
import useSnackbar from '@/hooks/useSnackbar';
import { blocksAtom } from '@/store/blocks';
import { isToday } from '@/utils/date';

const Edit = () => {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ['detail', id],
    queryFn: () => getDiary(id),
  });

  const [date, setDate] = useState(null);
  const [hashtagList, setHashtagList] = useState([]);
  const [weather, setWeather] = useState(null);
  const {
    value: mood,
    onChangeValue: onChangeMood,
    dangerouslySetValue: setMood,
  } = useInput(MOOD.BEST.text);
  const {
    value: title,
    onChangeValue: onChangeTitle,
    dangerouslySetValue: setTitle,
  } = useInput('');
  const [font, setFont] = useState('basic');
  const [blocks, setBlocks] = useAtom(blocksAtom);
  const handleError = useError();

  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (!isToday(data.date)) navigate(`${BROWSER_PATH.DETAIL}/${id}`);
    setTitle(data.title);
    setWeather(data.weather);
    setDate(new Date(data.date));
    setHashtagList(data.hashtag);
    setBlocks(data.blocks);
    setMood(data.mood);
    setFont(data.font);
  }, [data]);

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
    if (!window.confirm(CLIENT_MESSAGE.GUIDE.CONFIRM_EDIT_DIARY)) return;

    const blockForEdit = blocks.map(block => ({
      type: block.type,
      data: { ...block.data },
    }));
    requestEditDiary(id, {
      title: title,
      weather: weather,
      hashtag: hashtagList,
      mood: mood,
      font: font,
      blocks: [...blockForEdit],
    })
      .then(() => {
        showSnackbar(CLIENT_MESSAGE.GUIDE.SUCCESS_POST_DIARY);
        navigate(`${BROWSER_PATH.DETAIL}/${id}`);
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
      <EditorTitle
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
        <button>수정</button>
        <button type="button" onClick={goToPrevPage}>
          취소
        </button>
      </S.BtnBox>
    </S.Container>
  );
};

export default Edit;
