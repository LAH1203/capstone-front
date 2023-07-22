import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';

import * as S from './index.styles';

import { getDiary } from '@/apis/request/diary';
import { MOOD } from '@/constants/diary';
import { BROWSER_PATH } from '@/constants/path';
import { convertDate, isToday } from '@/utils/date';
import { weatherToIcon } from '@/utils/weather';

const Detail = () => {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ['detail', id],
    queryFn: () => getDiary(id),
  });

  return (
    <S.Container>
      <S.DescriptionBox>
        <S.Description>
          <div>{convertDate(data.date)}</div>
          <S.StatusWrapper>
            <S.Status>
              날씨{' '}
              <span>{data.weather ? weatherToIcon(data.weather) : '🤷'}</span>
            </S.Status>
            <S.Status>
              기분{' '}
              <span>
                {data.mood && data.mood.toUpperCase() in MOOD
                  ? MOOD[data.mood.toUpperCase()].emoji
                  : '🤷'}
              </span>
            </S.Status>
          </S.StatusWrapper>
        </S.Description>
        {isToday(data.date) && (
          <Link to={`${BROWSER_PATH.EDIT}/${id}`}>
            <S.Btn type="button">수정</S.Btn>
          </Link>
        )}
      </S.DescriptionBox>
      <S.Title>{data.title}</S.Title>

      <S.Content font={data.font}>
        {data.blocks.map(block => {
          let returnBlock;

          switch (block.type) {
            case 'heading':
              switch (block.data.level) {
                case 1:
                  returnBlock = <h1>{block.data.text}</h1>;
                  break;
                case 2:
                  returnBlock = <h2>{block.data.text}</h2>;
                  break;
                case 3:
                  returnBlock = <h3>{block.data.text}</h3>;
                  break;
                case 4:
                  returnBlock = <h4>{block.data.text}</h4>;
                  break;
                default:
                // DO NOTHING
              }
              break;
            case 'img':
              returnBlock = <img src={block.data.link} alt="이미지" />;
              break;
            case 'text':
              returnBlock = <div>{block.data.text}</div>;
              break;
            default:
            // DO NOTHING
          }

          return (
            <S.Block sort={block.data.sort} key={block.id}>
              {returnBlock}
            </S.Block>
          );
        })}
      </S.Content>

      <S.HashtagWrapper>
        <S.Hashtag>
          {data.hashtag.map(hashtag => (
            <p key={hashtag}>#{hashtag}</p>
          ))}
        </S.Hashtag>
      </S.HashtagWrapper>
    </S.Container>
  );
};

export default Detail;
