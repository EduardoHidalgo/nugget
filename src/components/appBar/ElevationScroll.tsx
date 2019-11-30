import { cloneElement } from "react";
import {
  ElevationScrollProps,
  ElevationScrollChildren
} from "../../types/ElevationScrollProps";
import { HideOnScrollProps } from "../../types/HideOnScrollProps";
import { useScrollTrigger } from "@material-ui/core";

interface Props extends ElevationScrollProps, ElevationScrollChildren {}

/** Componente para la animación de Elevación en AppBar. Se usa como
 * un elemento de react que hace wrapper de otra animación, y dentro de
 * esta se renderea como children el componente "AppBar".
 *
 * @see https://material-ui.com/components/app-bar/#elevate-app-bar
 *
 * @param props ElevationScrollProps, ElevationScrollChildren
 * @returns Retorna un elemento de React que sirve como wrapper del
 * componente "HideOnScrollProps".
 */
export function ElevationScroll(props: Props) {
  const { window, enableElevation, children } = props;
  const elevation: number = props.elevation ? props.elevation : 4;

  /* Calcula el evento de trigger al hacer scroll en la ventana */
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  /* Retorna una copia del children con props inyectados (que debe ser un 
    elemento de react de tipo <HideOnSroll />). */
  return cloneElement(children as React.ReactElement<HideOnScrollProps>, {
    /* Si la variable "enableElevation" viene undefined, se setea false por default */
    enableElevation: enableElevation != undefined ? enableElevation : false,
    elevation: trigger ? elevation : 0
  }) as JSX.Element;
}
