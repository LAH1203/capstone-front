import styled from '@emotion/styled';

const Container = styled.div`
  background: ${({ theme: { colors } }) => colors.INPUT_BACKGROUND};

  border: 0.5px solid ${({ theme: { colors } }) => colors.GREEN_500};
  border-radius: 10px;

  min-width: 100%;
  min-height: 40rem;
  @media screen and (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints.sm}px) {
    min-height: 15rem;
  }
`;

const EditELementBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 0;
  border-bottom: 0.5px solid ${({ theme: { colors } }) => colors.GREEN_500};
`;

export { Container, EditELementBox };
