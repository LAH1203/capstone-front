const setEndContentEditable = contentEditableElement => {
  const range = document.createRange();
  const selection = window.getSelection();

  range.selectNodeContents(contentEditableElement);
  range.collapse(false);

  selection.removeAllRanges();
  selection.addRange(range);
};

export { setEndContentEditable };
