import { MaterialBase } from "./MaterialBase";
/** Interfaz que define las propiedades que debe
 * tener el componente "BottomAppBar".
 */
export interface BottomAppBarProps extends MaterialBase {
  /** Función que comunica el dashboard con el componente. Hace trigger del
  estado "openDrawer" del drawer. */
  handleOpenDrawer: () => void;
}
