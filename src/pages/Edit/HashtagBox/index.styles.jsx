import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;

  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.sm}px) {
    flex-direction: column;
    gap: 1.25rem;
  }
`;

const InputBox = styled.div`
  @media screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.sm}px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const GuideLineDesktop = styled.div`
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

const GuideLineMobile = styled.div`
  display: none;
  font-size: x-small;
  line-height: 0.725rem;
  text-align: end;
  color: ${({ theme: { colors } }) => colors.GREEN_500};
  @media screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.sm}px) {
    display: block;
  }
`;

const Input = styled.label`
  display: flex;
  align-items: center;

  border: 0.5px solid ${({ theme: { colors } }) => colors.GREEN_500};
  background: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};
  border-radius: 10px;
  padding: 0 0.5rem;
  font-size: 1.25rem;
  position: relative;
  color: ${({ theme: { colors } }) => colors.GREEN_500};
  font-weight: 700;
  p:hover ~ div {
    display: block;
  }
  input {
    border: none;
    border-radius: 10px;
    font-size: 1rem;
  }

  @media screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.sm}px) {
    width: 7rem;
    input {
      width: 100%;
      border: none;
      font-size: 1rem;
      border-radius: 10px;
    }
    p:hover ~ div {
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
  font-size: 1.125rem;
  color: #777777;
  transition: all 0.3s ease-in;
  cursor: pointer;
  &:hover {
    color: ${({ theme: { colors } }) => colors.GREEN_500};
  }
  @media screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.sm}px) {
    font-size: 0.75rem;
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
