import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 1rem;
`;

const WrapperInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-bottom: 0.5rem;
`;

const Name = styled.p`
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.GREEN_900};
`;

const Value = styled.p`
  color: ${({ theme: { colors } }) => colors.GREEN_300};
`;

const ContainerGraph = styled.div`
  width: 100%;
  height: 2rem;

  border: 2px solid ${({ theme: { colors } }) => colors.RED_200};
  border-radius: 5px;

  display: flex;
`;

const growing = keyframes`
  0%{
    width: 0%;
  }
  100%{
    width: 100%;
  }
`;

const WrapperGraph = styled.div`
  width: ${props => props.percentage}%;
  display: flex;
`;

const Graph = styled.div`
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.RED_200};
  border-radius: ${props => (props.percentage === 100 ? '3px' : 0)};
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;

  margin: 0.2rem;

  animation: ${growing} 1s ease-in-out;
`;

export {
  Container,
  WrapperInfo,
  Name,
  Value,
  ContainerGraph,
  WrapperGraph,
  Graph,
};
