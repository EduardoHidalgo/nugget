import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import fetch from "isomorphic-unfetch";

export default function useFetch(url, params) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    /* previene memory leaks cuando no se desuscribe
    correctamente los useStates. */
    let isSubscribe = true;
    setLoading(true);

    fetch(url, params)
      .then(r => r.json())
      .then(data => {
        if (isSubscribe) {
          setData(data);
          setLoading(false);
        }
      })
      .catch(e => {
        if (isSubscribe) {
          setError(e);
          setLoading(false);
        }
      });

    /* Desuscripción */
    return () => (isSubscribe = false);
  }, [url]);

  return { data, error, loading };
}

useFetch.propTypes = {
  url: PropTypes.string.isRequired,
  params: PropTypes.object
};
