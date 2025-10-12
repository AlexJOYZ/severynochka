import { useCallback, useState } from 'react';

export const useQueryLazy = (deps, request, config = null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const query = useCallback(() => {
    setIsLoading(true);
    return request()
      .then((response) => {
        if (config?.onSuccess) config?.onSuccess(response);
        setIsLoading(false);
        setData(response);
      })
      .catch((e) => {
        if (config?.onFailure) config?.onFailure(e);
        setIsLoading(false);
        setError(e.message);
      });
  }, deps);
  return { query, isLoading, error };
};
