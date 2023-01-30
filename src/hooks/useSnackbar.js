import { useAtom } from 'jotai';

import { snackbarAtom } from '@/store';

const useSnackbar = () => {
  const [{ isShowing, message }, setSnackbar] = useAtom(snackbarAtom);

  const showSnackbar = message => {
    setSnackbar({ isShowing: true, message });
  };

  const resetSnackbar = () => {
    setSnackbar({ isShowing: false, message: '' });
  };

  return { isShowing, message, showSnackbar, resetSnackbar };
};

export default useSnackbar;
