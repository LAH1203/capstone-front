import { useState } from 'react';

const useClosing = (animationTime, setOffFunc) => {
  const [isClosing, setIsClosing] = useState(false);

  const close = () => {
    setIsClosing(true);

    setTimeout(() => {
      setOffFunc();
      setIsClosing(false);
    }, animationTime);
  };

  return { isClosing, close };
};

export default useClosing;
