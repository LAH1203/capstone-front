import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1.5rem;
  width: 100%;
  @media screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.sm}px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Input = styled.input`
  height: 2rem;
  width: 80%;
  font-size: 1.25rem;
  background: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};

  @media screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.sm}px) {
    width: 100%;
    height: 1.25rem;
  }
`;

const DateBox = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.sm}px) {
    width: 80%;
    font-size: medium;
    gap: 0.735rem;
  }
`;

const DateInfo = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  span {
    display: block;
    &:first-of-type {
      flex-grow: 35%;
      text-align: center;
    }
    &:last-of-type {
      width: 65%;
      text-align: start;
    }
  }

  select {
    border: 1px solid ${({ theme: { colors } }) => colors.GREEN_500};
    width: 3rem;
    border-radius: 8px;
    &:focus {
      outline: none;
    }
  }
  @media screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.sm}px) {
    width: 90%;
    gap: 2rem;
    span {
      display: block;
      &:first-of-type {
        width: 35%;
        text-align: center;
      }
      &:last-of-type {
        width: 65%;
        text-align: start;
      }
    }
  }
`;

export { Container, Input, DateBox, DateInfo };
