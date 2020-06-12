import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export interface IParams extends RequestInit {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
}

export function useFetch(url: RequestInfo, params?: IParams) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect((): (() => void) => {
    /* previene memory leaks cuando no se desuscribe
      correctamente los useStates. */
    let isSubscribe = true;
    setLoading(true);

    /* Es async para conectar con suspense de React. */
    async function fetchAsync() {
      await fetch(url, params)
        .then(r => r.json())
        .then(data => {
          if (isSubscribe) {
            setData(data);
            setLoading(false);
          }
        })
        .catch(e => {
          if (isSubscribe) {
            console.error("Algo ha fallado durante el fetch ->", e);

            setError(e);
            setLoading(false);
          }
        });
    }

    fetchAsync();

    /* Desuscripción */
    return () => (isSubscribe = false);
  }, [url]);

  return { data, error, loading };
}

useFetch.propTypes = {
  url: PropTypes.string.isRequired,
  params: PropTypes.object
};
