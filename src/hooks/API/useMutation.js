import { useCallback, useState } from 'react';

export const useMutation = (deps, request) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState(null);

  const mutate = useCallback(
    (body) => {
      setIsLoading(true);
      request(body)
        .then((response) => {
          setIsLoading(false);
          setData(response);
        })
        .catch((e) => {
          console.log(e.response.data.message)
          setIsLoading(false);
          setError(e);
        });
    },
    typeof deps === 'string' ? [] : deps,
  );
  return { mutate, isLoading, error, data };
};
