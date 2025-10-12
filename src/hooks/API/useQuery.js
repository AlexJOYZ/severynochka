import { useEffect, useState } from 'react';

export const useQuery = (deps, request, config = null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState(null);

  useEffect(
    () => {
      setIsLoading(true);
      request()
        .then(async (response) => {
          if (config?.onSuccess) config?.onSuccess(response);
          setData(response);
          setIsLoading(false);
        })
        .catch((e) => {
          if (config?.onFailure) config?.onFailure(e);
          setError(e.message);
          setIsLoading(false);
        });
    },
    typeof deps === 'string' ? [] : deps,
  );

  return { isLoading, error, data };
};
