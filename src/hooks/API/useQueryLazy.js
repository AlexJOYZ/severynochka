import { useCallback, useState } from 'react';

export const useQueryLazy = (deps, request, config = null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const query = useCallback(
    (body) => {
      setIsLoading(true);
      return request(body)
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
    },
    typeof deps === 'string' ? [] : deps,
  );
  return { query, isLoading, error };
};
