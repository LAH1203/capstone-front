import { useState } from 'react';

const useInput = initValue => {
  const [value, setValue] = useState(initValue);

  const onChangeValue = e => {
    setValue(e.target.value);
  };

  return [value, onChangeValue];
};

export default useInput;
