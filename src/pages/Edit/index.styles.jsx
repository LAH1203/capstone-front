import styled from '@emotion/styled';

const Container = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  width: 100%;
  min-height: 100%;
  padding: 4rem 6rem;

  @media screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.sm}px) {
    padding: 3rem 1.75rem;
    gap: 1rem;
  }
`;

const BtnBox = styled.div`
  min-width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;

  button {
    padding: 0.5rem 1.75rem;
    border-radius: 10px;
    font-weight: 800;
    font-size: 0.9rem;
  }
  button:first-of-type {
    color: #fff;
    background-color: ${({ theme: { colors } }) => colors.GREEN_500};
  }
  button:last-of-type {
    color: ${({ theme: { colors } }) => colors.GREEN_500};
    background-color: ${({ theme: { colors } }) => colors.GREEN_100};
  }

  @media screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.sm}px) {
    justify-content: center;

    button {
      padding: 0.4rem 1.4rem;
      border-radius: 10px;
      font-size: 0.8rem;
      border-radius: 6px;
    }
  }
`;

export { Container, BtnBox };
