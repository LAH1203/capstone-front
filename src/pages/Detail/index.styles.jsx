import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 5%;
`;

const DescriptionBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Btn = styled.button`
  padding: 0.5rem 1.75rem;
  border-radius: 10px;
  font-weight: 800;
  font-size: 0.9rem;
  color: ${({ theme: { colors } }) => colors.GREEN_500};
  background-color: ${({ theme: { colors } }) => colors.GREEN_100};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    padding: 0.4rem 1.4rem;
    border-radius: 10px;
    font-size: 0.8rem;
    border-radius: 6px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  font-size: 1.1rem;
`;

const StatusWrapper = styled.div`
  display: flex;
  gap: 2rem;

  padding: 0 0.5rem;
`;

const Status = styled.label`
  display: flex;
  gap: 0.5rem;
`;

const Title = styled.p`
  font-size: 1.3rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: white;
  border: 0.5px solid ${({ theme: { colors } }) => colors.GREEN_500};
  border-radius: 4px;
  padding: 1.5rem 5%;

  font-family: ${({ font }) => {
    switch (font) {
      case 'neo':
        return 'NanumSquareNeo';
      case 'namsan':
        return 'SeoulNamsan';
      case 'maru':
        return 'MaruBuri';
      case 'hyemin':
        return 'IMHyemin';
      case 'diary':
        return 'Diary';
      case 'zziba':
        return 'UhBeeZZIBA';
      default:
        return 'IBMPlexSansKR';
    }
  }};
`;

const Block = styled.div`
  display: flex;
  justify-content: ${({ sort }) => sort};

  width: 100%;
  line-height: 1.2rem;

  h1 {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2.3rem;
  }
  h2 {
    font-size: 1.45rem;
    font-weight: 700;
    line-height: 2.15rem;
  }
  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 2rem;
  }
  h4 {
    font-size: 1.15rem;
    font-weight: 700;
    line-height: 1.85rem;
  }
  b {
    font-weight: 700;
  }
  i {
    font-style: italic;
  }
  pre {
    width: 100%;
    border-radius: 8px;
    padding: 1rem;
    box-sizing: border-box;
    white-space: pre-wrap;
    background: ${({ theme: { colors } }) => colors.GREEN_100};
  }
  img {
    width: 40%;

    ${({ theme: { breakpoints } }) => css`
      @media screen and (min-width: ${breakpoints.md +
        1}px) and (max-width: ${breakpoints.lg}px) {
        width: 60%;
      }

      @media screen and (min-width: ${breakpoints.sm +
        1}px) and (max-width: ${breakpoints.md}px) {
        width: 70%;
      }

      @media screen and (max-width: ${breakpoints.sm}px) {
        width: 80%;
      }
    `}
  }
`;

const HashtagWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Hashtag = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;

  width: fit-content;

  font-size: 0.9rem;

  ${({ theme: { breakpoints } }) => css`
    @media screen and (min-width: ${breakpoints.sm +
      1}px) and (max-width: ${breakpoints.md}px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: ${breakpoints.sm}px) {
      grid-template-columns: repeat(2, 1fr);
    }
  `}
`;

export {
  Container,
  DescriptionBox,
  Description,
  StatusWrapper,
  Status,
  Title,
  Content,
  Block,
  Btn,
  HashtagWrapper,
  Hashtag,
};
