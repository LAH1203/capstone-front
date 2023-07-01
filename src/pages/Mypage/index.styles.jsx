import styled from '@emotion/styled';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  
  &::-webkit-scrollbar {
    background-color: ${({ theme: { colors } }) => colors.GREEN_50};
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme: { colors } }) => colors.GREEN_300};
  }
`;
const Wrapper = styled.div`
  flex: 1 1 auto;
`;

export { Container, Wrapper };
