import { useEffect, useState } from 'react';

import { useTheme } from '@emotion/react';

import Desktop from './Desktop';
import Mobile from './Mobile';

import useDebounce from '@/hooks/useDebounce';

const Header = () => {
  const debounce = useDebounce();
  const theme = useTheme();

  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= theme.breakpoints.sm,
  );

  useEffect(() => {
    const handler = debounce(() => {
      setIsMobile(window.innerWidth <= theme.breakpoints.sm);
    }, 100);

    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, [theme, debounce]);

  return <>{isMobile ? <Mobile /> : <Desktop />}</>;
};

export default Header;
