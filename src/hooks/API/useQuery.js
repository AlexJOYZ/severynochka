import { useEffect, useState } from 'react';

export const useQuery = (deps, request) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log(1)
    setIsLoading(true);
    request()
      .then(async (response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setIsLoading(false);
      });
  }, typeof deps === 'string' ? [] : deps);

  return { isLoading, error, data };
};
