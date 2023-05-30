import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;

  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: column;
    gap: 1.25rem;
  }
`;

const InputBox = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const GuideLineDesktop = styled.p`
  width: 12rem;
  padding: 0.525rem;

  position: absolute;
  display: none;
  top: -4rem;

  font-size: x-small;
  line-height: 0.725rem;
  text-align: center;

  background-color: rgba(217, 217, 217, 0.7);
  border-radius: 10px;
`;

const GuideLineMobile = styled.p`
  display: none;
  font-size: x-small;
  line-height: 0.725rem;
  text-align: end;
  color: ${({ theme: { colors } }) => colors.GREEN_500};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: block;
  }
`;

const Input = styled.label`
  display: flex;
  align-items: center;
  position: relative;

  padding: 0 0.5rem;
  border: 0.5px solid ${({ theme: { colors } }) => colors.GREEN_500};
  border-radius: 10px;
  background: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};
  color: ${({ theme: { colors } }) => colors.GREEN_500};

  font-size: 1.25rem;
  font-weight: 700;

  p:hover ~ p {
    display: block;
  }

  input {
    border: none;
    border-radius: 10px;
    font-size: 1rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 7rem;

    input {
      width: 100%;
      border: none;
      font-size: 0.8rem;
      border-radius: 10px;
    }
    p:hover ~ p {
      display: none;
    }
  }
`;

const HashtagList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  word-break: break-all;
`;

const Hashtag = styled.p`
  font-size: 1rem;
  color: #777777;
  transition: all 0.3s ease-in;
  cursor: pointer;

  &:hover {
    color: ${({ theme: { colors } }) => colors.GREEN_500};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 0.9rem;
  }
`;

export {
  Container,
  InputBox,
  Input,
  Hashtag,
  GuideLineDesktop,
  GuideLineMobile,
  HashtagList,
};
