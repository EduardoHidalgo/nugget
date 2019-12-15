import React, { Suspense, cloneElement } from "react";
import PropTypes from "prop-types";
import useFetch from "./useFetch";

export default function Fetching(props) {
  const { url, params, fallback, fault, children } = props;
  const { data, error, loading } = useFetch(url, params);

  /* Hasta que la data se ha obtenido se inyecta en el
  componente children. también ayuda a mantener isolado el
  componente de la lógica del manejo de la data. */
  function InyectData() {
    return cloneElement(children, {
      data: data
    });
  }

  /** ALERTA!!!
   *
   * Debido a que Suspense no funciona en entornos SSR y por
   * algún otro motivo el fallback no está detectando el fetch,
   * esta hardcode el render del componente "fallback" dentro de
   * suspense. Esto deberá cambiar con la versión 17 de React.
   */
  return (
    <Suspense fallback={fallback}>
      {error == null ? (loading ? fallback : InyectData()) : fault}
    </Suspense>
  );
}

useFetch.propTypes = {
  url: PropTypes.string.isRequired,
  params: PropTypes.object,

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
