import { useEffect } from 'react';

import { useQuery } from 'react-query';

import useError from '@/hooks/useError';

const useFetchQuery = (deps, fetchFunc, option = {}) => {
  const dataQuery = useQuery(deps, () => fetchFunc(), {
    ...option,
  });
  const handleError = useError();

  useEffect(() => {
    if (dataQuery.isError) handleError(dataQuery.error.code);
  }, [dataQuery.isError]);

  return { dataQuery };
};

export default useFetchQuery;
