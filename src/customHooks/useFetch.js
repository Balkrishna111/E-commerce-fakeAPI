import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [fetchedData, setFetchedData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // console.log(fetchedData);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setFetchedData(json);
        // console.log(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { fetchedData, error, loading };
}
