import * as S from './index.styles';

import Header from '@/components/Header';

const Layout = ({ children }) => {
  return (
    <S.Container>
      <Header />
      <main>{children}</main>
    </S.Container>
  );
};

export default Layout;
