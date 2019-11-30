import { MaterialBase } from "./MaterialBase";

/** Interfaz que define las propiedades que debe
 * tener el componente "PermanentAppBar".
 */
export interface PermanentAppBarProps extends MaterialBase {
  /** String que recibe el título a mostrar en el AppBar */
  title?: string;

  /** Boolean que indica si la animación de elevación en AppBar está activa. */
  enableElevation?: boolean;

  /** Boolean que define si la animación de hide en AppBar está activa. */
  enableHide?: boolean;

  /** Number que define el ancho del drawer. */
  drawerWidth: number;
}
