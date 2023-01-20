import { createPortal } from 'react-dom';

const Portal = ({ to, children }) => {
  const modalElement = document.getElementById('modal');

  switch (to) {
    case 'modal':
      return createPortal(children, modalElement);
    default:
      return <></>;
  }
};

export default Portal;
