import { useCallback, useState } from 'react';

export const useMutation = (deps, request, config = null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState(null);

  const mutate = useCallback(
    (body) => {
      setIsLoading(true);
      request(body)
        .then((response) => {
          if (config?.onSuccess) config?.onSuccess(response);
          setIsLoading(false);
          setData(response);
        })
        .catch((e) => {
          if (config?.onFailure) config?.onFailure(e);
          setIsLoading(false);
          setError(e);
        });
    },
    typeof deps === 'string' ? [] : deps,
  );
  return { mutate, isLoading, error, data };
};
