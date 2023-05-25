import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40px;

  background: ${({ theme: { colors } }) => colors.GREEN_500};
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: none;
  color: white;

  padding: 0;

  font-size: 2rem;

  svg {
    width: 70%;
  }
`;

const MenuButton = styled(Button)`
  position: absolute;
  right: 0;
`;

export { Container, Button, MenuButton };
