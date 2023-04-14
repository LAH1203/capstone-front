const isBlank = text => {
  const result = text.split(' ').join('');

  return checkLength(result);
};

const checkLength = text => {
  return text.length === 0;
};

export { isBlank, checkLength };
