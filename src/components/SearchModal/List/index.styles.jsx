import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const loadingAnimation = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, 1rem, 0);
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;

  width: 90%;

  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme: { colors } }) => colors.GREEN_200};
    border-radius: 4px;
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  box-sizing: border-box;

  width: 100%;
  padding: 2rem 1rem;
  border-bottom: 0.5px solid ${({ theme: { colors } }) => colors.GREEN_400};

  cursor: pointer;

  transition: transform 0.5s;

  :last-of-type {
    border: 0;
  }
  &:hover {
    transform: scale3d(1.01, 1.01, 1.01);
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p:first-of-type {
    font-size: 1.2rem;
  }
  p:last-of-type {
    color: ${({ theme: { colors } }) => colors.GREEN_500};
    font-weight: 600;
  }
`;

const Content = styled.p`
  width: 100%;
  line-height: 1.1rem;

  display: -webkit-box;

  overflow: hidden;
  text-overflow: ellipsis;

  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const HashtagWrapper = styled.div`
  display: flex;
  gap: 1rem;

  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Hashtag = styled.span`
  background: ${({ theme: { colors } }) => colors.GREEN_200};
  color: white;

  border-radius: 1rem;
  padding: 0.3rem 0.5rem;

  font-size: 0.9rem;
  white-space: nowrap;
`;

const EmptyList = styled.div`
  text-align: center;
  overflow: hidden;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  width: 100%;
  margin-bottom: 3rem;

  p {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;

    background: ${({ theme: { colors } }) => colors.GREEN_400};

    animation: ${loadingAnimation} 0.7s infinite alternate;

    :nth-of-type(2) {
      animation-delay: -0.25s;
    }
    :nth-of-type(1) {
      animation-delay: -0.5s;
    }
  }
`;

export {
  List,
  Item,
  Title,
  Content,
  HashtagWrapper,
  Hashtag,
  EmptyList,
  Loading,
};
