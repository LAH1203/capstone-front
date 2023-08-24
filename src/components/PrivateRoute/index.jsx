import { useAtom } from 'jotai';
import { Route, Redirect } from 'react-router-dom';

import { userAtom } from '@/store';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const [{ isLogin }] = useAtom(userAtom);
  return (
    <Route
      {...rest}
      render={props =>
        isLogin ? <Component {...props} /> : <Redirect to="/landing" />
      }
    />
  );
};

export default PrivateRoute;
