import { createPortal } from 'react-dom';

const Portal = ({ to, children }) => {
  const modalElement = document.getElementById('modal');
  const snackbarElement = document.getElementById('snackbar');

  switch (to) {
    case 'modal':
      return createPortal(children, modalElement);
    case 'snackbar':
      return createPortal(children, snackbarElement);
    default:
      return <></>;
  }
};

export default Portal;
