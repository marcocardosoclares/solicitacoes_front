import React from 'react'
import apiClient from '../helper/ApiClient';

const useFetch = (resetData) => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (method, url, options) => {
    let response = null;
    try {
      setError(null);
      setLoading(true);
      if (resetData) setData(null);
      await apiClient[method](url, options)
        .then(r => response = r.data)
        .catch(error => {throw new Error(error)});
    } catch (err) {
      setError(err.message);
    } finally {
      setData(response);
      setLoading(false);
      return { response };
    }
  }, [resetData]);

  return {data, error, loading, request};
};

export default useFetch;
