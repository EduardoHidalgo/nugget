import React, {
  Suspense,
  cloneElement,
  SuspenseProps,
  ReactElement
} from "react";
import { useFetch, IParams } from "./useFetch";
import { Children } from "../../types/Children";

export interface IFetchingProps {
  url: RequestInfo;
  params?: IParams;
  fallback: SuspenseProps;
  fault: React.ElementType;
  children: Children;
}

export default function Fetching(props: IFetchingProps) {
  const { url, params, fallback, fault, children } = props;
  const { data, error, loading } = useFetch(url, params);

  /* Hasta que la data se ha obtenido se inyecta en el
  componente children. también ayuda a mantener isolado el
  componente de la lógica del manejo de la data. */
  function InyectData() {
    return cloneElement(children as ReactElement, {
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
