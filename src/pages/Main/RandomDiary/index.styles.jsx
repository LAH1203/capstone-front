import styled from '@emotion/styled';

const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};
  margin: 2rem 0;
  padding: 2rem;
  border-radius: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-bottom: 0;
    padding: 1.5rem;
  }
`;

const WrapperDateInfo = styled.div`
  margin-bottom: 2rem;
`;

const TextBlack = styled.span`
  color: ${({ theme: { colors } }) => colors.GREEN_900};
  font-size: 1.2rem;
  font-weight: bold;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 1rem;
  }
`;

const TextGreen = styled.span`
  color: ${({ theme: { colors } }) => colors.GREEN_600};
  font-size: 1.2rem;
  font-weight: bold;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 1rem;
  }
`;

const WrapperTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1rem;
`;

const Title = styled.h1`
  color: ${({ theme: { colors } }) => colors.GREEN_700};
  font-size: 1.2rem;
  font-weight: 500;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 1rem;
  }
`;

const WrapperIcon = styled.div`
  display: flex;
`;

const triangleValue = '1rem';

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-bottom: ${triangleValue} solid transparent;
  border-top: ${triangleValue} solid transparent;
  border-left: ${triangleValue} solid transparent;
  border-right: ${triangleValue} solid
    ${({ theme: { colors } }) => colors.GREEN_100};
`;

const Icon = styled.div`
  background-color: ${({ theme: { colors } }) => colors.GREEN_100};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 1rem;
  }
`;

const WrapperContent = styled.div`
  height: 22rem;
  background-color: ${({ theme: { colors } }) => colors.GREEN_100};
  border-radius: 10px;

  padding: 1.5rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    height: 18rem;

    padding: 1rem;
  }
`;

const Content = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 12;
  -webkit-box-orient: vertical;

  overflow: hidden;
  line-height: 1.8rem;
  text-overflow: ellipsis;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 0.9rem;
    font-weight: 500;

    line-height: 1.5rem;
  }
`;

const WrapperNoDiary = styled.div`
  border-radius: 10px;

  p {
    color: ${({ theme: { colors } }) => colors.GREEN_900};
    margin-top: 2rem;
  }
`;

export {
  Container,
  WrapperDateInfo,
  TextBlack,
  TextGreen,
  WrapperTitle,
  Title,
  WrapperIcon,
  Triangle,
  Icon,
  WrapperContent,
  Content,
  WrapperNoDiary,
};
