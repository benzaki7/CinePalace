import { useState, useEffect } from "react";

export const useFetch = (url) => {

  const [movies, setMovies] = useState(null);
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

          const abortCont = new AbortController();

          fetch(url, {signal: abortCont.signal})
          .then(res => {
              if (res.ok) {
                  return res.json();
              }
              throw Error('There was a problem. Please try again later!')
          })
          .then(data => {
              setMovies(data.results);
              setResults(data.total_results)
              setIsLoading(false);
              setError(null);
          })
          .catch (err => {
              if (err.name === 'AbortError') {
                  console.log('fetch aborted');
              } else {
                  setError(err.message);
                  setIsLoading(false);
              }
          })

      return () => abortCont.abort();

  }, [url])

  return {movies, results, isLoading, error}
};


export const useOnClickOutside = (ref, handler) => {
  
  useEffect(() => {
    const listener = e => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    };

    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };

  }, [ref, handler],);
};