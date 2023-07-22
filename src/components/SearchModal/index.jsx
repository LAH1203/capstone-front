import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import * as S from './index.styles';

import Portal from '@/components/Portal';
import { BROWSER_PATH } from '@/constants/path';
import useClosing from '@/hooks/useClosing';
import useInput from '@/hooks/useInput';
import useModal from '@/hooks/useModal';

const modalAnimationTime = 150;

const diaries = [
  {
    diaryId: '0',
    title: '제목',
    date: '2023-03-12',
    content:
      '첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만',
    hashtag: ['해시태그1', '해시태그2', '해시태그3', '해시태그4', '해시태그5'],
  },
  {
    diaryId: '1',
    title: '제목',
    date: '2023-03-12',
    content:
      '첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만',
    hashtag: ['해시태그1', '해시태그2'],
  },
  {
    diaryId: '2',
    title: '제목',
    date: '2023-03-12',
    content:
      '첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만',
    hashtag: ['해시태그1', '해시태그2'],
  },
  {
    diaryId: '3',
    title: '제목',
    date: '2023-03-12',
    content:
      '첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만',
    hashtag: ['해시태그1', '해시태그2'],
  },
  {
    diaryId: '4',
    title: '제목',
    date: '2023-03-12',
    content:
      '첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만',
    hashtag: ['해시태그1', '해시태그2'],
  },
  {
    diaryId: '5',
    title: '제목',
    date: '2023-03-12',
    content:
      '첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만',
    hashtag: ['해시태그1', '해시태그2'],
  },
  {
    diaryId: '6',
    title: '제목',
    date: '2023-03-12',
    content:
      '첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만첫 번째 문장의 텍스트만',
    hashtag: ['해시태그1', '해시태그2'],
  },
];

const SearchModal = () => {
  const { value, onChangeValue } = useInput('');

  const { setOffModal } = useModal();
  const { isClosing, close } = useClosing(modalAnimationTime, setOffModal);

  const navigate = useNavigate();

  const preventBubbling = e => {
    e.stopPropagation();
  };

  const goToDetailPage = diaryId => () => {
    close();
    navigate(`${BROWSER_PATH.DETAIL}/${diaryId}`);
  };

  return (
    <Portal to="modal">
      <S.Dimmer
        onClick={close}
        className={isClosing ? 'close' : ''}
        animationTime={modalAnimationTime}
      >
        <S.Container
          onClick={preventBubbling}
          className={isClosing ? 'close' : ''}
          animationTime={modalAnimationTime}
        >
          <S.InputContainer>
            <AiOutlineSearch />
            <input
              type="text"
              value={value}
              onChange={onChangeValue}
              placeholder="제목 또는 내용 검색"
            />
          </S.InputContainer>
          <S.List>
            {diaries.map(diary => (
              <S.Item
                onClick={goToDetailPage(diary.diaryId)}
                key={diary.diaryId}
              >
                <S.Title>
                  <p>{diary.title}</p>
                  <p>{diary.date}</p>
                </S.Title>
                <S.Content>{diary.content}</S.Content>
                <S.HashtagWrapper>
                  {diary.hashtag.map(hashtag => (
                    <S.Hashtag key={hashtag}>{hashtag}</S.Hashtag>
                  ))}
                </S.HashtagWrapper>
              </S.Item>
            ))}
          </S.List>
        </S.Container>
      </S.Dimmer>
    </Portal>
  );
};

export default SearchModal;
