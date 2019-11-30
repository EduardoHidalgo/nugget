import { DrawerBaseProps } from "./DrawerBaseProps";

/** Interfaz que define las propiedades que debe
 * tener el componente "TemporaryDrawer".
 */
export interface TemporaryDrawerProps extends DrawerBaseProps {
  /** Number que define el ancho del drawer. */
  drawerWidth: number;

  /** Boolean que habilita el modo "swipe" para mobile. */
  swippeable?: boolean;
}
