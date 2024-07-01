import { useState, useEffect } from 'react';

 export default function useApi(url, options) {
  const [data, setData] = useState(null);
  const [loadings, setLoading] = useState(true);
  const [errors, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, loadings, errors };
};


