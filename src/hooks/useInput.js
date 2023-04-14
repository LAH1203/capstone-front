import { useState } from 'react';

const useInput = initValue => {
  const [value, setValue] = useState(initValue);

  const onChangeValue = e => {
    setValue(e.target.value);
  };

  const resetValue = () => {
    setValue(initValue);
  };

  return [value, onChangeValue, resetValue];
};

export default useInput;
