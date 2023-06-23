import styled from '@emotion/styled';

const Container = styled.li`
  list-style: none;

  > * {
    background-color: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};
    border: 1px solid ${({ theme: { colors } }) => colors.GREEN_500};
    border-radius: 5px;

    display: flex;
    align-items: center;
  }

  > *:hover {
    cursor: pointer;
  }
`;

const WrapperList = styled.div`
  justify-content: space-between;
  margin-top: 1rem;
  padding: 0.5rem;
`;

const WrapperGrid = styled.div`
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;

const WrapperImg = styled.div`
  width: 150px;
  height: 200px;
  background-color: #ffb26f;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 110px;
    height: 140px;
  }
`;

const Title = styled.h1`
  width: 100%;
  font-size: 1.2rem;
  font-weight: 900;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0.5rem;

  ${props => {
    if (props.grid) return `margin-bottom: 0.3rem; padding: 0.2rem;`;
  }}

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 1rem;
  }
`;

const Date = styled.span`
  color: ${({ theme: { colors } }) => colors.GREEN_300};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 0.8rem;
  }
`;

export { Container, WrapperList, WrapperGrid, Title, Date, WrapperImg };
