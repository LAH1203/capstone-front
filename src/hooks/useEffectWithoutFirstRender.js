import { useEffect, useRef } from 'react';

const useEffectWithoutFirstRender = (func, deps) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current) {
      return func();
    }
    isFirstRender.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useEffectWithoutFirstRender;
