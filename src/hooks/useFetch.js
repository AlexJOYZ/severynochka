import { useState } from 'react';

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetching = async (...arg) => {
    try {
      setIsLoading(true);
      await callback(arg);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, fetching };
};
