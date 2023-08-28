import * as S from './index.styles';

import { MOOD } from '@/constants/diary';
import { weatherToText } from '@/utils/weather';

const RandomDiary = ({ content }) => {
  const hasDiary = Object.keys(content).length > 0;
  const date = hasDiary && content.date.split('-');
  const moodIcon = hasDiary && MOOD[content.mood.toUpperCase()].emoji;

  return (
    <S.Container>
      {hasDiary && (
        <>
          <S.WrapperDateInfo>
            <S.TextBlack>{weatherToText(content.weather)}</S.TextBlack>
            <S.TextGreen>{` ${date[0]}년 ${date[1]}월 ${date[2]}일`}</S.TextGreen>
            <S.TextBlack>의 일기</S.TextBlack>
          </S.WrapperDateInfo>
          <S.WrapperTitle>
            <S.Title>{content.title}</S.Title>
            <S.WrapperIcon>
              <S.Triangle />
              <S.Icon>{moodIcon}</S.Icon>
            </S.WrapperIcon>
          </S.WrapperTitle>
          <S.WrapperContent>
            <S.Content>{content.content}</S.Content>
          </S.WrapperContent>
        </>
      )}
      {!hasDiary && (
        <S.WrapperNoDiary>
          <S.TextGreen>과거의 일기</S.TextGreen>
          <p>
            아직 기록한 일기가 없어요. 일기를 작성하면 과거의 일기를 볼 수
            있어요.
          </p>
        </S.WrapperNoDiary>
      )}
    </S.Container>
  );
};

export default RandomDiary;
