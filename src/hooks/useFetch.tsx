import { useState, useEffect } from "react";

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

const useFetch = <T,>(asyncFunction: () => Promise<T>): AsyncState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await asyncFunction();
        setData(result);
      } catch (error: unknown) {
        // Catch unknown error type
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("An unknown error occurred"));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [asyncFunction]);

  return { data, loading, error };
};

export default useFetch;
