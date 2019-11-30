import React, { cloneElement } from "react";
import { useScrollTrigger, Slide } from "@material-ui/core";
import {
  HideOnScrollProps,
  HideOnScrollChildren
} from "../../types/HideOnScrollProps";

interface Props extends HideOnScrollProps, HideOnScrollChildren {}

/* Componente para la animación de HideOnScroll en AppBar */

/** Componente para la animación de HideOnScroll en AppBar. Se usa como un wrapper
 * para el elemento "AppBar" de material-ui.
 *
 * @see https://material-ui.com/components/app-bar/#hide-app-bar
 *
 * @param props HideOnScrollProps, HideOnScrollChildren
 * @returns Retorna un elemento de React que sirve como wrapper del
 * componente "AppBar" de material-ui.
 */
export function HideOnScroll(props: Props) {
  const { window, enableHide, enableElevation, children } = props;
  const elevation: number = props.elevation ? props.elevation : 4;
  const originalChildren = children;

  /* Calcula el evento de trigger al hacer scroll en la ventana */
  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  });

  /* En caso de setearse como false la animación, retorna el children sin slide. */
  const elevationComponent = cloneElement(children as React.ReactElement, {
    elevation: elevation
  }) as JSX.Element;

  /* Para que la animación de "HideOnScroll" funcione se utiliza un wrapper de
  material-ui llamado "Slide" que ejecuta la animación. */
  const hideComponent = (
    <Slide appear={false} direction={"down"} in={enableHide ? !trigger : true}>
      {
        cloneElement(children as React.ReactElement, {
          elevation: elevation
        }) as JSX.Element
      }
    </Slide>
  );

  /* Recibe el prop "elevation" del componente ElevationScroll y lo propaga al
    AppBar que es quien requiere dicho prop. Si "enableElevation" es true, hace el render
    únicamente de children (dado que Slide estaría apagado y no habría AppBar). Si ambos
    son false entonces devuelve el children sin efectos. */
  return (enableElevation
    ? elevationComponent
    : enableHide
    ? hideComponent
    : originalChildren) as JSX.Element;
}
