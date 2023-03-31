const useDebounce = () => {
  const debounce = (func, delay) => {
    let timerId;

    return (...args) => {
      if (timerId) {
        clearTimeout(timerId);
      }

      timerId = setTimeout(() => {
        func.apply(this, args);
        timerId = null;
      }, delay);
    };
  };

  return debounce;
};

export default useDebounce;
