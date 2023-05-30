const INITIAL_TEXT_BLOCK = {
  type: 'text',
  data: {
    text: '',
    align: 'left',
  },
  contentRef: null,
};

const INITIAL_HEADING_BLOCK = {
  type: 'heading',
  data: {
    level: 0,
    text: '',
    align: 'left',
  },
};

const INITIAL_IMAGE_BLOCK = {
  type: 'img',
  data: {
    link: '',
    align: 'left',
  },
};

export { INITIAL_TEXT_BLOCK, INITIAL_HEADING_BLOCK, INITIAL_IMAGE_BLOCK };
