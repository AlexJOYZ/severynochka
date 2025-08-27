export const useQueryLazy = (deps, request) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const query = useCallback(() => {
    setIsLoading(true);
    return request()
      .then((response) => {
        setIsLoading(false);
        setData(response);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.message);
      });
  }, deps);
  return { query, isLoading, error };
};
