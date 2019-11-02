import React, { Suspense, cloneElement } from "react";
import PropTypes from "prop-types";
import useFetch from "../utils/useFetch";

export default function Fetching(props) {
  const { url, fallback, fault, children } = props;
  const { data, error } = useFetch(url);

  /* Hasta que la data se ha obtenido se inyecta en el
  componente children. también ayuda a mantener isolado el
  componente de la lógica del manejo de la data. */
  function InyectData() {
    return cloneElement(children, {
      data: data
    });
  }

  return (
    <Suspense fallback={fallback}>
      {error == null ? (data ? InyectData() : null) : fault}
    </Suspense>
  );
}

useFetch.propTypes = {
  url: PropTypes.string.isRequired,
  fallback: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  fault: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
