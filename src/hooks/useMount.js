import { useEffect, useRef } from 'react';

const useMount = (func, deps) => {
  const isMounted = useRef(true);

  useEffect(() => {
    if (!isMounted.current) {
      return func();
    }
    isMounted.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useMount;
