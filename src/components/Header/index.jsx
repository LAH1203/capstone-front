import { useEffect, useState } from 'react';

import { useTheme } from '@emotion/react';

import Desktop from './Desktop';
import Mobile from './Mobile';

const Header = () => {
  const theme = useTheme();

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= theme.breakpoints.sm,
  );

  useEffect(() => {
    const handler = () => {
      setIsMobile(window.innerWidth <= theme.breakpoints.sm);
    };

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, [theme]);

  return <>{isMobile ? <Mobile /> : <Desktop />}</>;
};

export default Header;
