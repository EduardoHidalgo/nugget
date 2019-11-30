import { ElevationScrollProps } from "./ElevationScrollProps";
import { AppBarBaseProps } from "./AppBarBaseProps";
import { AppBar } from "material-ui";

/** Esta interfaz define las propiedades
 * asociadas con el componente "HideOnScroll".
 */
export interface HideOnScrollProps extends ElevationScrollProps {
  /** Boolean que define si la animación de hide en AppBar está activa. */
  enableHide?: boolean;
}

/** Interfaz que define el tipado del elemento children que espera.
 */
export interface HideOnScrollChildren {
  /** Requiere como children un elemento React de tipo <AppBar />. */
  children: React.ReactElement<AppBar>;
}
