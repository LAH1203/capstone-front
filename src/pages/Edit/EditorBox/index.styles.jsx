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

const Blocks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.725rem;
  margin-left: 0.725rem;
  margin-top: 0.75rem;
  margin-right: 1.25rem;
`;

export { Container, EditELementBox, Blocks };
